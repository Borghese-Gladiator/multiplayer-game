// Material UI
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Box
} from '@material-ui/core';
// assets
import LoadingIconImg from '../../images/Spinner-1s-200px.gif';

const useStyles = makeStyles((theme) => ({
  loadingIcon: {
    width: 300,
    height: 300
  }
}));

function Loading() {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <img src={LoadingIconImg} alt="Loading..." className={classes.loadingIcon} />
      <Typography variant="h4" style={{ color: "white", textAlign: 'center' }}>Connecting to Server...</Typography>
    </Box>
  )
}

export default Loading