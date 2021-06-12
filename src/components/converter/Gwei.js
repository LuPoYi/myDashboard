import React, { useState } from 'react'
import { Decimal } from 'decimal.js'

import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  InputAdornment,
  OutlinedInput
} from '@material-ui/core'

function Gwei() {
  const [ethereumUnit, setEthereumUnit] = useState({
    wei: '1000000000000000000',
    gwei: '1000000000',
    ether: '1'
  })

  const { wei, gwei, ether } = ethereumUnit

  //  this.setState({ [event.target.name]: event.target.value });

  const handleEthereumUnitOnChange = (e, key) => {
    let targetValue, newWei, newGwei, newEther
    try {
      targetValue = new Decimal(e.target.value)
    } catch {
      targetValue = '0'
    }

    if (key === 'wei') {
      newWei = new Decimal(targetValue)
      newGwei = newWei.dividedBy(1000000000)
      newEther = newGwei.dividedBy(1000000000)
    } else if (key === 'gwei') {
      newGwei = new Decimal(targetValue)
      newWei = newGwei.times(1000000000)
      newEther = newGwei.dividedBy(1000000000)
    } else {
      newEther = new Decimal(targetValue)
      newGwei = newEther.times(1000000000)
      newWei = newGwei.times(1000000000)
    }

    setEthereumUnit({
      wei: newWei,
      gwei: newGwei,
      ether: newEther
    })
  }

  return (
    <Card>
      <CardHeader title="GWei Converter" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <OutlinedInput
              fullWidth
              value={ether}
              onChange={(e) => handleEthereumUnitOnChange(e, 'ether')}
              endAdornment={<InputAdornment position="end">Ether</InputAdornment>}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <OutlinedInput
              fullWidth
              value={gwei}
              onChange={(e) => handleEthereumUnitOnChange(e, 'gwei')}
              endAdornment={<InputAdornment position="end">Gwei</InputAdornment>}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <OutlinedInput
              fullWidth
              value={wei}
              onChange={(e) => handleEthereumUnitOnChange(e, 'wei')}
              endAdornment={<InputAdornment position="end">Wei</InputAdornment>}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Gwei
