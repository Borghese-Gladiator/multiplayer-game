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
  const handleSend = (e) => {
    console.log("SENDING")
    sendMessage(msg)
    console.log("SENT?")
  }
  return (
    <div>
      <Typography variant="body1">GAME CHAT WINDOW</Typography>
      <Container
        style={{
          background: 'rgb(233, 229, 229)',
          borderRadius: '5px',
          padding: 10,
          overflowY: 'auto',
          height: 500
        }}
      >
        <Box display="flex" flexDirection="column">
          {msgList.map((val, idx) => {
            const { id, userName, msg, time } = val;
            if (loggedUserID === id) {
              return (
                <Box alignSelf="flex-start" key={`${id} ${msg} ${idx}`}>
                  <Message userName={userName} msg={msg} time={time} />
                </Box>
              )
            } else {
              return (
                <Box alignSelf="flex-end" key={`${id} ${msg} ${idx}`}>
                  <Message userName={userName} msg={msg} time={time} />
                </Box>
              )
            }
          })}
        </Box>
      </Container>
      <Box display="flex">
        <Input style={{ flexGrow: 1 }} value={msg} onChange={handleChange} placeholder="Enter chat here" />
        <Button variant="contained" color="primary" onClick={handleSend}>
          <SendIcon />
        </Button>
      </Box>
    </div>
  )
}