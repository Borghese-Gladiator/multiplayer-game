import React, { useState } from 'react'
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import {
  Box, Button, FormControl, Select, MenuItem, Typography
} from '@material-ui/core';
// Material UI Icons
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  formControl: {
    width: '100%',
  },
  formControlLabel: {
    textAlign: 'left'
  },
  selectEmpty: {
    border: '1px solid #ccc',
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

}));

export default function PickSettings({ gameModes }) {
  const classes = useStyles();

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
  
  const handleIndexChange = (event) => {
    setGameModeIndex(event.target.value);
  };

  return (
    <div>

      <div className={classes.sectionDesktop} style={{ width: '100%' }}>
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
      <div className={classes.sectionMobile}>
        <FormControl className={classes.formControl}>
          <Typography className={classes.formControlLabel} variant="body2">Game Mode</Typography>
          <Select
            value={gameModeIndex}
            onChange={handleIndexChange}
          >
            {gameModes.map((val, idx) => {
              return (
                <MenuItem key={`${idx} ${val.name}`} value={idx}>{val.name}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </div>
    </div>
  )
}