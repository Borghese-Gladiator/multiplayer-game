import React, { useState, useEffect } from 'react'
// routing - get roomID from URL
import { useParams } from 'react-router-dom';
// SocketIO Client
import socketIOClient from "socket.io-client";
// Generate usernames
import userGen from "username-generator"
// Material UI Components
import {
  Box, Grid, Paper, Button, Typography, Container
} from '@material-ui/core';
// custom components
import CountdownTimer from './CountdownTimer';
import LoadingDisplay from '../LoadingDisplay';

// client-side
const ENDPOINT = process.env.REACT_APP_NODE_ENV === "production" ? process.env.REACT_APP_API_URL : "http://127.0.0.1:4001";
const socket = socketIOClient(ENDPOINT, {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});

function Game() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { roomID } = useParams();

  const [currentPhase, setCurrentPhase] = useState("VOTING PHASE");

  const [user, setUser] = useState({
    usersList: null
  });
  const [msg, setMsg] = useState("");
  const [recMsg, setRecMsg] = useState({
    listMsg: []
  });
  const [loggedUser, setLoggedUser] = useState();

  useEffect(() => {
    socket.on('message', function (data) {
      console.log('Incoming message:', data);
    });

    // subscribe a new user
    socket.emit("login", userGen.generateUsername());
    // list of connected users
    socket.on("users", data => {
      setUser({ usersList: JSON.parse(data) })
    });
    // get the logged user
    socket.on("connecteduser", data => {
      setLoggedUser(JSON.parse(data));
    });

    // we get the messages
    socket.on("getMsg", data => {
      let listMessages = recMsg.listMsg;
      listMessages.push(JSON.parse(data));
      setRecMsg({ listMsg: listMessages });
    });
  }, [recMsg]);

  // to send a message
  const sendMessage = () => {
    socket.emit("sendMsg", JSON.stringify({ id: loggedUser.id, msg: msg }));
  }

  if (!socket.connected) {
    return <LoadingDisplay />
  } else {
    return (
      <Container>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Button variant="contained" color="primary" onClick={() => alert("PAUSED")}>PAUSE TIMER</Button>
          <h3>Room ID: {roomID}</h3>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              {/* List of Connected Users */}
              <h3 className="d-flex justify-content-center"> Connected users : {user.usersList?.length} </h3>
              <table className="table">
                <thead>
                  <tr>
                    <th> User name </th>
                    <th> Connection Date </th>
                  </tr>
                </thead>
                <tbody>
                  {user.usersList?.map(user => {
                    return (<tr key={user.id}>
                      <td> {user.userName} </td>
                      <td> {user.connectionTime} </td>
                    </tr>)
                  })}
                </tbody>
              </table>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper>
                <Typography variant="h3">{currentPhase}</Typography>
                <CountdownTimer />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} style={{ minHeight: "50vh" }}>
              {/*CHATBOX COMPONENT */}
              <div>
                <h2 className="d-flex justify-content-center"> Chat </h2>
                {recMsg.listMsg?.map((msgInfo, index) => {
                  return (
                    <div className="d-flex justify-content-center" key={index}>
                      <b>{msgInfo.userName} </b> :  {msgInfo.msg} <small style={{ marginLeft: "18px", color: "blue", marginTop: "5px" }}> {msgInfo.time} </small>
                    </div>
                  )
                })}
              </div>
              <input style={{ width: "300px", display: "inline" }} id="inputmsg" onChange={(event) => setMsg(event.target.value)} />
              <Button className="btn btn-info" id="btnmsg" onClick={() => { sendMessage() }}> Send </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <h3> name: {loggedUser?.userName} </h3>
              <Typography variant="h5">YOUR WORD:</Typography>
              <Typography variant="h3">MIT</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }
}

export default Game;