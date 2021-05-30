import { Box, Button } from '@material-ui/core'

const DeFiToolbar = ({ address, connectOnClick, disconnectOnClick }) => (
  <Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
      <Button
        onClick={connectOnClick}
        color="primary"
        variant="contained"
        style={{ 'text-transform': 'initial' }}>
        {address || 'Connect Wallet'}
      </Button>
      {address && (
        <Button
          sx={{ mx: 1 }}
          onClick={disconnectOnClick}
          color="warning"
          variant="contained"
          style={{ 'text-transform': 'initial' }}>
          Disconnect
        </Button>
      )}
    </Box>
  </Box>
)

export default DeFiToolbar
