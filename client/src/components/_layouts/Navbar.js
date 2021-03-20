import React from 'react';
// routing
import { Link } from 'react-router-dom';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// assets
import CustomLogoImg from '../../images/cooltext379345859766886.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: 'transparent',
    boxShadow: 'none',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(15),
      paddingRight: theme.spacing(15),
    },
  },
  logo: {
    height: theme.spacing(10)
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Link to="/">
            <img src={CustomLogoImg} alt="logo" className={classes.logo} />  
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
