import React from 'react'
import ReactDOM from 'react-dom/client'

declare global {
  interface Window {
    __env__: Record<string, string | number> | undefined
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>revisium.io</div>
  </React.StrictMode>,
)
