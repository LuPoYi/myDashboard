import AbiSigGenerator from 'src/components/evmTools/AbiSigGenerator'
import { Box, Container, Grid } from '@material-ui/core'
import { Helmet } from 'react-helmet'

const EvmTools = () => (
  <>
    <Helmet>
      <title>EVM Tools</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} xs={12}>
            <AbiSigGenerator />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
)

export default EvmTools
