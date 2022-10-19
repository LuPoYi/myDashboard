import React, { useEffect, useState } from 'react'

import { Card, CardContent, CardHeader, Divider, Grid, TextField } from '@material-ui/core'

function GridTrading() {
  const [high, setHigh] = useState(12)
  const [low, setLow] = useState(4)
  const [grid, setGrid] = useState(51)
  const [step, setStep] = useState()
  const [result, setResult] = useState({})

  const handleHighChange = (e) => setHigh(Number(e.target.value))
  const handleLowChange = (e) => setLow(Number(e.target.value))
  const handleGridChange = (e) => setGrid(Number(e.target.value))

  useEffect(() => {
    let _result = []
    const _step = (high - low) / (grid - 1)
    setStep(_step)
    _result.push(low)
    let _price = low
    for (let i = 1; i < grid; i++) {
      _price += _step
      _result.push(_price)
    }

    setResult(_result)
    setStep(_step)
  }, [high, low, grid])
  return (
    <Card>
      <CardHeader title="Grid Trading" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              label="High Price"
              variant="outlined"
              onChange={handleHighChange}
              value={high}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              label="Low Price"
              variant="outlined"
              onChange={handleLowChange}
              value={low}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              label="Grid Count"
              variant="outlined"
              onChange={handleGridChange}
              value={grid}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            {JSON.stringify(result)}
            <br />
            {step}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default GridTrading
