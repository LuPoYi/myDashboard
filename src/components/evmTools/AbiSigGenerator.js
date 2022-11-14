import React, { useEffect, useState } from 'react'

import { Card, CardContent, CardHeader, Divider, Grid, TextField } from '@material-ui/core'
import { Interface } from '@ethersproject/abi'
import { defaultAbiSample } from './constants'

const AbiSigGenerator = () => {
  const [abi, setAbi] = useState(defaultAbiSample)
  const [funcSigs, setFuncSigs] = useState()
  const handleAbiChange = (e) => setAbi(e.target.value)

  useEffect(() => {
    try {
      const iface = new Interface(abi)
      const funcs = Object.keys(iface.functions)
      const _funcSigs = funcs.forEach((func) =>
        _funcSigs.push(`${iface.getSighash(func)}: ${func}`)
      )
      setFuncSigs(_funcSigs)
    } catch (e) {
      console.log('error', e)
      setFuncSigs([])
    }
  }, [abi])

  return (
    <Card>
      <CardHeader title="ABI Sig Generator" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <TextField
              fullWidth
              label="ABI"
              variant="outlined"
              onChange={handleAbiChange}
              value={JSON.stringify(abi)}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <React.Fragment>
              {funcSigs?.map((funcSig) => (
                <li key={funcSig}>{funcSig}</li>
              ))}
            </React.Fragment>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
export default AbiSigGenerator
