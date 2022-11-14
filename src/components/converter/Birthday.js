import { useEffect, useState } from 'react'

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography
} from '@material-ui/core'
import DatePicker from '@material-ui/lab/DatePicker'

const Birthday = () => {
  const [age, setAge] = useState('') // 1Y 2M 3D
  const [days, setDays] = useState(0)
  const [birthday, setBirthday] = useState(new Date('1989-06-17'))

  const handleBirthdayOnChange = (value) => setBirthday(value)

  useEffect(() => {
    try {
      const ageDifMs = new Date(Date.now() - birthday)
      const ageYear = Math.abs(ageDifMs.getUTCFullYear() - 1970)
      const ageMonth = ageDifMs.getMonth()
      const ageDay = ageDifMs.getDate()
      setAge(`${ageYear}Y ${ageMonth}M ${ageDay}D`)

      setDays(Math.floor((Date.now() - Date.parse(birthday)) / 86400000))
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
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}>
        <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
          Age in Days: {days}
        </Typography>
      </Box>
    </Card>
  )
}

export default Birthday
