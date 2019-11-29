import React, { Component } from 'react';
import { Product } from '../../../components';

class List extends Component {
  render() {
    return <Product.List products={null} filter={1} />;
  }
}

export default List;
