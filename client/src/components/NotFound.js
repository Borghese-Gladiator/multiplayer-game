import React from 'react';
// Routing
import { Link } from 'react-router-dom';
// assets
import PageNotFound from '../images/404-error-not-found-page-lost-1024x788.png';
// Material UI Components
import {
  Box, Typography
} from '@material-ui/core';

function NotFoundPage() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <img src={PageNotFound} alt="Not Found" style={{maxHeight: '60vh'}} />
      <p style={{ textAlign: "center" }}>
        <Link to="/"><Typography variant="h3">ET - Go Home</Typography></Link>
      </p>
    </Box>
  );
}
export default NotFoundPage;