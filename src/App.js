import './App.css'
import React, { useContext } from 'react'

import { Nav } from './components/Nav'
import Home from './pages/Home/Home'
import { BrowserRouter, Route } from 'react-router-dom'
import Profile from './components/profile/Profile'

const styles = {
  isStyleBootstrap: true,
}

const StyleContext = React.createContext(styles.isStyleBootstrap)

function App() {
  return (
    <>
      <BrowserRouter>
        <StyleContext.Provider value={styles.isStyleBootstrap}>
          <Nav />
          <Route exact path='/' component={Home} />
          <Route exact path='/person/:password' component={Profile} />
          {/* <Profile /> */}
        </StyleContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App

export const useGlobalContext = () => {
  return useContext(StyleContext)
}

export { StyleContext }
