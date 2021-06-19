import { useState, useEffect } from 'react'
import { Card, CardHeader, CardContent, Divider, Grid, TextField } from '@material-ui/core'
import DatePicker from '@material-ui/lab/DatePicker'

const Birthday = () => {
  const [age, setAge] = useState('') // 1y 2d
  const [birthday, setBirthday] = useState(new Date('1989-06-17'))

  const handleBirthdayOnChange = (value) => setBirthday(value)

  useEffect(() => {
    try {
      const ageDifMs = new Date(Date.now() - birthday)
      const ageYear = Math.abs(ageDifMs.getUTCFullYear() - 1970)
      const ageDay = ageDifMs.getDate()
      setAge(`${ageYear}Y ${ageDay}D`)
    } catch (e) {
      console.log('error - birthday cannot convert', e)
    }
  }, [birthday])

  return (
    <Card>
      <CardHeader title="Birthday To Age" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <DatePicker
              mask="____-__-__"
              inputFormat="yyyy-MM-dd"
              label="Birthday"
              value={birthday}
              onChange={handleBirthdayOnChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField fullWidth label="Age" variant="outlined" value={age} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Birthday
