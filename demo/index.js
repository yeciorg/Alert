import React from 'react';
import ReactDOM from 'react-dom/client';
import Component from '../src';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Component alertMessage="Hello Alert" />
  </React.StrictMode>
);