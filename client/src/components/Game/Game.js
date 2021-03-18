import React, { useState, useEffect } from 'react'
// routing - get roomID from URL
import { useParams } from 'react-router-dom';
// SocketIO Client
import socketIOClient from "socket.io-client";
// Generate usernames
import userGen from "username-generator"
// Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import {
  Box, Grid, Paper, Button, Typography, Container
} from '@material-ui/core';
// custom components
import LoadingDisplay from '../LoadingDisplay';
import GamePlayersList from './GamePlayersList';
import PhaseDisplay from './PhaseDisplay';
import GameChat from './GameChat';

// client-side
const ENDPOINT = process.env.REACT_APP_NODE_ENV === "production" ? process.env.REACT_APP_API_URL : "http://127.0.0.1:4001";
const socket = socketIOClient(ENDPOINT, {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});

function UserWordDisplay({ word }) {
  return (
    <Paper>
      <Typography variant="h6">Your word</Typography>
      <Typography variant="h3">{word}</Typography>
    </Paper>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  }
}))

function Game() {
  const classes = useStyles();
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { roomID } = useParams();

  const [word, setWord] = useState("MIT");

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

  if (socket.connected) {
    return <LoadingDisplay />
  } else {
    return (
      <Container className={classes.root}>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Button variant="contained" color="primary" onClick={() => alert("PAUSED")}>PAUSE TIMER</Button>
          <Typography variant="h5">You are: {word}</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <GamePlayersList />
              <br />
              <UserWordDisplay word={word} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <PhaseDisplay />
              <br />
              <GameChat />
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }
}

export default Game;