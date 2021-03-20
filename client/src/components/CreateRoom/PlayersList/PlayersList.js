// NOTE: I added div inside CardActionArea to enable border styling (CardActionArea does not show borderStyles)

import React from 'react';
// Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, CardActionArea } from '@material-ui/core';
// Material UI Icons
import AccountBoxIcon from '@material-ui/icons/AccountBox';
// constants
import { MAX_PEOPLE } from '../../../constants/constants';

const useStyles = makeStyles((theme) => ({
  elemSize: {
    minHeight: theme.spacing(8),
    borderStyle: "solid",
    borderColor: "white",
  }
}));

function PlaceholderElem() {
  const classes = useStyles()
  return (
    <CardActionArea>
      <div className={classes.elemSize}>
      </div>
    </CardActionArea>
  )
}

function PlayerElem({ name }) {
  const classes = useStyles()
  return (
    <CardActionArea>
      <div className={classes.elemSize}>
        <AccountBoxIcon style={{ fontSize: "40px" }} />
        <Typography variant="body2">{name}</Typography>
      </div>
    </CardActionArea>
  )
}

function PlayersList({ players }) {
  const playerElemList = [];
  for (let i = 0; i < MAX_PEOPLE; i++) {
    playerElemList.push(
      <Grid key={`${i * i}`} item xs={12} sm={6} lg={4}>
        <Paper>
          {i < players.length ? <PlayerElem name={players[i].name} /> : <PlaceholderElem />}
        </Paper>
      </Grid>
    )
  }
  return (
    <Grid container spacing={3}>
      {playerElemList}
    </Grid>
  )
}

export default PlayersList;