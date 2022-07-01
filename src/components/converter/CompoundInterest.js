import { useEffect, useState } from 'react'

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@material-ui/core'

const CompoundInterest = () => {
  const [compoundInterval, setCompoundInterval] = useState('yearly')
  const [initialBalance, setInitialBalance] = useState(1000)
  const [annualPercentageRate, setAnnualPercentageRate] = useState(12)
  const [count, setCount] = useState(0)
  const [year, setYear] = useState(5)
  const [month, setMonth] = useState(0)
  const [day, setDay] = useState(0)
  const [result, setResult] = useState({
    totalInterest: 0,
    annualPercentageYield: 0,
    finalBalance: 0,
    returnOnInvestment: 0
  })

  const handleCompoundIntervalOnChange = (event) => setCompoundInterval(event.target.value)
  const handleInitialBalanceOnChange = (event) => setInitialBalance(event.target.value)
  const handleAnnualPercentageRateOnChange = (event) => setAnnualPercentageRate(event.target.value)
  const handleYearOnChange = (event) => setYear(event.target.value)
  const handleMonthOnChange = (event) => setMonth(event.target.value)
  const handleDayOnChange = (event) => setDay(event.target.value)
  const calculateNextRoundProfit = (amount, rate) => amount * (1 + rate)

  useEffect(() => {
    setCount(0)
    let finalBalance = initialBalance
    let compoundRate = 0
    let compoundCount = 0

    switch (compoundInterval) {
      case 'yearly': {
        compoundRate = annualPercentageRate / 100
        if (year > 0) compoundCount += year
        break
      }

      case 'monthly': {
        compoundRate = annualPercentageRate / 100 / 12
        if (year > 0) compoundCount += year * 12
        if (month > 0) compoundCount += month
        break
      }

      case 'daily': {
        compoundRate = annualPercentageRate / 100 / 365
        if (year > 0) compoundCount += year * 365
        if (month > 0) compoundCount += month * 30
        if (day > 0) compoundCount += day
        break
      }

      case 'hourly': {
        compoundRate = annualPercentageRate / 100 / 365 / 24
        if (year > 0) compoundCount += year * 365 * 24
        if (month > 0) compoundCount += month * 30 * 24
        if (day > 0) compoundCount += day * 24
        break
      }
    }

    for (let i = 0; i < compoundCount; i++) {
      finalBalance = calculateNextRoundProfit(finalBalance, compoundRate)
    }

    const totalInterest = finalBalance - initialBalance
    const annualPercentageYield = (totalInterest / year / initialBalance) * 100
    const returnOnInvestment = (finalBalance / initialBalance) * 100

    setResult({
      totalInterest: totalInterest?.toFixed(2),
      annualPercentageYield: annualPercentageYield?.toFixed(2),
      finalBalance: finalBalance?.toFixed(2),
      returnOnInvestment: returnOnInvestment?.toFixed(2)
    })
    setCount(compoundCount)
  }, [compoundInterval, initialBalance, annualPercentageRate, year, month, day])

  return (
    <Card>
      <CardHeader title="Compound Interest Calculator" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Initial Balance"
              onChange={handleInitialBalanceOnChange}
              value={initialBalance}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Annual Percentage Rate(APR) - XX%"
              onChange={handleAnnualPercentageRateOnChange}
              value={annualPercentageRate}
              variant="outlined"
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              fullWidth
              select
              label="Compound Interval"
              value={compoundInterval}
              onChange={handleCompoundIntervalOnChange}
              variant="outlined">
              {[
                { value: 'hourly', label: 'Hourly' },
                { value: 'daily', label: 'Daily' },
                { value: 'monthly', label: 'Monthly' },
                { value: 'yearly', label: 'Yearly' }
              ].map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField label="Year" variant="outlined" onChange={handleYearOnChange} value={year} />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              label="Month"
              variant="outlined"
              onChange={handleMonthOnChange}
              value={month}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField label="Day" variant="outlined" onChange={handleDayOnChange} value={day} />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 2
        }}>
        <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
          {`Get: ${result?.totalInterest}`}
        </Typography>
        <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
          {`Total: ${result?.finalBalance} (${result?.annualPercentageYield}% APY / ${result?.returnOnInvestment}% ROI) count:${count}`}
        </Typography>
      </Box>
    </Card>
  )
}

export default CompoundInterest
