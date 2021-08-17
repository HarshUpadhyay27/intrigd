import React from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="app" >
      <header>
        <Navbar/>
      </header>
      <main>
        <Main/>
      </main>
    </div>
  )
}

export default App