import { useState } from 'react'
import { Helmet } from 'react-helmet'
import Web3 from 'web3'
import { Box, Container, Grid } from '@material-ui/core'
import DeFiToolbar from 'src/components/defi/DeFiToolbar'

const DeFiLab = () => {
  const [address, setAddress] = useState('')

  const connectOnClick = async () => {
    if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts')
      window.web3 = new Web3(window.ethereum)
      const accounts = await window.web3.eth.getAccounts()
      console.log('accounts', accounts)
      if (accounts?.length > 0) setAddress(accounts[0])
    }
  }

  const disconnectOnClick = () => {}

  return (
    <>
      <Helmet>
        <title>DeFiLab</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}>
        <Container maxWidth="lg">
          <DeFiToolbar
            address={address}
            connectOnClick={connectOnClick}
            disconnectOnClick={disconnectOnClick}
          />
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              DeFi lab - connect metamask - {address}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default DeFiLab

// window.ethereum.on('accountsChanged', function (accounts) {
//   // Time to reload your interface with accounts[0]!
// })

// window.ethereum.on('networkChanged', function (networkId) {
//   // Time to reload your interface with the new networkId
// })

// const updateAccounts = async (newAccounts) => {
//   console.log('Aaaa', newAccounts)
//   const firstUpdate = !(newAccounts && newAccounts[0])
//   if (!firstUpdate) {
//     setAccounts(newAccounts || (await window.web3.eth.getAccounts()))
//     setAddress(newAccounts[0])
//   }
// }

// useEffect(() => {
//   const ethEnabled = async () => {
//     if (window.ethereum) {
//       const accounts = await window.ethereum.send('eth_requestAccounts')
//       window.web3 = new Web3(window.ethereum)
//       if (accounts) await updateAccounts(accounts.result)
//       return true
//     }
//     return false
//   }

//   ethEnabled()
// }, [])
//web3.currentProvider.isConnected()
//await window.web3.eth.getAccounts()
