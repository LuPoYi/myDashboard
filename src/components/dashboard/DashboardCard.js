import PropTypes from 'prop-types'
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@material-ui/core'
import MoneyIcon from '@material-ui/icons/Money'

const DashboardCard = ({ title, content, description, icon, ...restProps }) => (
  <Card sx={{ height: '100%' }} {...restProps}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="h6">
            {title}
          </Typography>
          <Typography color="textPrimary" variant="h3">
            {content}
          </Typography>
        </Grid>
        <Grid item>{icon}</Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}>
        <Typography color="textSecondary" variant="caption">
          {description}
        </Typography>
      </Box>
    </CardContent>
  </Card>
)

DashboardCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.icon
}

export default DashboardCard
