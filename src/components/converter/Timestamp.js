import { useState } from 'react'
import { Card, CardHeader, CardContent, Divider, Grid, TextField } from '@material-ui/core'

const Timestamp = () => {
  const [date, setDate] = useState(Date())
  const [timestamp, setTimestamp] = useState(Math.floor(Date.now() / 1000))

  const dateHandleChange = (e) => {
    setDate(e.target.value)
    setTimestamp(Date.parse(e.target.value) / 1000)
  }
  const timestampHandleChange = (e) => {
    setTimestamp(e.target.value)
    setDate(Date(parseInt(e.target.value) * 1000))
  }

  return (
    <Card>
      <CardHeader title="Timestamp Converter" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <TextField
              fullWidth
              label="Date"
              variant="outlined"
              onChange={dateHandleChange}
              value={date}
            />
          </Grid>

          <Grid item md={12} xs={12}>
            <TextField
              fullWidth
              label="Timestamp"
              variant="outlined"
              onChange={timestampHandleChange}
              value={timestamp}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Timestamp
