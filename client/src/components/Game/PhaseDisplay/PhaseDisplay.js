import React from 'react';
// Material UI Components
import { Paper, Typography} from '@material-ui/core';
// Custom components
import CountdownTimer from './CountdownTimer';

export default function PhaseDisplay() {
  // const [currentPhase, setCurrentPhase] = useState("VOTING");
  const currentPhase = "VOTING"
  return (
    <Paper>
      <Typography variant="body1">PHASE</Typography>
      <Typography variant="h3" style={{ color: "green" }}>{currentPhase}</Typography>
      <CountdownTimer />
    </Paper>
  )
}