import { useState, useEffect } from 'react'
import { Card, CardHeader, CardContent, Divider, Grid, TextField } from '@material-ui/core'
import DatePicker from '@material-ui/lab/DatePicker'

const DateCountdown = () => {
  const [date, setDate] = useState(new Date(Date.now() + 10 * 24 * 60 * 60 * 1000))
  const [dayRemaining, setDayRemaining] = useState('') // 1y 2d

  const handleDateOnChange = (value) => value > Date.now() && setDate(value)

  useEffect(() => {
    try {
      const dateDifMs = new Date(date - Date.now())
      const ageYear = Math.abs(dateDifMs.getUTCFullYear() - 1970)
      const ageDay = dateDifMs.getDate() - 1
      setDayRemaining(`${ageYear}Y ${ageDay}D`)
    } catch (e) {
      console.log('error - date cannot convert', e)
    }
  }, [date])

  return (
    <Card>
      <CardHeader title="Date Countdown" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <DatePicker
              mask="____-__-__"
              inputFormat="yyyy-MM-dd"
              label="Date(future)"
              value={date}
              onChange={handleDateOnChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField fullWidth label="Day remaining" variant="outlined" value={dayRemaining} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default DateCountdown
