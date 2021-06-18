import { Helmet } from 'react-helmet'
import { green } from '@material-ui/core/colors'
import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@material-ui/core'
import PomodoroTimer from 'src/components/pomodoro//PomodoroTimer'

const Pomodoro = () => {
  return (
    <>
      <Helmet>
        <title>Pomodoro</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}>
        <Container maxWidth={false}>
          <Grid item lg={6} sm={6} xl={6} xs={12}>
            <PomodoroTimer />
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Pomodoro
