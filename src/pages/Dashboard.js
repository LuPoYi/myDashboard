import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Avatar, Box, Grid, Container } from '@material-ui/core'
import DashboardCard from 'src/components/dashboard/DashboardCard'
import { red, blue, green } from '@material-ui/core/colors'
import MoneyIcon from '@material-ui/icons/Money'
const BINANCE_SYMBOLS = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'SOLUSDT']

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

  const [binanceTickers, setBinanceTickers] = useState([
    {
      symbol: 'BTCUSDT',
      priceChange: '-465.43000000',
      priceChangePercent: '-0.983',
      weightedAvgPrice: '47940.17828752',
      prevClosePrice: '47344.87000000',
      lastPrice: '46879.44000000',
      lastQty: '0.00041000',
      bidPrice: '46885.74000000',
      bidQty: '0.15546000',
      askPrice: '46885.75000000',
      askQty: '0.07967000',
      openPrice: '47344.87000000',
      highPrice: '49352.84000000',
      lowPrice: '46560.01000000',
      volume: '52341.26742400',
      quoteVolume: '2509249692.10130679',
      openTime: 1629882369964,
      closeTime: 1629968769964,
      firstId: 1024000300,
      lastId: 1025862617,
      count: 1862318
    }
  ])

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
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <DashboardCard
                title="Low"
                content={gasTracker?.SafeGasPrice}
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
                title="Average"
                content={gasTracker?.ProposeGasPrice}
                description="Ethereum Gas Tracker"
                icon={
                  <Avatar
                    sx={{
                      backgroundColor: blue[600],
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
                title="Fast"
                content={gasTracker?.FastGasPrice}
                description="Ethereum Gas Tracker"
                icon={
                  <Avatar
                    sx={{
                      backgroundColor: red[600],
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
