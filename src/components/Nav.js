import React from 'react'
import Button from '@material-ui/core/Button'
import './nav.css'
export const Nav = () => {
  return (
    <div className='nav'>
      <Button variant='contained' color='primary'>
        Bootstrap
      </Button>
      <h1>UserList</h1>
      <Button variant='contained' color='primary'>
        Material
      </Button>
    </div>
  )
}
