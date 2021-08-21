import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

import { Box, Container, Grid, Card, CardContent, Typography } from '@material-ui/core'

const CountdownPage = () => {
  const search = window.location.search
  const params = new URLSearchParams(search)
  const targetTimestamp = parseInt(params.get('t'))
  const targetDate = new Date(targetTimestamp)

  const calculateTimeLeft = () => {
    const difference = targetDate - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365))
      const days = Math.floor(difference / (1000 * 60 * 60 * 24)) - years * 365

      timeLeft = {
        years: years,
        days: days,
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  return (
    <>
      <Helmet>
        <title>Countdown Page</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}>
        <Container maxWidth={false}>
          <Grid item lg={12} sm={12} xl={12} xs={12}>
            <Card>
              <CardContent>
                <Grid container sx={{ justifyContent: 'center' }}>
                  <Grid>
                    <Typography
                      color="textSecondary"
                      gutterBottom
                      sx={{ mb: 3, textAlign: 'center' }}
                      variant="h1">
                      <h1>
                        Countdown to {targetDate.toISOString().replace('T', ' ').substr(0, 19)}
                      </h1>
                    </Typography>
                    <Typography
                      color="textPrimary"
                      sx={{ fontSize: '120px', mb: 3, textAlign: 'center' }}></Typography>
                  </Grid>
                </Grid>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 2
                  }}>
                  <Grid item lg={3} sm={6} xl={3} xs={12} sx={{ textAlign: 'center' }}>
                    {timeLeft.years > 0 && `${timeLeft.years} YEARS `}
                    {timeLeft.days} DAYS
                  </Grid>
                  <Grid item lg={3} sm={6} xl={3} xs={12} sx={{ textAlign: 'center' }}>
                    {timeLeft.hours} HOURS
                  </Grid>
                  <Grid item lg={3} sm={6} xl={3} xs={12} sx={{ textAlign: 'center' }}>
                    {timeLeft.minutes} MINUTES {timeLeft.seconds}
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default CountdownPage
