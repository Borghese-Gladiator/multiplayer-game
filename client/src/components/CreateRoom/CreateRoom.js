// Material UI components
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid } from '@material-ui/core';
// hook from library
import { useAsync } from "react-async";
// custom components
import PlayersList from './PlayersList';
import RoomSettings from './RoomSettings';
import LoadingDisplay from './LoadingDisplay';
// assets
import MyBackgroundImg from '../../images/background.png';
import AnimatedLogoImg from '../../images/logo.gif';

// You can use async/await or any function that returns a Promise
const loadPlayer = async ({ playerId }, { signal }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${playerId}`, { signal })
  if (!res.ok) throw new Error(res.statusText)
  return res.json()
}


const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing(5),
    backgroundImage: `url(${MyBackgroundImg})`,
    minHeight: '100vh',
    color: "white"
  },
  content: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
}));

export default function CreateRoom() {
  const classes = useStyles();
  const { data, error, isPending } = useAsync({ promiseFn: loadPlayer, playerId: 2 })
  if (isPending) return <LoadingDisplay />
  if (error) return `Something went wrong: ${error.message}`
  if (data)
    return (
      <div className={classes.root}>
        <img src={AnimatedLogoImg} className={classes.logo} alt="animated logo" />
        <Grid container>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Typography variant="h4" gutterBottom>Settings</Typography>
              <RoomSettings hostUser={"James"} />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Typography variant="h4" gutterBottom>Players</Typography>
              <PlayersList />
            </Box>
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid>
      </div>
    )
  return null
}