import React, { Component } from 'react';
import moment from 'moment';
import { Button, TextField, FormControl } from '@material-ui/core';
import { Main } from '../layout';
import SaveIcon from '@material-ui/icons/Save';
import { LoadingSpinner } from '../loaders';
import { Link, Redirect } from 'react-router-dom';

import { API, graphqlOperation } from 'aws-amplify';
import { updateProduct } from '../../graphql/mutations';
/**
 * @namespace components\product
 *
 * */

class Edit extends Component {
  // TODO:
  // get props form store and fill values
  state = {
    input: {
      id: '',
      title: '',
      image: [],
      price: '',
      rating: '',
      description: '',
      created_at: '',
      updated_at: '',
    },
    errors: false,
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
    this.handleCreateNewProduct({ input })
      .then(r => console.log(r))
      .catch(error => console.log(error.message));
  };

  handleCreateNewProduct = async ({ input }) => {
    return await API.graphql(
      graphqlOperation(updateProduct, {
        input,
        variables: {
          id: input.id,
        },
      }),
    );
  };

  handleCreateDateTimeStamp = () => moment().format();

  handleMouseDownPassword = event => event.preventDefault();

  render() {
    const { errors } = this.state;
    return (
      <Main>
        <h2>Create New Product</h2>
        <form onSubmit={this.handleFormSubmission} action=''>
          <FormControl>
            <TextField
              required
              id='title'
              label='Name'
              margin='normal'
              onChange={this.handleOnFormInputChange}
              error={errors && errors.firstname}
              helperText={
                errors && errors.firstname
                  ? 'Product titl name is required'
                  : ''
              }
            />
            <TextField
              required
              id='price'
              label='Price'
              margin='normal'
              onChange={this.handleOnFormInputChange}
              error={errors && errors.price}
              helperText={errors && errors.price ? 'Price is required' : ''}
              InputProps={{
                'aria-label': 'set price for this product',
              }}
            />
            <TextField
              required
              id='rating'
              label='Rating'
              margin='normal'
              onChange={this.handleOnFormInputChange}
              error={errors && errors.email_address}
              helperText={errors && errors.rating ? 'Rating is required' : ''}
              InputProps={{
                'aria-label': 'set a rating for this product',
              }}
            />
            <TextField
              required
              id='description'
              label='Description'
              margin='normal'
              onChange={this.handleOnFormInputChange}
              error={errors && errors.email_address}
              helperText={
                errors && errors.rating ? 'description is required' : ''
              }
              InputProps={{
                'aria-label': 'set a description for this product',
              }}
            />
            <br />
            <Button variant='contained' component='label'>
              Upload Product Image
              <input type='file' id='image' style={{ display: 'none' }} />
            </Button>
            <br />
            <p>
              <Button
                type='submit'
                size='large'
                color='primary'
                variant='contained'
                startIcon={<SaveIcon />}>
                Update Product
              </Button>
            </p>
          </FormControl>
        </form>
      </Main>
    );
  }
}

export default Edit;
