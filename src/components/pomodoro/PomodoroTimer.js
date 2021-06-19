import { useState, useEffect } from 'react'
import { Box, Button, Card, CardContent, Divider, Grid, Typography } from '@material-ui/core'
import StopIcon from '@material-ui/icons/Stop'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'

const PomodoroTimer = () => {
  const defaultTime = 25 * 60
  const [timer, setTimer] = useState()
  const [countDownTime, setCountDownTime] = useState(defaultTime)
  const [isRunning, setIsRunning] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  const covertTimeToMinuteSecond = (time) => new Date(1000 * time).toISOString().substr(14, 5) // 25:00
  const countDown = () => countDownTime > 0 && setCountDownTime((prevState) => prevState - 1)

  useEffect(() => {
    if (countDownTime < 1) {
      setTimer(false)
      clearInterval(timer)
      setIsRunning(false)
      setIsFinished(true)
    }
  }, [countDownTime, timer])

  const startOnClick = () => {
    if (timer) return
    setTimer(setInterval(countDown, 1000))
    setIsRunning(true)
  }

  const pauseOnClick = () => {
    if (!timer) return
    clearInterval(timer)
    setIsRunning(false)
    setTimer(false)
  }

  const stopOnClick = () => {
    setCountDownTime(defaultTime)
    setIsRunning(false)
    clearInterval(timer)
    setTimer(false)
  }

  return (
    <Card>
      <CardContent>
        <Grid container sx={{ justifyContent: 'center' }}>
          <Grid>
            <Typography
              color="textSecondary"
              gutterBottom
              sx={{ mb: 3, textAlign: 'center' }}
              variant="h5">
              Pomodoro
            </Typography>
            <Typography color="textPrimary" sx={{ fontSize: '120px', mb: 3, textAlign: 'center' }}>
              {covertTimeToMinuteSecond(countDownTime)}
            </Typography>

            {isRunning ? (
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                startIcon={<PauseIcon />}
                sx={{ py: 1, textAlign: 'center', fontSize: '20px' }}
                onClick={pauseOnClick}>
                Pause
              </Button>
            ) : (
              <Button
                fullWidth
                color="primary"
                variant="contained"
                startIcon={<PlayArrowIcon />}
                sx={{ py: 1, textAlign: 'center', fontSize: '20px' }}
                onClick={startOnClick}>
                Start
              </Button>
            )}
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}>
        {isFinished && (
          <Typography color="textPrimary" sx={{ mr: 1 }}>
            Done
          </Typography>
        )}
        <Button
          variant="contained"
          color="secondary"
          startIcon={<StopIcon />}
          onClick={stopOnClick}>
          Stop
        </Button>
      </Box>
    </Card>
  )
}

export default PomodoroTimer
