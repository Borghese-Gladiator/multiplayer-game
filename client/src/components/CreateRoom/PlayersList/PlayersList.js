import React, { useState } from 'react';
import { Grid, Typography, CardActionArea } from '@material-ui/core';
// icons
import AccountBoxIcon from '@material-ui/icons/AccountBox';

function PlayersList() {
  const [players, setPlayers] = useState([
    { id: "1", name: "Player 1" },
    { id: "2", name: "Player 1" },
    { id: "3", name: "Player 1" },
    { id: "4", name: "Player 1" },
    { id: "5", name: "Player 1" },
  ]);
  return (
    <Grid container>
      {players.map((val, idx) => {
        const { id, name } = val;
        return (
          <Grid item xs={4} md={3} lg={2} key={`${id} ${idx}`}>
            <CardActionArea>
              <AccountBoxIcon style={{ fontSize: "40px", color: "white" }} />
              <Typography variant="h6" gutterBottom style={{ color: "white" }}>{name}</Typography>
            </CardActionArea>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default PlayersList;