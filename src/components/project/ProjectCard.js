import PropTypes from 'prop-types'
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@material-ui/core'
import GithubIcon from '@material-ui/icons/GitHub'

import OpenInNewIcon from '@material-ui/icons/OpenInNew'

const ProjectCard = ({ project, ...rest }) => {
  const { title, icon, link, description, source } = project

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
      {...rest}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3
          }}>
          <Avatar alt="Project" src={icon} variant="square" />
        </Box>
        <Typography align="center" color="textPrimary" gutterBottom variant="h4">
          {title}
        </Typography>
        <Typography align="center" color="textPrimary" variant="body1">
          {description}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2} sx={{ justifyContent: source ? 'space-between' : 'flex-end' }}>
          {source && (
            <Grid
              item
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
              as="a"
              href={source}
              target="_blank"
              rel="noreferrer noopener">
              <GithubIcon color="action" />
              <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
                Source
              </Typography>
            </Grid>
          )}

          <Grid
            item
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
            as="a"
            href={link}
            target="_blank"
            rel="noreferrer noopener">
            <Typography color="textSecondary" display="inline" sx={{ pr: 1 }} variant="body2">
              Website
            </Typography>
            <OpenInNewIcon color="action" />
          </Grid>
        </Grid>
      </Box>
    </Card>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired
}

export default ProjectCard
