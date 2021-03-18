import React, { useState } from 'react';
// Material UI Components
import {
  Box, Grid, Paper, Button, Typography, Container
} from '@material-ui/core';
// Custom components
import CountdownTimer from './CountdownTimer';

export default function PhaseDisplay() {
  const [currentPhase, setCurrentPhase] = useState("VOTING");
  return (
    <Paper>
      <Typography variant="body">PHASE<Typography variant="h3" style={{ color: "green" }}>{currentPhase}</Typography></Typography>
      <CountdownTimer />
    </Paper>
  )
}