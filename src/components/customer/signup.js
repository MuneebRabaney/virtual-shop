import React, { Component } from 'react';
import {
  Button,
  TextField,
  IconButton,
  FormControl,
  InputAdornment,
} from '@material-ui/core';
import { Main } from '../layout';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import SaveIcon from '@material-ui/icons/Save';
import { LoadingSpinner } from '../loaders';
import { Link, Redirect } from 'react-router-dom';

class Signup extends Component {
  state = {
    input: {
      email: '',
      firstname: '',
      lastname: '',
      password: '',
      contact_number: '',
      email_address: '',
    },
    toggle: {
      passwordVisibility: false,
    },
    errors: false,
  };

  handlePasswordVisibility = () => {
    const { passwordVisibility } = this.state.toggle;
    const state = Object.assign({}, this.state);
    state.toggle.passwordVisibility = !passwordVisibility;
    this.setState(state);
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

  handleFormSubmission = () => {};

  handleMouseDownPassword = event => event.preventDefault();

  render() {
    const { errors, toggle } = this.state;
    return (
      <Main>
        <h2>Register Customer</h2>
        <form onSubmit={this.handleFormSubmission} action=''>
          <FormControl>
            <TextField
              required
              id='firstname'
              label='First Name'
              margin='normal'
              onChange={this.handleOnInputChange}
              error={errors && errors.firstname}
              helperText={
                errors && errors.firstname ? 'First name is required' : ''
              }
            />
            <TextField
              required
              id='lastname'
              label='Last Name'
              margin='normal'
              onChange={this.handleOnInputChange}
              error={errors && errors.lastname}
              helperText={
                errors && errors.lastname ? 'Last name is required' : ''
              }
            />
            <TextField
              required
              id='contact_number'
              label='Contact Number'
              margin='normal'
              onChange={this.handleOnInputChange}
              error={errors && errors.contact_number}
              helperText={
                errors && errors.contact_number
                  ? 'Contact number is required'
                  : ''
              }
            />
            <TextField
              required
              id='email_address'
              label='Email'
              margin='normal'
              onChange={this.handleOnInputChange}
              error={errors && errors.email_address}
              helperText={
                errors && errors.email_address
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
              onChange={this.handleOnInputChange}
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
                variant='contained'
                startIcon={<SaveIcon />}>
                Create Account
              </Button>
              <br />
              <br />
              <br />
              Already have an account?
              <br />
              <br />
              <Link to={{ pathname: '/user/login' }}>Login here.</Link>
            </p>
          </FormControl>
        </form>
      </Main>
    );
  }
}

export default Signup;
