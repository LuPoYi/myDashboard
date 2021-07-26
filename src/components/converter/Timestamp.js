import { useState } from 'react'
import { Card, CardHeader, CardContent, Divider, Grid, TextField } from '@material-ui/core'

const Timestamp = () => {
  const [dateGMT, setDateGMT] = useState(new Date().toUTCString())
  const [date, setDate] = useState(Date())
  const [timestamp, setTimestamp] = useState(Math.floor(Date.now() / 1000))

  const dateGMTHandleChange = (e) => {
    setDateGMT(e.target.value)
    setDate(new Date(Date.parse(e.target.value)))
  }

  const timestampHandleChange = (e) => {
    setTimestamp(e.target.value)
    setDate(new Date(parseInt(e.target.value) * 1000))
    setDateGMT(new Date(parseInt(e.target.value) * 1000).toUTCString())
  }

  const dateHandleChange = (e) => {
    setDate(e.target.value)
    setDateGMT(new Date(e.target.value).toUTCString())
    setTimestamp(Date.parse(e.target.value) / 1000)
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
              label="Timestamp"
              variant="outlined"
              onChange={timestampHandleChange}
              value={timestamp}
            />
          </Grid>

          <Grid item md={12} xs={12}>
            <TextField
              fullWidth
              label="Date(GMT)"
              variant="outlined"
              onChange={dateGMTHandleChange}
              value={dateGMT}
            />
          </Grid>

          <Grid item md={12} xs={12}>
            <TextField
              fullWidth
              label="Date(+8)"
              variant="outlined"
              onChange={dateHandleChange}
              value={date}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Timestamp
