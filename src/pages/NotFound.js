import React, { useEffect } from 'react';
import { Typography, Button, styled } from '@smooth-ui/core-sc';
import { navigate } from '@reach/router';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
`;

const NotFound = () => {
  useEffect(() => {
    document.title = 'Not found';
  }, []);
  return (
    <Container>
      <Typography variant="h4">Oops!</Typography>
      <Typography>Seems like you're lost!</Typography>
      <Button as="a" variant="secondary" onClick={() => navigate('/')}>
        Go back
      </Button>
    </Container>
  );
};

export default NotFound;
