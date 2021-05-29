import { Helmet } from 'react-helmet'
import { Box, Container, Grid } from '@material-ui/core'

const DeFiLab = () => (
  <>
    <Helmet>
      <title>DeFiLab | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            DeFi lab - connect metamask
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
)

export default DeFiLab
