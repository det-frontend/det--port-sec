import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './services/i18n.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Suspense fallback='loading'>
        <App />
      </Suspense>
  </React.StrictMode>,
)
