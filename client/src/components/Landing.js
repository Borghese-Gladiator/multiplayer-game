// Routing
import { Link } from 'react-router-dom';
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Paper,
  Container,
  TextField,
  Box,
  Typography
} from '@material-ui/core';
// image assets
import CustomLogoImg from '../images/cooltext379345859766886.png';

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  cardRoot: {
    marginTop: theme.spacing(5),
    maxWidth: 345,
    padding: 30,
    '& > *': {
      margin: theme.spacing(0.5),
      width: '100%'
    },
  },
  logo: {
    height: 120
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Container className={classes.content}>
      <img src={CustomLogoImg} className={classes.logo} alt="animated logo" />
      <Paper className={classes.cardRoot}>

        <Typography variant="h6">A Game of Friendly Politics</Typography>

        <Box display="flex">
          <TextField id="standard-basic" label="Enter room URL here" variant="outlined" />
          <Button component={Link} to="/create" variant="contained" color="primary">
            Join Room
            </Button>
        </Box>

        <Button component={Link} to="/create" variant="contained" color="secondary">
          Create Private Room
          </Button>
      </Paper>
    </Container>

  );
}

export default App;
