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
  const [color, setColor] = useState({
    rgba: 'rgba(0,0,0,1)',
    red: 0,
    green: 0,
    blue: 0,
    alpha: 1,
    hex: '#000000'
  })

  const handleColorChange = (key) => (e) => {
    const value = e?.target?.value

    key === 'alpha'
      ? setColor((prevColor) => ({
          ...prevColor,
          [key]: !value ? '' : parseFloat(value)
        }))
      : setColor((prevColor) => ({
          ...prevColor,
          [key]: !value ? '' : parseInt(value)
        }))
  }

  const handleHexChange = () => (e) => {
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

      setColor((prevColor) => ({
        ...prevColor,
        hex: value,
        red: r,
        green: g,
        blue: b
      }))
    }
  }

  const handleRgbaChange = () => (e) => {
    const value = e?.target?.value
    const match = value?.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)

    setColor((prevColor) => ({
      ...prevColor,
      rgba: match ? value : '',
      red: match ? Number(match[1]) : '',
      green: match ? Number(match[2]) : '',
      blue: match ? Number(match[3]) : '',
      alpha: match ? Number(match[4]) : ''
    }))
  }

  const handleRandomColorOnClick = () => {
    setColor((prevColor) => ({
      ...prevColor,
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256),
      alpha: 1
    }))
  }

  useEffect(() => {
    if (!(color.red && color.green && color.blue)) {
      setColor((prevColor) => ({
        ...prevColor,
        hex: '',
        rgba: ''
      }))
      return
    }

    let r = parseInt(color.red).toString(16)
    let g = parseInt(color.green).toString(16)
    let b = parseInt(color.blue).toString(16)
    if (r.length === 1) r = '0' + r
    if (g.length === 1) g = '0' + g
    if (r.length === 1) b = '0' + b

    setColor((prevColor) => ({
      ...prevColor,
      hex: '#' + r + g + b,
      rgba: `rgba(${color.red},${color.green},${color.blue},${color.alpha})`
    }))
  }, [color.red, color.green, color.blue, color.alpha])

  return (
    <Card>
      <CardHeader title="Color Code Converter" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <TextField
              fullWidth
              label="RGBA"
              variant="outlined"
              onChange={handleRgbaChange()}
              value={color.rgba}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              label="Red"
              variant="outlined"
              onChange={handleColorChange('red')}
              value={color.red}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              label="Green"
              variant="outlined"
              onChange={handleColorChange('green')}
              value={color.green}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              label="Blue"
              variant="outlined"
              onChange={handleColorChange('blue')}
              value={color.blue}
            />
          </Grid>

          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              label="Alpha"
              variant="outlined"
              onChange={handleColorChange('alpha')}
              value={color.alpha}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Hex"
              variant="outlined"
              onChange={handleHexChange}
              value={color.hex}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ColorLensIcon style={{ color: color.hex }} />
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
