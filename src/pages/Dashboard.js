import { useEffect, useState } from 'react'

import { Avatar, Box, Container, Grid } from '@material-ui/core'
import DashboardCard from 'src/components/dashboard/DashboardCard'
import { Helmet } from 'react-helmet'
import MoneyIcon from '@material-ui/icons/Money'
import { green } from '@material-ui/core/colors'

const BINANCE_SYMBOLS = ['BTCUSDT', 'ETHUSDT']

const Dashboard = () => {
  const [gasTracker, setGasTracker] = useState({
    LastBlock: null,
    SafeGasPrice: null,
    ProposeGasPrice: null,
    FastGasPrice: null
  })

  const [price, setPrice] = useState({
    ethbtc: null,
    ethbtc_timestamp: null,
    ethusd: null,
    ethusd_timestamp: null
  })

  const [binanceTickers, setBinanceTickers] = useState([])

  useEffect(() => {
    fetch(
      'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=DGIQU4UGTA2UW72KABXMZ6A1BG5EAV1XW1'
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result?.message === 'OK') setGasTracker(result?.result)
        },
        (error) => console.log('fetch api error', error)
      )

    fetch(
      'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=DGIQU4UGTA2UW72KABXMZ6A1BG5EAV1XW1'
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result?.message === 'OK') setPrice(result?.result)
        },
        (error) => console.log('fetch api error', error)
      )

    BINANCE_SYMBOLS.forEach((symbol) => {
      fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`)
        .then((res) => res.json())
        .then(
          (result) => {
            if (!result?.code) setBinanceTickers((prevState) => [...prevState, result])
          },
          (error) => console.log('fetch api error', error)
        )
    })
  }, [])

  return (
    <>
      <Helmet>
        <title>Dashboard | Bob</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}>
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            {/* Ethereum Gas Tracker */}
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <DashboardCard
                title="Low/Average/Fast"
                content={`${gasTracker?.SafeGasPrice}/${gasTracker?.ProposeGasPrice}/${gasTracker?.FastGasPrice}`}
                description="Ethereum Gas Tracker"
                icon={
                  <Avatar
                    sx={{
                      backgroundColor: green[600],
                      height: 56,
                      width: 56
                    }}>
                    <MoneyIcon />
                  </Avatar>
                }
              />
            </Grid>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <DashboardCard
                title="Last Block"
                content={gasTracker?.LastBlock}
                description="Ethereum gas tracker"
              />
            </Grid>

            {/* prices */}
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <DashboardCard
                title="ETH USD Price"
                content={price?.ethusd}
                description="Ethereum stats"
              />
            </Grid>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <DashboardCard
                title={'ETH BTC Price'}
                content={price?.ethbtc}
                description="Ethereum stats"
              />
            </Grid>

            {/* binance tickers #FCD535 */}
            {binanceTickers?.map(({ symbol, lastPrice }) => (
              <Grid key={symbol} item lg={3} sm={6} xl={3} xs={12}>
                <DashboardCard
                  bg={'#FCD535'}
                  title={`${symbol} Price`}
                  content={lastPrice}
                  description="Binance ticker"
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Dashboard
