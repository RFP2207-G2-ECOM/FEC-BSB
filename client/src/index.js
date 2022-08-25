import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

import { ProductProvider } from './contexts/product.context.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ProductProvider>
    <App />
  </ProductProvider>
);