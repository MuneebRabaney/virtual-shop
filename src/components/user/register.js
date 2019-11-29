import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Main } from '../layout';

class Signup extends Component {
  render() {
    return (
      <Main>
        <h2>Im signing up as </h2>
        <p>
          <Link to={{ pathname: '/merchant/signup' }}>A Shop Merchant</Link>
          <br />
          <br />
          <Link to={{ pathname: '/customer/signup' }}>A Customer</Link>
          <br />
          <br />
          <br />
          Already have an account?
          <br />
          <br />
          <Link to={{ pathname: '/user/login' }}>Login</Link>
        </p>
      </Main>
    );
  }
}

export default Signup;
