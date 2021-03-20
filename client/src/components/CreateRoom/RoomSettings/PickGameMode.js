import React, { useState } from 'react'
// Material UI Components
import {
  TextField, Paper, Box, Typography, Button, Divider, Select, MenuItem, FormControl
} from '@material-ui/core';
// Material UI Icons
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function PickSettings(props) {
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
          {gameModes[gameModeIndex].name}
        </Box>
        <Button variant="outlined" onClick={handlePrevClick}>
          <ArrowForwardIosIcon />
        </Button>
      </Box>
    </div>
  )
}