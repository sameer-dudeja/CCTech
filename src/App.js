import './App.css'
import React from 'react'

import { Nav } from './components/Nav'
import Home from './pages/Home/Home'
import { BrowserRouter, Route } from 'react-router-dom'
import Profile from './components/profile/Profile'
import { AppProvider } from './components/context/Context'

function App() {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Nav />
          <Route exact path='/' component={Home} />
          <Route exact path='/person/:id' component={Profile} />
          {/* <Profile /> */}
        </AppProvider>
      </BrowserRouter>
    </>
  )
}

export default App

// export const useGlobalContext = () => {
//   return useContext(StyleContext)
// }

// export { StyleContext }
