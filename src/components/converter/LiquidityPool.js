import { useState } from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  TextField,
  MenuItem,
  Button
} from '@material-ui/core'

const LiquidityPool = () => {
  const initialState = {
    default: {
      apple: 50000,
      potato: 50000,
      k: 2500000000
    },
    current: {
      apple: 50000,
      potato: 50000
    },
    history: []
  }

  const [liquidity, setLiquidity] = useState(initialState)
  const [isPutApple, setIsPutApple] = useState(true)
  const [tradeAmount, setTradeAmount] = useState(20)

  const handleAppleOnChange = (event) => {
    const apple = Number(event.target.value)

    setLiquidity((prevState) => ({
      ...prevState,
      default: {
        ...prevState.default,
        apple: apple,
        k: apple * prevState.default.potato
      },
      current: {
        apple: apple,
        potato: prevState.default.potato
      }
    }))
  }
  const handlePotatoOnChange = (event) => {
    const potato = Number(event.target.value)

    setLiquidity((prevState) => ({
      ...prevState,
      default: {
        ...prevState.default,
        potato: potato,
        k: potato * prevState.default.apple
      },
      current: {
        apple: prevState.default.apple,
        potato: potato
      }
    }))
  }
  const handleTradeActionOnChange = (event) => setIsPutApple(event.target.value === 'apple')
  const handleTradeAmountOnChange = (event) => setTradeAmount(Number(event.target.value))
  const handleTradeOnClick = () => {
    if (tradeAmount <= 0) return

    let newAppleLiquidity, newPotatoLiquidity, receiveAmount
    if (isPutApple) {
      newAppleLiquidity = liquidity.current.apple + tradeAmount
      newPotatoLiquidity = liquidity.default.k / newAppleLiquidity
      receiveAmount = liquidity.current.potato - newPotatoLiquidity
    } else {
      newPotatoLiquidity = liquidity.current.potato + tradeAmount
      newAppleLiquidity = liquidity.default.k / newPotatoLiquidity
      receiveAmount = liquidity.current.apple - newAppleLiquidity
    }

    setLiquidity((prevState) => ({
      ...prevState,
      current: {
        apple: newAppleLiquidity,
        potato: newPotatoLiquidity
      },
      history: [
        ...prevState.history,
        {
          isPutApple: isPutApple,
          amount: tradeAmount,
          receiveAmount: receiveAmount,
          apple: newAppleLiquidity,
          potato: newPotatoLiquidity
        }
      ]
    }))
  }

  const handleResetOnClick = () => setLiquidity(initialState)

  return (
    <Card>
      <CardHeader title="Liquidity Pool - XYK model" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Initial liquidity: Apple"
              variant="outlined"
              value={liquidity.default.apple}
              onChange={handleAppleOnChange}
              disabled={liquidity.history.length > 0}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Initial liquidity: Potato"
              variant="outlined"
              value={liquidity.default.potato}
              onChange={handlePotatoOnChange}
              disabled={liquidity.history.length > 0}
            />
          </Grid>

          <Grid item md={12} xs={12}>
            History:
          </Grid>

          {liquidity.history.map(({ isPutApple, amount, receiveAmount, apple, potato }) => {
            return (
              <>
                <Grid item md={6} xs={12}>
                  <TextField fullWidth label="Apple" variant="outlined" value={apple} />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField fullWidth label="Potato" variant="outlined" value={potato} />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label={`Put ${isPutApple ? 'Apple' : 'Potato'}`}
                    variant="outlined"
                    value={amount}
                    inputProps={{ sx: { color: 'green' } }}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    label={`Receive ${!isPutApple ? 'Apple' : 'Potato'}`}
                    variant="outlined"
                    value={receiveAmount}
                    inputProps={{ sx: { color: 'red' } }}
                  />
                </Grid>
              </>
            )
          })}
          <Divider />
          <Grid item md={3} xs={3}>
            <TextField
              fullWidth
              label="want to trade"
              variant="outlined"
              value={tradeAmount}
              onChange={handleTradeAmountOnChange}
            />
          </Grid>
          <Grid item md={3} xs={3}>
            <TextField
              fullWidth
              select
              label=""
              value={isPutApple ? 'apple' : 'potato'}
              onChange={handleTradeActionOnChange}
              variant="outlined">
              {[
                { value: 'apple', label: 'Apple' },
                { value: 'potato', label: 'Potato' }
              ].map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item md={3} xs={3}>
            <Button
              fullWidth
              color="info"
              variant="contained"
              onClick={handleTradeOnClick}
              sx={{
                height: '100%'
              }}>
              Trade
            </Button>
          </Grid>
          <Grid item md={3} xs={3}>
            <Button
              fullWidth
              color="warning"
              variant="outlined"
              onClick={handleResetOnClick}
              sx={{
                height: '100%'
              }}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default LiquidityPool
