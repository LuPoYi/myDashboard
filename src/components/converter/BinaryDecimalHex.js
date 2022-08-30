import React, { useState } from 'react'

import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  InputAdornment,
  OutlinedInput
} from '@material-ui/core'

function BinaryDecimalHex() {
  const [data, setData] = useState({
    binary: 10101,
    decimal: 21,
    hexdecimal: 15
  })
  const { binary, decimal, hexdecimal } = data

  const handleBinaryOnChange = () => (e) => {
    const _binary = e.target.value
    const _decimal = parseInt(_binary, 2)
    const _hexdecimal = _decimal.toString(16).toUpperCase()

    setData({
      binary: _binary,
      decimal: _decimal,
      hexdecimal: _hexdecimal
    })
  }

  const handleDecimalOnChange = () => (e) => {
    const _decimal = Number(e.target.value)
    const _binary = _decimal.toString(2)
    const _hexdecimal = _decimal.toString(16).toUpperCase()

    setData({
      binary: _binary,
      decimal: _decimal,
      hexdecimal: _hexdecimal
    })
  }

  const handleHexdecimalOnChange = () => (e) => {
    const _hexdecimal = e.target.value
    const _decimal = parseInt(_hexdecimal, 16)
    const _binary = _decimal.toString(2)

    setData({
      binary: _binary,
      decimal: _decimal,
      hexdecimal: _hexdecimal
    })
  }

  return (
    <Card>
      <CardHeader title="Binary Decimal Hexdecimal Converter" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <OutlinedInput
              fullWidth
              value={binary}
              onChange={handleBinaryOnChange()}
              endAdornment={<InputAdornment position="end">Binary</InputAdornment>}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <OutlinedInput
              fullWidth
              value={decimal}
              onChange={handleDecimalOnChange()}
              endAdornment={<InputAdornment position="end">Decimal</InputAdornment>}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <OutlinedInput
              fullWidth
              value={hexdecimal}
              onChange={handleHexdecimalOnChange()}
              endAdornment={<InputAdornment position="end">Hexdecimal</InputAdornment>}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default BinaryDecimalHex
