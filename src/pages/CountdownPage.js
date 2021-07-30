import { useState } from 'react'
import { Helmet } from 'react-helmet'

import {
  TextField,
  Box,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  Typography
} from '@material-ui/core'
import DateTimePicker from '@material-ui/lab/DateTimePicker'
import { Link } from 'react-router-dom'

const Countdown = () => {
  const search = window.location.search
  const params = new URLSearchParams(search)
  const timestamp = params.get('timestamp')

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
                      <h1>Countdown to {JSON.stringify(new Date(1627654054000))}</h1>
                    </Typography>
                    <Typography
                      color="textPrimary"
                      sx={{ fontSize: '120px', mb: 3, textAlign: 'center' }}></Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Countdown
