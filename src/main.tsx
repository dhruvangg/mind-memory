import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import './index.css'
import { NumberProvider } from './context/NumberContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NumberProvider>
      <App />
    </NumberProvider>
  </React.StrictMode>,
)
