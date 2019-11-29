import React, { Component } from 'react';
import moment from 'moment';
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

import { API, graphqlOperation } from 'aws-amplify';
import { createMerchant } from '../../graphql/mutations';

class Signup extends Component {
  state = {
    input: {
      role: 2,
      title: '',
      username: '',
      password: '',
      email_address: '',
      contact_number: '',
      created_at: '',
      updated_at: '',
    },
    toggle: {
      passwordVisibility: false,
    },
    errors: false,
  };

  handlePasswordVisibility = () => {
    console.log('here');
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
    const { id, value } = event.currentTarget;
    // console.log(id, value);
    const state = Object.assign({}, this.state);
    state.input[id] = value;
    this.setState(state);
  };

  handleFormSubmission = event => {
    event.preventDefault();
    // CreateMerchantMutation;
    // if all passes state input errors
    const input = {
      ...this.state.input,
      created_at: this.handleCreateDateTimeStamp(),
      updated_at: this.handleCreateDateTimeStamp(),
    };
    this.handleCreateNewMerchant({ input })
      .then(r => console.log(r))
      .catch(error => console.log(error.message));
  };

  handleCreateNewMerchant = async ({ input }) => {
    return await API.graphql(graphqlOperation(createMerchant, { input }));
  };

  handleCreateDateTimeStamp = () => moment().format();

  handleMouseDownPassword = event => event.preventDefault();

  render() {
    const { errors, toggle } = this.state;
    return (
      <Main>
        <h2>Register Merchant</h2>
        <form onSubmit={this.handleFormSubmission} action=''>
          <FormControl>
            <TextField
              required
              id='title'
              label='Company Name'
              margin='normal'
              onChange={this.handleOnFormInputChange}
              error={errors && errors.firstname}
              helperText={
                errors && errors.firstname ? 'Company name is required' : ''
              }
            />
            <TextField
              required
              id='username'
              label='Username'
              margin='normal'
              onChange={this.handleOnFormInputChange}
              error={errors && errors.lastname}
              helperText={
                errors && errors.lastname ? 'Username is required' : ''
              }
            />
            <TextField
              required
              id='contact_number'
              label='Contact Number'
              margin='normal'
              onChange={this.handleOnFormInputChange}
              error={errors && errors.email_address}
              helperText={
                errors && errors.contact_number
                  ? 'A contact number is required'
                  : ''
              }
              InputProps={{
                'aria-label': 'set a user contact number',
              }}
            />
            <TextField
              required
              id='email_address'
              label='Email'
              margin='normal'
              onChange={this.handleOnFormInputChange}
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
