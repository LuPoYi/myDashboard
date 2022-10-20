import React, { useEffect, useState } from 'react'

import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField
} from '@material-ui/core'
import { Decimal } from 'decimal.js'

function GridTrading() {
  const [high, setHigh] = useState(new Decimal(12))
  const [low, setLow] = useState(new Decimal(4))
  const [grid, setGrid] = useState(51)
  const [step, setStep] = useState()
  const [result, setResult] = useState()

  const handleHighChange = (e) => {
    try {
      setHigh(new Decimal(e.target.value))
    } catch (e) {
      console.log(e)
    }
  }
  const handleLowChange = (e) => {
    try {
      setLow(new Decimal(e.target.value))
    } catch (e) {
      console.log(e)
    }
  }
  const handleGridChange = (e) => {
    try {
      setGrid(Number(e.target.value))
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    let _result = []
    let _price = low
    const _step = high.minus(low).dividedBy(grid - 1)

    _result.push(Number(_price))
    for (let i = 1; i < grid; i++) {
      _price = _price.add(_step)
      _result.push(Number(_price))
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
            Step: {Number(step)}
            <List sx={{ bgcolor: 'aliceblue', height: 300, overflowY: 'auto' }}>
              {result?.map((item, index) => (
                <ListItem key={item} disablePadding secondaryAction={`#${index + 1}`}>
                  <ListItemButton>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default GridTrading
