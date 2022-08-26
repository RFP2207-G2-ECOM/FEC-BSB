import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

import { ProductProvider } from './contexts/product-info.context.jsx';
import { ProductRelatedProvider } from './contexts/product-related.context.jsx';
import { ProductStylesProvider } from './contexts/product-styles.context.jsx';
import { QuestionsProvider } from './contexts/question.context.jsx';
import { ProductReviewsProvider } from './contexts/product-reviews.context.jsx'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ProductProvider>
    <ProductStylesProvider>
      <ProductRelatedProvider>
        <QuestionsProvider>
          <ProductReviewsProvider>
            <App />
          </ProductReviewsProvider>
        </QuestionsProvider>
      </ProductRelatedProvider>
    </ProductStylesProvider>
  </ProductProvider>
);