import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Material UI
import { makeStyles, MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {
  CssBaseline, Button,
  Paper,
  Container, Box, Card, TextField, CardMedia
} from '@material-ui/core';
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
// image assets
import AnimatedLogoImg from './images/logo.gif';
import DemoImg from './images/demo-kitten.jpg';
import MyBackgroundImg from './images/background.png';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing(20),
    backgroundImage: `url(${MyBackgroundImg})`,
    minHeight: '100vh'
  },
  content: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    height: 180
  },
  cardRoot: {
    maxWidth: 345,
    padding: 30,
    '& > *': {
      margin: theme.spacing(0.5),
      width: '100%'
    },
  },
  media: {
    height: 200,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.content}>
        <img src={AnimatedLogoImg} className={classes.logo} alt="animated logo" />
        <Paper className={classes.cardRoot}>
          <TextField id="standard-basic" label="Enter name here" variant="outlined" />
          <img
            src={DemoImg}
            className={classes.media}
            alt="Demo Kitten"
          />
          <Button variant="contained" color="primary">
            Play!
          </Button>
          <Button color="secondary" variant="contained">Create Private Room</Button>
        </Paper>
      </Container>
    </div>

  );
}

export default App;
