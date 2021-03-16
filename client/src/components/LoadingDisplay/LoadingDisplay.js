// Material UI
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid
} from '@material-ui/core';
// assets
import LoadingIconImg from '../../images/Wedges-3s-200px.gif';

const useStyles = makeStyles((theme) => ({
  loadingIcon: {
    width: 500,
    height: 500
  }
}));

function Loading() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item>
        <img src={LoadingIconImg} alt="Loading..." className={classes.loadingIcon} />
        <p style={{textAlign: 'center'}}>Loading...</p>
      </Grid>
    </Grid>
  )
}

export default Loading