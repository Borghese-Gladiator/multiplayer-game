import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper, Box, Typography, Button, Divider
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    padding: 5,
    minWidth: theme.spacing(50)
  },
}));

function RoomSettings(props) {
  const classes = useStyles();
  const { hostUser } = props;

  return (
    <Paper className={classes.root}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" style={{minHeight: '300px'}}>
        <Typography variant="h5">Lobby</Typography>
        <Typography variant="body2" gutterBottom>Created by: {hostUser} </Typography>
        <Divider style={{ width: '100%' }} />
        <Button color="primary" variant="contained">Start Game</Button>
      </Box>
    </Paper>
  )
}

export default RoomSettings;