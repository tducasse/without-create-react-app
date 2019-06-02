import React, { useEffect } from 'react';
import { Button, Typography, styled } from '@smooth-ui/core-sc';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
`;

const Home = (props) => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  const { logout } = props;
  return (
    <Container>
      <Typography>Welcome!</Typography>
      <Button onClick={logout}>Logout</Button>
    </Container>
  );
};
Home.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Home;
