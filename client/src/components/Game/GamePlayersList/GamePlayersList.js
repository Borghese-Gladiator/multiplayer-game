import React, { useState } from 'react'
// Material UI components
import { Paper, Box, Grid, Typography } from '@material-ui/core';
// Material UI icons
import AccountBoxIcon from '@material-ui/icons/AccountBox';

function GamePlayersList(props) {
  const [players, setPlayers] = useState([
    { id: "1", name: "Player 1" },
    { id: "2", name: "Player 1" },
    { id: "3", name: "Player 1" },
    { id: "4", name: "Player 1" },
    { id: "5", name: "Player 1" },
  ]);

  return (
    <Paper>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Typography variant="h4">Players</Typography>
        <br />
        <Grid container>
          {players.map((val, idx) => {
            const { id, name } = val;
            return (
              <Grid item xs={4} md={3} lg={2} key={idx}>
                <AccountBoxIcon style={{ fontSize: "40px" }} />
                <Typography variant="h6" gutterBottom>{name}</Typography>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Paper>

  )
}

export default GamePlayersList;