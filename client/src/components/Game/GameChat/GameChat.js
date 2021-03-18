import React, { useState } from 'react'
// Material UI Components
import { Container, Input, Box, Button, Paper, Typography } from '@material-ui/core';
// Material UI Icons
import SendIcon from '@material-ui/icons/Send';
// Custom Components
import Message from './Message';

export default function GameChat({ loggedUserID, msgList, sendMessage }) {
  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    setMsg(e.target.value)
  }
  return (
    <Paper>
      <Box p={3}>
        <Typography variant="body1">GAME CHAT WINDOW</Typography>
        <Container>
          {msgList.map((val, idx) => {
            const { id, userName, msg, time } = val;
            if (loggedUserID === id) {
              return (
                <div key={`${id} ${msg} ${idx}`}>
                  <Message userName={userName} msg={msg} time={time} />
                </div>
              )
            } else {
              return (
                <div key={`${id} ${msg} ${idx}`}>
                  <Message userName={userName} msg={msg} time={time} />
                </div>
              )
            }
          })}
        </Container>
        <Box display="flex">
          <Input style={{ flexGrow: 1 }} value={msg} onChange={handleChange} placeholder="Enter chat here" />
          <Button variant="contained" color="primary" onClick={() => sendMessage(msg)}>
            <SendIcon />
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}