import React, { Component } from 'react';
import { Connect } from 'aws-amplify-react';
import { graphqlOperation } from 'aws-amplify';
import { listProducts } from '../../graphql/queries';
import { LoadingSpinner } from '../loaders';
import { Link, Redirect } from 'react-router-dom';

class List extends Component {
  render() {
    return (
      <Connect query={graphqlOperation(listProducts)}>
        {({ data: { listProducts }, loading, errors }, index) => {
          if (errors.length) return <h3>Error</h3>;
          if (loading || !listProducts) return <LoadingSpinner />;

          if (!loading && !errors && !listProducts) {
            // prompt the user if they want to go somewhere else
            return 'No Products found';
          }

          return (
            <div key={index}>
              {listProducts.items.map(items => items.title)}
            </div>
          );
        }}
      </Connect>
    );
  }
}

export default List;
