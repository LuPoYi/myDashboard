import { useState } from 'react'
import { Helmet } from 'react-helmet'
import Web3 from 'web3'
import { Box, Container, Grid } from '@material-ui/core'
import DeFiToolbar from 'src/components/defi/DeFiToolbar'

const DeFiPortfolio = () => {
  const [address, setAddress] = useState('')

  const disconnectOnClick = () => {}

  return (
    <>
      <Helmet>
        <title>DeFiLab</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item lg={3} md={6} xs={12}>
              ETH: 0x...
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              BSC: 0x...
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              MATIC: 0x...
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              SOL: ...
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default DeFiPortfolio
