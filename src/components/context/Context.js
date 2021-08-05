import React, { useState, useContext } from 'react'

const StyleContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isStyleBootstrap, setStyle] = useState(false)

  const setStyleBootstrap = () => {
    setStyle(true)
    console.log(isStyleBootstrap)
  }
  const setStyleMaterial = () => {
    console.log()
    setStyle(false)
  }
  return (
    <StyleContext.Provider
      value={{
        isStyleBootstrap,
        setStyleBootstrap,
        setStyleMaterial,
      }}
    >
      {children}
    </StyleContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(StyleContext)
}

export { StyleContext, AppProvider }
