import React, { useState, useEffect } from 'react'
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  TextField,
  InputAdornment
} from '@material-ui/core'
import ColorLensIcon from '@material-ui/icons/ColorLens'

const ColorCode = () => {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)
  const [hex, setHex] = useState('#000000')

  const handleRedChange = (e) => {
    const value = e.target.value
    value >= 0 && value <= 255 ? setRed(parseInt(value)) : setRed('')
  }
  const handleGreenChange = (e) => {
    let value = e.target.value
    value >= 0 && value <= 255 ? setGreen(parseInt(value)) : setGreen('')
  }
  const handleBlueChange = (e) => {
    const value = e.target.value
    value >= 0 && value <= 255 ? setBlue(parseInt(value)) : setBlue('')
  }
  const handleHexChange = (e) => {
    let value = e.target.value
    let r = 1,
      g = -1,
      b = -1

    if (value.slice(0, 1) === '#' && value.length <= 7) {
      if (value.length === 7) {
        r = parseInt(value.slice(1, 3), 16)
        g = parseInt(value.slice(3, 5), 16)
        b = parseInt(value.slice(5, 7), 16)
      }
      setHex(value)
      setRed(r)
      setGreen(g)
      setBlue(b)
    }
  }

  const handleRandomColorOnClick = () => {
    setRed(Math.floor(Math.random() * 256))
    setGreen(Math.floor(Math.random() * 256))
    setBlue(Math.floor(Math.random() * 256))
  }

  useEffect(() => {
    if (!(red && green && blue)) {
      setHex('')
      return
    }

    let r = parseInt(red).toString(16)
    let g = parseInt(green).toString(16)
    let b = parseInt(blue).toString(16)

    if (r.length === 1) {
      r = '0' + r
    }
    if (g.length === 1) {
      g = '0' + g
    }
    if (r.length === 1) {
      b = '0' + b
    }
    setHex('#' + r + g + b)
  }, [red, green, blue])

  return (
    <Card>
      <CardHeader title="Color Code Converter" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              label="Red"
              variant="outlined"
              onChange={handleRedChange}
              value={red}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              label="Green"
              variant="outlined"
              onChange={handleGreenChange}
              value={green}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              label="Blue"
              variant="outlined"
              onChange={handleBlueChange}
              value={blue}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Hex"
              variant="outlined"
              onChange={handleHexChange}
              value={hex}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ColorLensIcon style={{ color: hex }} />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item md={2} xs={12}>
            <Button color="primary" variant="contained" onClick={handleRandomColorOnClick}>
              Random
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ColorCode
