import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './i18n'

ReactDOM.render(
  <Suspense fallback={<h3>Loading translations...</h3>}>
    <App />
  </Suspense>,
  document.getElementById('root')
);