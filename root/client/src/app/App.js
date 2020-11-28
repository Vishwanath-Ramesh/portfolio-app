import React from 'react'

import ErrorBoundary from '../views/pages/ErrorBoundary/ErrorBoundary'
import Routes from '../views/Routes/Routes'
import './App.css'

const App = () => {
  return (
    <ErrorBoundary>
      <div className="app">
        <Routes />
      </div>
    </ErrorBoundary>
  )
}

export default App
