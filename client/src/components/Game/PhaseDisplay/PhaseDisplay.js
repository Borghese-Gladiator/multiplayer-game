import React from 'react';
// Material UI Components
import { Paper, Typography, Box } from '@material-ui/core';
// Custom components
import CountdownTimer from './CountdownTimer';

export default function PhaseDisplay() {
  // const [currentPhase, setCurrentPhase] = useState("VOTING");
  const currentPhase = "VOTING"
  return (
    <Paper>
      <Box p={1}>
        <Typography variant="h6">PHASE</Typography>
        <Typography variant="h3" style={{ color: "green" }}>{currentPhase}</Typography>
        <CountdownTimer />
      </Box>
    </Paper>
  )
}