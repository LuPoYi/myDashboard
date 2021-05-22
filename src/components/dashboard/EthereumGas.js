import PropTypes from 'prop-types'
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@material-ui/core'
import MoneyIcon from '@material-ui/icons/Money'

const EthereumGas = ({ gwei, level, bg, ...restProps }) => (
  <Card sx={{ height: '100%' }} {...restProps}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="h6">
            {level}
          </Typography>
          <Typography color="textPrimary" variant="h3">
            {gwei}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: bg,
              height: 56,
              width: 56
            }}>
            <MoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}>
        <Typography color="textSecondary" variant="caption">
          Ethereum Gas Tracker
        </Typography>
      </Box>
    </CardContent>
  </Card>
)

EthereumGas.propTypes = {
  gwei: PropTypes.number,
  level: PropTypes.string,
  bg: PropTypes.color
}

export default EthereumGas
