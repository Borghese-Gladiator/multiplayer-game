import React, { useState } from 'react';
// routing
import { Link } from 'react-router-dom';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper, Box, Typography, Button, Divider
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PickSettings(props) {
  const { gameModes } = props;
  const arrLength = gameModes.length;
  const [gameModeIndex, setGameModeIndex] = useState(0);
  const handleNextClick = () => {
    if (gameModeIndex === arrLength - 1) {
      setGameModeIndex(0);
    } else {
      setGameModeIndex(gameModeIndex + 1); 
    }
  }
  const handlePrevClick = () => {
    if (gameModeIndex === 0) {
      setGameModeIndex(arrLength - 1);
    } else {
      setGameModeIndex(gameModeIndex - 1); 
    }
  }

  return (
    <div style={{ width: '100%' }}>
      <Box display="flex" p={1} bgcolor="background.paper">
        <Button variant="outlined" onClick={handleNextClick}>
          <ArrowBackIosIcon />
        </Button>
        <Box p={1} flexGrow={1} bgcolor="grey.300">
          { gameModes[gameModeIndex].name }
        </Box>
        <Button variant="outlined" onClick={handlePrevClick}>
          <ArrowForwardIosIcon />
        </Button>
      </Box>
    </div>
  )
}

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
    width: '100%'
  },
}));

function RoomSettings(props) {
  const classes = useStyles();
  const { gameModes, roomURL, hostUser } = props;

  return (
    <Paper className={classes.root}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" style={{minHeight: '300px'}}>
        <Typography variant="h5">Lobby</Typography>
        <Typography variant="body2" gutterBottom>Created by: {hostUser} </Typography>
        <Divider style={{ width: '100%' }} />
        <PickSettings gameModes={gameModes} />
        <Button component={Link} to={roomURL} color="primary" variant="contained">Start Game</Button>
      </Box>
    </Paper>
  )
}

export default RoomSettings;