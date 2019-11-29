import React from 'react';
import AppRouter from './routes';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  return <AppRouter />;
}

export default App;
