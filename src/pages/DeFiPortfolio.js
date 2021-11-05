import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Typography, Box, Container, Grid } from '@material-ui/core'

import './progressBar.css'

const DeFiPortfolio = () => {
  const [marketCap, setMarketCap] = useState({
    binancecoin: { usd: 0, usd_market_cap: 0 },
    solana: { usd: 0, usd_market_cap: 0 }
  })
  const [ratio, setRatio] = useState(0)

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

  useEffect(() => {
    setRatio(
      (
        (marketCap?.['solana']?.['usd_market_cap'] /
          marketCap?.['binancecoin']?.['usd_market_cap']) *
        100
      ).toFixed(1)
    )
  }, [marketCap])

  const progressBar = (
    <div className="wrapper">
      <div className={ratio > 66 ? 'green' : ratio > 33 ? 'orange' : 'red'}>
        <div className="progress">
          <div className="inner">
            <div className="percent">
              <span>{ratio}</span>%
            </div>
            <div className="water"></div>
            <div className="glare"></div>
          </div>
        </div>
      </div>
    </div>
  )

  const convertToInternationalCurrencySystem = (number) => {
    // Nine Zeroes for Billions
    return Math.abs(Number(number)) >= 1.0e9
      ? (Math.abs(Number(number)) / 1.0e9).toFixed(2) + 'B'
      : // Six Zeroes for Millions
      Math.abs(Number(number)) >= 1.0e6
      ? (Math.abs(Number(number)) / 1.0e6).toFixed(2) + 'M'
      : // Three Zeroes for Thousands
      Math.abs(Number(number)) >= 1.0e3
      ? (Math.abs(Number(number)) / 1.0e3).toFixed(2) + 'K'
      : Math.abs(Number(number))
  }

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
            <Grid item md={6} xs={12}>
              <Typography color="textPrimary" variant="h2">
                BNB ${marketCap?.['binancecoin']?.['usd']}
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="h6">
                market cap:{' '}
                {convertToInternationalCurrencySystem(
                  marketCap?.['binancecoin']?.['usd_market_cap']
                )}
              </Typography>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography color="textPrimary" variant="h2">
              SOL ${marketCap?.['solana']?.['usd']}
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="h6">
              market cap:{' '}
              {convertToInternationalCurrencySystem(marketCap?.['solana']?.['usd_market_cap'])}
            </Typography>
          </Grid>
          {progressBar}
        </Container>
      </Box>
    </>
  )
}

export default DeFiPortfolio
