import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Main } from '../layout';

function ProductNotFound({ error }) {
  console.error(error.message);
  return (
    <Main>
      <h2>Product not found!</h2>
      <Button
        color='primary'
        component={Link}
        variant='contained'
        to={{ pathname: '/' }}>
        Return Home
      </Button>
    </Main>
  );
}

export default ProductNotFound;
