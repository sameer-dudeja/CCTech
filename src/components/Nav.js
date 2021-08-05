import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { useGlobalContext } from '../components/context/Context'
import './nav.css'
export const Nav = () => {
  const { setStyleBootstrap, setStyleMaterial } = useGlobalContext()
  return (
    <div className='nav'>
      <Button
        variant='contained'
        color='primary'
        onClick={() => setStyleBootstrap()}
      >
        Bootstrap
      </Button>
      <Link to='/' className='link'>
        <h2>UserList</h2>{' '}
      </Link>
      <Button
        variant='contained'
        color='primary'
        onClick={() => setStyleMaterial()}
      >
        Material
      </Button>
    </div>
  )
}
