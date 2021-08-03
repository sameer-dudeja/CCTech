import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import CardMedia from '@material-ui/core/CardMedia'
import './cardm.css'
const url = 'https://randomuser.me/api/?results=100'
const useStyles = makeStyles({
  rootCard: {
    minWidth: 275,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundImage:
      'linear-gradient(45deg, #1fa2ff 0%,#12d8fa 51%,#1fa2ff 100%)',
  },
  details: {
    maxWidth: 370,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  img: {
    display: 'flex',
    width: 90,
    height: 90,
    borderRadius: 100,
    padding: 16,
  },
  root: {
    boxShadow: '2px 4px 5px 2px rgba(0, 0, 0, .3)',
    display: 'flex',

    minHeight: 220,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  imgContainer: {
    paddingLeft: 10,
    paddingTop: 50,
  },
  actions: {
    borderRadius: 10,
    borderColor: 'blue',
  },
})
const CardDisplay = (data) => {
  const classes = useStyles()

  return (
    <>
      <Container>
        <Grid container className={classes.rootCard} spacing={3}>
          {data.map((person, cell) => {
            const { name, location, picture, email } = person
            return (
              <Grid item xs={4}>
                <Grid container justifyContent='space-evenly'>
                  <Grid key={cell} item>
                    <Card className={classes.root} variant='outlined'>
                      <div className={classes.root}>
                        <div className={classes.imgContainer}>
                          <CardMedia
                            className={classes.img}
                            image={picture.large}
                            title={name.first + ' ' + name.last}
                          />
                        </div>
                        <div className={classes.details}>
                          <CardContent>
                            <Typography variant='h5' component='h2'>
                              {name.first + ' ' + name.last}
                            </Typography>
                            <Typography
                              className={classes.title}
                              color='textSecondary'
                              gutterBottom
                            >
                              {email}
                            </Typography>

                            <Typography
                              className={classes.pos}
                              color='textSecondary'
                            >
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
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button
                              variant='outlined'
                              color='primary'
                              size='small'
                            >
                              Learn More
                            </Button>
                          </CardActions>
                        </div>
                      </div>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}

export const CardM = () => {
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
