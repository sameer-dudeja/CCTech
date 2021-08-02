import './App.css'
import React, { useState, useEffect } from 'react'
import { Nav } from './components/Nav'
const url = 'https://randomuser.me/api/?results=10'
function App() {
  const [data, setData] = useState([])
  const getData = async () => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results)
        console.log(data.results)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <Nav />
      <div className='container'>
        <br />
        <div className='row'>
          {data.map((person, cell) => {
            const { name, location, picture, email } = person
            return (
              <div className='col-4' key={cell}>
                <div className='card text-white btn-grad mb-3'>
                  <div className='card-body con '>
                    <div className='row g-0'>
                      <div className='col-md-5 '>
                        <img src={picture.large} className='img' alt='' />
                      </div>
                      <div className='col-md-7 content justify-content'>
                        <div className='card-title'>
                          <h5>{name.first + ' ' + name.last}</h5>
                        </div>
                        <div className='card-text email'>
                          <p>{email}</p>

                          {location.street.number +
                            ', ' +
                            location.street.name +
                            ', ' +
                            location.city}

                          {location.state +
                            ', ' +
                            location.country +
                            ' - ' +
                            location.postcode}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
