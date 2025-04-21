import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';

// Find root element
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

// Create root
const root = createRoot(rootElement);

// Render the app
root.render(
  <StrictMode>
    <ErrorBoundary
      fallback={<div className="error-page">Something went wrong. Please refresh the page.</div>}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>
);
