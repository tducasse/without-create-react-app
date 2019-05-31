import { Button, FormGroup, Grid, Input, Label, Row } from '@smooth-ui/core-sc';
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';

const Signup = (props) => {
  useEffect(() => {
    document.title = 'Signup';
  }, []);

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const { setToken } = props;

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
      const { token } = response.data.data;
      localStorage.setItem('token', token);
      setToken(token);
    } catch (error) {
      console.error();
    }
  };

  return (
    <Grid>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input
          control
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          control
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>
      <Row>
        <Button onClick={signup}>Sign up</Button>
        <Link to="/login">Log in</Link>
      </Row>
    </Grid>
  );
};
Signup.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Signup;
