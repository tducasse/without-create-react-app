import React from 'react';
import { Grid, Typography } from '@smooth-ui/core-sc';
import { Link } from '@reach/router';

const NotFound = () => {
  return (
    <Grid>
      <Typography variant="h2">Oops!</Typography>
      <Typography variant="h3">Seems like you're lost!</Typography>
      <Typography variant="h3">
        <Link to="/">Go back to the app</Link>
      </Typography>
    </Grid>
  );
};

export default NotFound;
