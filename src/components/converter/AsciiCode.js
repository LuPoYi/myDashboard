import { useState } from 'react'
import { Card, CardHeader, CardContent, Divider, Grid, TextField } from '@material-ui/core'

const AsciiCode = () => {
  const [text, setText] = useState('')
  const [ascii, setAscii] = useState('')

  const handleTextChange = (e) => {
    const value = e.target.value
    setText(value)
    setAscii([...value].map((x) => x.charCodeAt(0)).join(', '))
  }

  const asciiHandleChange = (e) => {
    const value = e.target.value
    setAscii(value)
    const ary = value.split(', ').join(',').replaceAll(' ', ',').split(',')
    setText(String.fromCharCode(...ary))
  }

  return (
    <Card>
      <CardHeader title="AsciiCode to Text Converter" />
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
              label="Ascii"
              variant="outlined"
              onChange={asciiHandleChange}
              value={ascii}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default AsciiCode
