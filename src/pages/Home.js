import React, { useEffect, useState } from 'react';
import { Button, Typography, styled, Input } from '@smooth-ui/core-sc';
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

  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState([]);

  const post = () => {
    if (message) {
      setPosts([message, ...posts]);
      setMessage('');
    }
  };

  const { logout } = props;
  return (
    <Container>
      <Typography>Welcome!</Typography>
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="What's on your mind?"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            post(message);
          }
        }}
      />
      <Button onClick={post}>Post</Button>
      <ul>
        {posts.map((el, idx) => {
          // eslint-disable-next-line react/no-array-index-key
          return <li key={idx}>{el}</li>;
        })}
      </ul>
      <Button onClick={logout}>Logout</Button>
    </Container>
  );
};
Home.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Home;
