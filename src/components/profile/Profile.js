import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  rootCard: {
    minWidth: 275,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundImage:
      'linear-gradient(45deg, #1fa2ff 0%,#12d8fa 51%,#1fa2ff 100%)',
  },
  details: {
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: 500,
  },
  img: {
    display: 'flex',
    width: 300,
    height: 300,
    borderRadius: 10,
    padding: 16,
    margin: 20,
  },
  root: {
    boxShadow: '2px 4px 5px 2px rgba(0, 0, 0, .3)',
    display: 'flex',
    marginTop: 20,
    minHeight: 220,
  },
  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
    fontSize: 24,
  },
  imgContainer: {
    paddingLeft: 10,
    paddingTop: 50,
  },
  actions: {
    borderRadius: 10,
    borderColor: 'blue',
  },
  main: {
    // paddingTop: 20,
    width: 'fit-content',
    display: 'flex',
  },
})

const Profile = (props) => {
  const classes = useStyles()
  const [data, setData] = useState([])

  useEffect(() => {
    const url = `https://randomuser.me/api/?${props._id}`
    const getData = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((res) => {
          setData(res.results)
          console.log(res)
        })
    }
    getData()
  }, [props._id])
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item className={classes.main}>
            {data.map((person) => {
              const { name, location, picture, email, dob, gender, phone } =
                person

              return (
                <Grid item xs={12} key={name.first}>
                  <Grid container justifyContent='space-evenly'>
                    <Grid item>
                      <Card className={classes.root} variant='outlined'>
                        <div className={classes.main}>
                          <div className={classes.details}>
                            <CardMedia
                              className={classes.img}
                              image={picture.large}
                              title={name.first + ' ' + name.last}
                            />

                            <CardContent>
                              <Typography variant='h3' component='h2'>
                                {name.title +
                                  ' ' +
                                  name.first +
                                  ' ' +
                                  name.last}
                              </Typography>

                              <Typography variant='h4' component='h2'>
                                Age:
                                {' ' + dob.age}
                              </Typography>

                              <Typography variant='h4' component='h2'>
                                Gender:
                                {' ' + gender}
                              </Typography>
                              <Typography
                                className={classes.title}
                                color='textSecondary'
                              >
                                Email:
                                {' ' + email}
                              </Typography>
                              <Typography
                                className={classes.title}
                                color='textSecondary'
                              >
                                Phone:
                                {' ' + phone}
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
                            <Link to='/'>
                              <Button
                                variant='outlined'
                                color='primary'
                                size='small'
                              >
                                Back to homepage
                              </Button>
                            </Link>
                          </div>
                          <div className={classes.imgContainer}> </div>
                        </div>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Profile
