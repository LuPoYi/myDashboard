import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Avatar, Box, Grid, Container } from '@material-ui/core'
import DashboardCard from 'src/components/dashboard/DashboardCard'
import { red, blue, green } from '@material-ui/core/colors'
import MoneyIcon from '@material-ui/icons/Money'

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
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Dashboard
