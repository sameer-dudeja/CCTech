import React, { useState, useEffect } from 'react'
import './cardB.css'
const url = 'https://randomuser.me/api/?results=10'

const CardDisplay = (data) => {
  return (
    <div className='container'>
      <br />
      <div className='row'>
        {data.map((person) => {
          const { name, location, picture, email, password } = person
          return (
            <div className='col-4' key={password}>
              <div className='card text-white btn-grad mb-3'>
                <div className='card-body con '>
                  <div className='row'>
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
  )
}
export const Card = () => {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const items = 6
  const minpageNumberLimit = 0

  const pages = []
  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id))
  }

  const getData = async () => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results)
        console.log(data.results.name)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  for (let i = 0; i <= Math.ceil(data.length / items); i++) {
    pages.push(i)
  }

  const indexoflastitem = currentPage * items
  const indexoffirstitem = indexoflastitem - items
  const currentItems = data.slice(indexoffirstitem, indexoflastitem)

  const renderPageNumbers = pages.map((number) => {
    if (number > minpageNumberLimit) {
      return (
        <>
          <div className='page_numbers'>
            <li
              key={number}
              id={number}
              onClick={handleClick}
              className={currentPage === number ? 'active' : 'none'}
            >
              {number}
            </li>
          </div>
        </>
      )
    } else {
      return null
    }
  })
  return (
    <>
      <br />
      {CardDisplay(currentItems)}
      <br />
      <ul className='pagenumbers'>{renderPageNumbers}</ul>
    </>
  )
}
