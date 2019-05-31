import React, { useEffect } from 'react';
import { Button, Grid } from '@smooth-ui/core-sc';
import PropTypes from 'prop-types';

const Home = (props) => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  const { logout } = props;
  return (
    <Grid>
      <div>Welcome!</div>
      <Button onClick={logout}>Logout</Button>
    </Grid>
  );
};
Home.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Home;
