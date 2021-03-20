import React, { useState } from 'react';
// routing
import { Link } from 'react-router-dom';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper, Box, Typography, Button, Divider, Select, MenuItem, FormControl
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
// Material UI Icons
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// Constants
import { MAX_PEOPLE, MIN_PEOPLE } from '../../../constants/constants';

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
          {gameModes[gameModeIndex].name}
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
    width: '100%',
  },
  selectEmpty: {
    border: '1px solid #ccc',
    width: '100%',
  },
  root: {
    padding: theme.spacing(1),
    width: '100%',
    minHeight: '300px'
  },
  content: {
    '& > *': {
      margin: theme.spacing(0.5),
      width: '100%'
    },
  }
}));

function RoomSettings(props) {
  const classes = useStyles();
  const { numPlayers, gameModes, startURL } = props;
  const [customWordsText, setCustomWordsText] = useState('');
  const [age, setAge] = React.useState(30);
  /*
  const [roundObj, setRoundObj] = useState({
    describeTime: 30,
    discussionTime: 45,
    voteTime: 45,
    customWords: []
  });
  */

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleTextFieldChange = (event) => {
    setCustomWordsText(event.target.value);
  };

  let startButton;
  if (numPlayers < MIN_PEOPLE) {
    startButton = (
      <div>
        <Button component={Link} to={startURL} color="secondary" variant="contained" disabled>Start Game</Button>
        <Alert severity="error">Have {numPlayers} players. Need {MIN_PEOPLE} players.</Alert>
      </div>
    )
  } else if (numPlayers > MAX_PEOPLE) {
    startButton = (
      <div>
        <Button component={Link} to={startURL} color="secondary" variant="contained" disabled>Start Game</Button>
        <Alert severity="error">There are {numPlayers} players. Limit is {MAX_PEOPLE} players.</Alert>
      </div>
    )
  } else {
    startButton = <Button component={Link} to={startURL} color="secondary" variant="contained">Start Game</Button>
  }

  return (
    <Paper className={classes.root}>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Box alignSelf="center">
          <Typography variant="h5">Lobby</Typography>
        </Box>
        <Divider style={{ width: '100%', borderTop: '3px double #8c8b8b' }} />
        <FormControl className={classes.formControl}>
          <Typography variant="body2">Describe time in seconds</Typography>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <Typography variant="body2">Discussion time in seconds</Typography>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Typography variant="body2">Voting time in seconds</Typography>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>

        <Typography variant="body2">Custom Words</Typography>
        <textarea
          value={customWordsText}
          onChange={handleTextFieldChange}
          placeholder={`Type custom word pairs separated by a comma and then a new line.\nFirst_Word,Second_Word\nMIT,Harvard`}
          style={{ border: '1px solid #ccc', width: "100%", minHeight: '40px' }}
        />
        <PickSettings gameModes={gameModes} />
        <Box alignSelf="center">
          {startButton}
        </Box>
      </Box>
    </Paper>
  )
}

export default RoomSettings;