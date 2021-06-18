import { useState, useEffect } from 'react'
import moment from 'moment'
import { v4 as uuid } from 'uuid'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Box, Button, Card, CardContent, Grid, Typography } from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

const PomodoroTimer = () => {
  const [timer, setTimer] = useState(0)
  const [countDownTime, setCountDownTime] = useState(5)
  const [isRunning, setIsRunning] = useState(true)
  const covertTimeToMinuteSecond = (_time) => {
    console.log(_time)
    new Date(1000 * _time).toISOString().substr(14, 5) // 25:00
  }

  const countDown = () => {
    if (countDownTime > 0) setCountDownTime((prevState) => prevState - 1)
  }

  useEffect(() => {
    if (countDownTime < 1) {
      clearInterval(timer)
      setIsRunning(false)
    }
  }, [countDownTime, timer])

  const startOnClick = () => {
    if (timer == 0) {
      setTimer(setInterval(countDown, 1000))
      setIsRunning(true)
    }
  }

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              Pomodoro
            </Typography>
            <Typography color="textPrimary" variant="h3">
              {covertTimeToMinuteSecond(countDownTime)}
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            pt: 2
          }}>
          <Button color="primary" variant="contained" onClick={startOnClick}>
            START
          </Button>
          C: {countDownTime}
          T: {timer}
          {isRunning ? 'run' : 'stop'}
        </Box>
      </CardContent>
    </Card>
  )
}

export default PomodoroTimer
