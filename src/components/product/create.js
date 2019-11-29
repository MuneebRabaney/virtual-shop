/**
 * @namespace components\product
 *
 * */

import React, { Component } from 'react';
import moment from 'moment';
import { Button, TextField, FormControl } from '@material-ui/core';
import { Main } from '../layout';
import SaveIcon from '@material-ui/icons/Save';
import { LoadingSpinner } from '../loaders';
import { Link, Redirect } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { createProduct } from '../../graphql/mutations';
import styled from 'styled-components';

const ProductImageUpload = styled.div`
  display: none;
  visibility: hidden;
  opacity: 0;
`;

class Create extends Component {
  state = {
    input: {
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
      .then(result => console.log(result)) // write result to cache?
      .catch(error => console.log(error.message));
  };

  handleCreateNewProduct = async ({ input }) => {
    return await API.graphql(graphqlOperation(createProduct, { input }));
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
              multiline={true}
              id='description'
              label='Description'
              margin='normal'
              rows={3}
              rowsMax={5}
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
              <ProductImageUpload id='image' type='file' />
            </Button>
            <br />
            <p>
              <Button
                type='submit'
                size='large'
                color='primary'
                variant='contained'
                startIcon={<SaveIcon />}>
                Create Product
              </Button>
            </p>
          </FormControl>
        </form>
      </Main>
    );
  }
}

export default Create;
