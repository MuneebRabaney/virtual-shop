import React, { Component } from 'react';
import {
  Button,
  TextField,
  IconButton,
  FormControl,
  InputAdornment,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { LoadingSpinner } from '../loaders';
import { Main } from '../layout';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    input: {
      email: '',
      password: '',
    },
    toggle: {
      passwordVisibility: false,
    },
    errors: false,
  };

  handlePasswordVisibility = () => {
    const { passwordVisibility } = this.state;
    const state = Object.assign({}, this.state);
    state.passwordVisibility = !passwordVisibility;
    this.setState(state);
  };

  handleOnFormInputChange = event => {
    const { name, value } = event.currentTarget;
    const state = Object.assign({}, this.state);
    state[name] = value;
    this.setState(state);
  };

  handleMouseDownPassword = event => event.preventDefault();

  handleFormSubmission = () => {};

  render() {
    const { input, errors, toggle } = this.state;
    return (
      <Main>
        <h2>Login</h2>
        <form onSubmit={this.handleFormSubmission}>
          <FormControl>
            <TextField
              required
              id='email'
              label='Email'
              margin='normal'
              value={input.email}
              onChange={this.handleOnFormInputChange}
              error={errors && errors.email}
              helperText={
                errors && errors.email
                  ? 'A valid email address is required'
                  : ''
              }
              InputProps={{
                'aria-label': 'set a new user email',
              }}
            />
            <TextField
              required
              id='password'
              label='Password'
              value={input.password}
              onChange={this.handleOnFormInputChange}
              error={errors && errors.password}
              helperText={
                errors && errors.password ? 'A password is required' : ''
              }
              type={toggle.passwordVisibility ? 'text' : 'password'}
              InputProps={{
                'aria-label': 'set a new user password',
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={this.handlePasswordVisibility}
                      onMouseDown={this.handleMouseDownPassword}>
                      {toggle.passwordVisibility && <Visibility />}
                      {!toggle.passwordVisibility && <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <p>
              <Button
                type='submit'
                size='large'
                color='primary'
                variant='contained'>
                Login
              </Button>
              <br />
              <br />
              <br />
              Feeling like an outsider?
              <br />
              <br />
              <Link to={{ pathname: '/user/signup' }}>Signup new account</Link>
            </p>
          </FormControl>
        </form>
      </Main>
    );
  }
}

export default Login;
