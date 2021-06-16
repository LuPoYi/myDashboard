import { Helmet } from 'react-helmet'
import { green } from '@material-ui/core/colors'
import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@material-ui/core'

const Pomodoro = () => (
  <>
    <Helmet>
      <title>Pomodoro | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}>
      <Container maxWidth={false}>
        <Grid item lg={6} sm={6} xl={6} xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
                <Grid item>
                  <Typography color="textSecondary" gutterBottom variant="h6">
                    Pomodoro
                  </Typography>
                  <Typography color="textPrimary" variant="h3">
                    25:00
                  </Typography>
                </Grid>
              </Grid>

              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  pt: 2
                }}>
                <Button color="primary" variant="contained">
                  START
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </Box>
  </>
)

export default Pomodoro
