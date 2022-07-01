import { useState } from 'react'
import { Card, CardHeader, CardContent, Divider, Grid, TextField } from '@material-ui/core'

const Base64 = () => {
  const [text, setText] = useState('')
  const [base64, setBase64] = useState('')

  const handleTextChange = (e) => {
    setText(e.target.value)
    let value
    try {
      value = btoa(e.target.value)
    } catch {
      value = 'ERROR'
    }
    setBase64(value)
  }

  const handleBase64Change = (e) => {
    setBase64(e.target.value)
    let value
    try {
      value = atob(e.target.value)
    } catch {
      value = 'ERROR'
    }
    setText(value)
  }

  return (
    <Card>
      <CardHeader title="Base64 Converter" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <TextField
              fullWidth
              label="Text"
              variant="outlined"
              onChange={handleTextChange}
              value={text}
            />
          </Grid>

          <Grid item md={12} xs={12}>
            <TextField
              fullWidth
              label="Base64"
              variant="outlined"
              onChange={handleBase64Change}
              value={base64}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Base64
