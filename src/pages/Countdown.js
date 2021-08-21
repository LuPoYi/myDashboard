import { useState } from 'react'
import { Helmet } from 'react-helmet'

import { TextField, Box, Container, Grid, Button } from '@material-ui/core'
import DateTimePicker from '@material-ui/lab/DateTimePicker'
import { Link } from 'react-router-dom'

const Countdown = () => {
  const [value, setValue] = useState(new Date())

  const handleDeadlineOnClick = () => {
    //window.open(url, '_blank')
    //<Link to="myRoute" params={myParams} target="_blank">
  }

  return (
    <>
      <Helmet>
        <title>Countdown</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}>
        <Container maxWidth={false}>
          <Grid item lg={6} sm={6} xl={6} xs={12}>
            <DateTimePicker
              inputFormat="yyyy-MM-dd hh:mm:ss"
              renderInput={(props) => <TextField {...props} />}
              label="Deadline"
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </Grid>
          <Grid item lg={6} sm={6} xl={6} xs={12}>
            <Link
              to={{
                pathname: '/countdownPage',
                search: `?t=${Date.parse(value)}`
              }}
              target="_blank"
              rel="noopener">
              Create
            </Link>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Countdown
