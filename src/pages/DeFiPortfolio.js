import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Typography, Box, Container, Grid } from '@material-ui/core'

import './progressBar.css'

const DeFiPortfolio = () => {
  // https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT
  // https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT
  // https://api.coingecko.com/api/v3/simple/price?ids=solana%2Cbinancecoin&vs_currencies=usd&include_market_cap=true

  const [marketCap, setMarketCap] = useState({
    binancecoin: { usd: 0, usd_market_cap: 0 },
    solana: { usd: 0, usd_market_cap: 0 }
  })

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=solana%2Cbinancecoin&vs_currencies=usd&include_market_cap=true'
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result) setMarketCap(result)
        },
        (error) => console.log('fetch api error', error)
      )
  }, [])

  const progressBar = (
    <div className="wrapper">
      <div className="green">
        <div className="progress">
          <div className="inner">
            <div className="percent">
              <span>
                {(
                  (marketCap?.['solana']?.['usd_market_cap'] /
                    marketCap?.['binancecoin']?.['usd_market_cap']) *
                  100
                ).toFixed(1)}
              </span>
              %
            </div>
            <div className="water"></div>
            <div className="glare"></div>
          </div>
        </div>
      </div>
    </div>
  )

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
        {/* <Container maxWidth="lg">
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
        </Container> */}
        <Container maxWidth="lg">
          <Typography color="textPrimary" variant="h2">
            BNB vs SOL
          </Typography>
          <Typography color="textSecondary" variant="h6">
            BNB: {marketCap?.['binancecoin']?.['usd']} -{' '}
            {marketCap?.['binancecoin']?.['usd_market_cap']}
          </Typography>
          <Typography color="textSecondary" variant="h6">
            SOL {marketCap?.['solana']?.['usd']} - {marketCap?.['solana']?.['usd_market_cap']}
          </Typography>
          {progressBar}
        </Container>
      </Box>
    </>
  )
}

export default DeFiPortfolio
