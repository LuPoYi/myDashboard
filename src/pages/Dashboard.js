import { Helmet } from 'react-helmet'
import { Box, Container, Grid } from '@material-ui/core'
import Budget from 'src/components/dashboard//Budget'
import EthereumGas from 'src/components/dashboard//EthereumGas'
import TasksProgress from 'src/components/dashboard//TasksProgress'
import TotalCustomers from 'src/components/dashboard//TotalCustomers'
import { red, blue, green } from '@material-ui/core/colors'

const Dashboard = () => {
  const gweiList = [
    { gwei: 35, level: 'Low', bg: green[600] },
    { gwei: 28, level: 'Average', bg: blue[600] },
    { gwei: 52, level: 'High', bg: red[600] }
  ]

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
            {gweiList.map(({ gwei, level, bg }) => (
              <Grid key={level} item lg={3} sm={6} xl={3} xs={12}>
                <EthereumGas gwei={gwei} level={level} bg={bg} />
              </Grid>
            ))}

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
