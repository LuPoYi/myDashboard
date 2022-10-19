import { useEffect, useState } from 'react'

import { Card, CardContent, CardHeader, Divider, Grid, TextField } from '@material-ui/core'

const DepositAndBorrow = () => {
  const [data, setData] = useState({
    depositAmount: 10000,
    depositRewardAPY: 5, // 收入(%)
    depositReward: 500,
    depositTotal: 10500,
    loanToValue: 75, // 可借的%數
    borrowAmount: 7500,
    borrowFeeAPY: 5, // 要支付的利息%
    borrowFee: 375,
    borrowRewardAPY: 10, // 收入(%)
    borrowReward: 750,
    borrowTotal: 7875,
    finalAPY: 8.76,
    finalBalance: 10875
  })
  const {
    depositAmount,
    depositRewardAPY,
    depositReward,
    depositTotal,
    loanToValue,
    borrowAmount,
    borrowFeeAPY,
    borrowFee,
    borrowTotal,
    borrowRewardAPY,
    borrowReward,
    finalAPY,
    finalBalance
  } = data

  useEffect(() => {
    const depositReward = (depositAmount * depositRewardAPY) / 100
    const depositTotal = depositAmount + depositReward
    const borrowAmount = (depositAmount * loanToValue) / 100

    setData({
      ...data,
      depositReward,
      depositTotal,
      borrowAmount
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [depositAmount, depositRewardAPY, loanToValue])

  useEffect(() => {
    const borrowFee = (borrowAmount * borrowFeeAPY) / 100
    const borrowReward = (borrowAmount * borrowRewardAPY) / 100
    const borrowTotal = borrowAmount - borrowFee + borrowReward
    const finalAPY = ((depositReward - borrowFee + borrowReward) / depositAmount) * 100
    const finalBalance = depositAmount + depositReward - borrowFee + borrowReward

    setData({
      ...data,
      borrowFee,
      borrowTotal,
      borrowReward,
      finalAPY,
      finalBalance
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [borrowAmount, borrowFeeAPY, borrowRewardAPY])

  const handleDepositAmountOnChange = (event) =>
    setData({ ...data, depositAmount: Number(event.target.value) })

  const handledepositRewardAPYOnChange = (event) =>
    setData({ ...data, depositRewardAPY: Number(event.target.value) })

  const handleborrowFeeAPYOnChange = (event) =>
    setData({ ...data, borrowFeeAPY: Number(event.target.value) })

  const handleborrowRewardAPYOnChange = (event) =>
    setData({ ...data, borrowRewardAPY: Number(event.target.value) })

  return (
    <Card>
      <CardHeader title="Deposit And Borrow - aave" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              label="Deposit"
              variant="outlined"
              value={depositAmount}
              onChange={handleDepositAmountOnChange}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              label="APY(%)"
              variant="outlined"
              value={depositRewardAPY}
              onChange={handledepositRewardAPYOnChange}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField fullWidth label="Reward" variant="outlined" value={depositReward} disabled />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField fullWidth label="Total" variant="outlined" value={depositTotal} disabled />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              label="Borrow Amount"
              variant="outlined"
              value={borrowAmount}
              disabled
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              label="APY(%)"
              variant="outlined"
              value={borrowFeeAPY}
              onChange={handleborrowFeeAPYOnChange}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField fullWidth label="Fee" variant="outlined" value={borrowFee} disabled />
          </Grid>
          <Grid item md={3} xs={12}></Grid>
          <Grid item md={3} xs={12}></Grid>
          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              label="Borrow Earn APY"
              variant="outlined"
              value={borrowRewardAPY}
              onChange={handleborrowRewardAPYOnChange}
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField fullWidth label="Reward" variant="outlined" value={borrowReward} disabled />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField fullWidth label="Total" variant="outlined" value={borrowTotal} disabled />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField
              fullWidth
              label="Final APY(%)"
              variant="outlined"
              value={finalAPY}
              disabled
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Final Balance"
              variant="outlined"
              value={finalBalance}
              disabled
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <TextField fullWidth label="Loan(%)" variant="outlined" value={loanToValue} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default DepositAndBorrow
