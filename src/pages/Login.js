import {
  Button,
  FormGroup,
  Grid,
  Input,
  Label,
  Typography,
} from '@smooth-ui/core-sc';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Login = () => {
  useEffect(() => {
    document.title = 'Login';
  }, []);

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [token, setToken] = useState(null);
  const [valid, setValid] = useState(null);

  const logIn = async () => {
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
      setToken(response.data.data.token);
    } catch (error) {
      setValid(false);
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
          valid={valid}
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
          valid={valid}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>
      <Button onClick={logIn}>Log in</Button>
      {token && <Typography variant="h4">{token}</Typography>}
    </Grid>
  );
};

export default Login;
