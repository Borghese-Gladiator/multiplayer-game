import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';

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
          <Grid item xs={4} key={id}>
            <Typography variant="h6" gutterBottom>{name}</Typography>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default PlayersList;