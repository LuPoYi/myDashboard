import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Box, Container, Grid } from '@material-ui/core'
import Budget from 'src/components/dashboard//Budget'
import EthereumGas from 'src/components/dashboard//EthereumGas'
import TasksProgress from 'src/components/dashboard//TasksProgress'
import TotalCustomers from 'src/components/dashboard//TotalCustomers'
import { red, blue, green, orange } from '@material-ui/core/colors'

const Dashboard = () => {
  const [gasTracker, setGasTracker] = useState({
    LastBlock: null,
    SafeGasPrice: null,
    ProposeGasPrice: null,
    FastGasPrice: null
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
        (error) => {
          console.log('fetch api error', error)
        }
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
              <EthereumGas gwei={gasTracker?.SafeGasPrice} level={'Low'} bg={green[600]} />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <EthereumGas gwei={gasTracker?.ProposeGasPrice} level={'Average'} bg={blue[600]} />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <EthereumGas gwei={gasTracker?.FastGasPrice} level={'Fast'} bg={red[600]} />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <EthereumGas gwei={gasTracker?.LastBlock} level={'Block'} bg={orange[600]} />
            </Grid>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Budget />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <TotalCustomers />
            </Grid>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <TasksProgress />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Dashboard
