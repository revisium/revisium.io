import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from 'src/app/App.tsx'

declare global {
  interface Window {
    __env__: Record<string, string | number> | undefined
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
