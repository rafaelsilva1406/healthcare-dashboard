import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PatientService from './services/PatientService';


const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <PatientService>
        <App />
      </PatientService>
    </React.StrictMode>,
  );
}
