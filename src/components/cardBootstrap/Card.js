import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './cardB.css'
const url = 'https://randomuser.me/api/?results=50'

const CardDisplay = (data) => {
  return (
    <div className='container-fluid '>
      <br />
      <div className='row'>
        {data.map((person, index) => {
          const { name, location, picture, email, id } = person
          return (
            <div className='col-12 col-md-6' key={index}>
              <div className='card text-white btn-grad mb-3'>
                <div className='card-body con '>
                  <div className='container'>
                    <div className='row align-self-center'>
                      <div className='col-5 '>
                        <img src={picture.large} className='img' alt='' />
                      </div>
                      <div className='col-7 content justify-content'>
                        <div className='card-title'>
                          <h5>{name.first + ' ' + name.last}</h5>
                        </div>
                        <div className='card-text email'>
                          <p>{email}</p>
                        </div>
                        <div className='address'>
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
                        <Link to={`/person/${id.value + 1}`}>
                          <button className='btn btn-primary'>
                            Learn More
                          </button>
                        </Link>
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
          <div className='page_numbers' key={number}>
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
      <div className='container' style={{ minHeight: '480px' }}>
        {CardDisplay(currentItems)}
        <br />
      </div>
      <ul className='pagenumbers'>{renderPageNumbers}</ul>
    </>
  )
}
