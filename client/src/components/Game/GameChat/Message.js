// Material UI Components
import { Container, Input, Box, Button, Paper, Typography } from '@material-ui/core';

export default function Message({ userName, msg, time }) {
  return (
    <Paper>
      <Box m={2} display="flex" flexDirection="column">
        <Box alignSelf="flex-start">
          <Typography variant="body1">{userName}</Typography>
        </Box>
        <Typography variant="body1">{msg}</Typography>
        <Box alignSelf="flex-end">
          <Typography variant="body2">{time}</Typography>
        </Box>
      </Box>
    </Paper>
  )
}