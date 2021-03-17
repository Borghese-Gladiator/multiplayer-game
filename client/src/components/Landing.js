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
import CustomLogoImg from '../images/coollogo_com-28810298-NO-BACKGROUND.png';

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white"
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
    <div>
      <Container className={classes.content}>
        <img src={CustomLogoImg} className={classes.logo} alt="animated logo" />
        <Box m={1}>
          <Typography variant="h4">More Friendly Politics</Typography>
        </Box>        
        <Paper className={classes.cardRoot}>
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
    </div>

  );
}

export default App;
