import React, { useState } from 'react';
// routing to start game
import { Link } from 'react-router-dom';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField, Paper, Box, Typography, Button, Divider, Select, MenuItem, FormControl
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
// Custom Components
import PickGameMode from './PickGameMode';
// Constants
import { MAX_PEOPLE, MIN_PEOPLE } from '../../../constants/constants';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  },
  formControlLabel: {
    textAlign: 'left'
  },
  selectEmpty: {
    border: '1px solid #ccc',
  },
  root: {
    padding: theme.spacing(1),
    minHeight: '300px'
  },
  content: {
    width: "100%",
    '& > *': {
      marginTop: theme.spacing(0.5),
    },
  },
  textarea: {
    border: '1px solid #ccc',
    width: "100%",
    minHeight: theme.spacing(10)
  },
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
        <div className={classes.content}>
          <FormControl className={classes.formControl}>
            <Typography className={classes.formControlLabel} variant="body2">Describe Time</Typography>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={10}>10 sec</MenuItem>
              <MenuItem value={20}>20 sec</MenuItem>
              <MenuItem value={30}>30 sec</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <Typography className={classes.formControlLabel} variant="body2">Discussion Time</Typography>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={10}>10 sec</MenuItem>
              <MenuItem value={20}>20 sec</MenuItem>
              <MenuItem value={30}>30 sec</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <Typography className={classes.formControlLabel} variant="body2">Voting Time</Typography>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={10}>10 sec</MenuItem>
              <MenuItem value={20}>20 sec</MenuItem>
              <MenuItem value={30}>30 sec</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <Typography className={classes.formControlLabel} variant="body2">Custom Word Pairs</Typography>
            <TextField
              value={customWordsText}
              onChange={handleTextFieldChange}
              multiline
              rows={4}
              placeholder={`For example: \n\nFirst_Word,Second_Word\nMIT,Harvard`}
              className={classes.textarea}
            />
          </FormControl>
          <PickGameMode gameModes={gameModes} />
        </div>
        <Box alignSelf="center">
          {startButton}
        </Box>
      </Box>
    </Paper>
  )
}

export default RoomSettings;