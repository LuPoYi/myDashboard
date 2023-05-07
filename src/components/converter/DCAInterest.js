import { useEffect, useState } from 'react'

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography
} from '@material-ui/core'

const DCAInterest = () => {
  const [investPerMonth, setInvestPerMonth] = useState(1000)
  const [annualPercentageRate, setAnnualPercentageRate] = useState(5)
  const [year, setYear] = useState(5)
  const [result, setResult] = useState({
    totalInvest: 0,
    totalInterest: 0,
    finalBalance: 0
  })

  //const handleInitialBalanceOnChange = (event) => setInitialBalance(event.target.value)
  const handleInvestPerMonthOnChange = (event) => setInvestPerMonth(event.target.value)
  const handleAnnualPercentageRateOnChange = (event) => setAnnualPercentageRate(event.target.value)
  const handleYearOnChange = (event) => setYear(event.target.value)

  const calculateNextRoundProfit = (amount, rate) => amount * (1 + rate)

  useEffect(() => {
    let finalBalance = 0
    let ratePerMonth = annualPercentageRate / 100 / 12
    let compoundCount = year * 12
    const investPerMonthNumber = Number(investPerMonth)

    for (let i = 0; i < compoundCount; i++) {
      finalBalance = calculateNextRoundProfit(finalBalance + investPerMonthNumber, ratePerMonth)
    }
    const totalInvest = investPerMonthNumber * compoundCount
    const totalInterest = finalBalance - totalInvest

    setResult({
      totalInvest: totalInvest?.toFixed(2),
      totalInterest: totalInterest?.toFixed(2),
      finalBalance: finalBalance?.toFixed(2)
    })
  }, [annualPercentageRate, year, investPerMonth])

  return (
    <Card>
      <CardHeader title="DCA Interest Calculator" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              label="Per Month"
              onChange={handleInvestPerMonthOnChange}
              value={investPerMonth}
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
          <Grid item md={4} xs={12}>
            <TextField label="Year" variant="outlined" onChange={handleYearOnChange} value={year} />
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
          {`Total Invest: ${result?.totalInvest}`}
          <br />
          {`Total Interest: ${result?.totalInterest}`}
        </Typography>
        <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
          {`Total: ${result?.finalBalance}`}
        </Typography>
      </Box>
    </Card>
  )
}

export default DCAInterest
