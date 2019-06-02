import { Button, FormGroup, Input, Label, styled } from '@smooth-ui/core-sc';
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Width = styled.div`
  width: 300px;
`;

const ActionBar = ({ isSignup, signup, login }) => {
  return (
    <div
      css={css`
        justify-content: space-between;
        display: flex;
      `}
    >
      <Button onClick={isSignup ? signup : login}>
        {isSignup ? 'Sign up' : 'Log in'}
      </Button>
      <Button
        as="a"
        variant="secondary"
        onClick={() => navigate(isSignup ? '/login' : '/signup')}
      >
        {isSignup ? 'Log in' : 'Sign up'}
      </Button>
    </div>
  );
};
ActionBar.propTypes = {
  isSignup: PropTypes.bool.isRequired,
  signup: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

const Login = (props) => {
  useEffect(() => {
    document.title = 'Login';
  }, []);

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const { setToken } = props;

  const login = async () => {
    try {
      const response = await axios.post(
        'http://localhost:4000/api/auth/identity/callback',
        {
          user: {
            email,
            password,
          },
        }
      );
      const { token } = response.data.data;
      localStorage.setItem('token', token);
      setToken(token);
    } catch (error) {
      console.error();
    }
  };

  const signup = async () => {
    try {
      const response = await axios.post(
        'http://localhost:4000/api/auth/signup',
        {
          user: {
            email,
            password,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error();
    }
  };

  const { isSignup } = props;

  return (
    <Container>
      <Width>
        <FormGroup>
          <Label htmlFor="email" color="white">
            Email
          </Label>
          <Input
            control
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
      </Width>
      <Width>
        <FormGroup>
          <Label htmlFor="password" color="white">
            Password
          </Label>
          <Input
            type="password"
            control
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
      </Width>
      <Width>
        <ActionBar isSignup={isSignup} signup={signup} login={login} />
      </Width>
    </Container>
  );
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
  isSignup: PropTypes.bool,
};
Login.defaultProps = {
  isSignup: false,
};

export default Login;
