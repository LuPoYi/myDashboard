import AsciiCode from 'src/components/converter/AsciiCode'
import Base64 from 'src/components/converter/Base64'
import BinaryDecimalHex from 'src/components/converter/BinaryDecimalHex'
import Birthday from 'src/components/converter/Birthday'
import { Box, Container, Grid } from '@material-ui/core'
import CamelCase from 'src/components/converter/CamelCase'
import ColorCode from 'src/components/converter/ColorCode'
import CompoundInterest from 'src/components/converter/CompoundInterest'
import DCAInterest from 'src/components/converter/DCAInterest'
import DateCountdown from 'src/components/converter/DateCountdown'
import DepositAndBorrow from 'src/components/converter/DepositAndBorrow'
import GridTrading from 'src/components/converter/GridTrading'
import Gwei from 'src/components/converter/Gwei'
import { Helmet } from 'react-helmet'
import LiquidityPool from 'src/components/converter/LiquidityPool'
import Timestamp from 'src/components/converter/Timestamp'

const ConverterList = () => (
  <>
    <Helmet>
      <title>Converters</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} xs={12}>
            <GridTrading />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <DepositAndBorrow />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <LiquidityPool />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <CompoundInterest />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <DCAInterest />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <Timestamp />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <Base64 />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <AsciiCode />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <CamelCase />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <ColorCode />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <Gwei />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <BinaryDecimalHex />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <Birthday />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <DateCountdown />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
)

export default ConverterList
