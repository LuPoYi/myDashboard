import React, { useState } from 'react'
import { Card, CardHeader, CardContent, Divider, Grid, TextField } from '@material-ui/core'

function CamelCase() {
  const [text, setText] = useState('')
  const [camelCase, setCamelCase] = useState('')
  const [kebabCase, setKebabCase] = useState('')
  const [titleCase, setTitleCase] = useState('')
  const [snakeCase, setSnakeCase] = useState('')
  const [upperCase, setUpperCase] = useState('')
  const [lowerCase, setLowerCase] = useState('')

  const handleTextChange = (e) => {
    setText(e.target.value)
    setCamelCase(toCamelCase(e.target.value))
    setKebabCase(toKebabCase(e.target.value))
    setTitleCase(toTitleCase(e.target.value))
    setSnakeCase(toSnakeCase(e.target.value))
    setUpperCase(e.target.value.toUpperCase())
    setLowerCase(e.target.value.toLowerCase())
  }

  const handleCamelCaseChange = (e) => setCamelCase(e.target.value)
  const handleKebabCaseChange = (e) => setKebabCase(e.target.value)
  const handleTitleCaseChange = (e) => setTitleCase(e.target.value)
  const handleSnakeCaseChange = (e) => setSnakeCase(e.target.value)
  const handleUpperCaseChange = (e) => setUpperCase(e.target.value)
  const handleLowerCaseChange = (e) => setLowerCase(e.target.value)

  function toCamelCase(str) {
    let ans = ''
    str.split(' ').forEach((element, index) => {
      if (element.length > 0) {
        let item = element.toLowerCase()
        ans += index === 0 ? item : item[0].toUpperCase() + item.slice(1)
      }
    })
    return ans
  }

  function toKebabCase(str) {
    let ans = ''
    str.split(' ').forEach((element, index) => {
      if (element.length > 0) {
        let item = element.toLowerCase()
        ans += index === 0 ? item : '-' + item
      }
    })
    return ans
  }

  function toTitleCase(str) {
    let ans = ''
    str.split(' ').forEach((element, index) => {
      if (element.length > 0) {
        let item = element[0].toUpperCase() + element.slice(1).toLowerCase()
        ans += index === 0 ? item : ' ' + item
      }
    })
    return ans
  }

  function toSnakeCase(str) {
    let ans = ''
    str.split(' ').forEach((element, index) => {
      if (element.length > 0) {
        let item = element[0].toUpperCase() + element.slice(1).toLowerCase()
        ans += index === 0 ? item : '_' + item
      }
    })
    return ans
  }

  return (
    <Card>
      <CardHeader title="Camel Base Converter" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <TextField
              fullWidth
              label="Text"
              variant="outlined"
              onChange={handleTextChange}
              value={text}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              label="camelCase"
              variant="outlined"
              onChange={handleCamelCaseChange}
              value={camelCase}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              label="KebabCase"
              variant="outlined"
              onChange={handleKebabCaseChange}
              value={kebabCase}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              label="Title Case"
              variant="outlined"
              onChange={handleTitleCaseChange}
              value={titleCase}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              label="Snake_Case"
              variant="outlined"
              onChange={handleSnakeCaseChange}
              value={snakeCase}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              label="UPPERCASE"
              variant="outlined"
              onChange={handleUpperCaseChange}
              value={upperCase}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              fullWidth
              label="lowercase"
              variant="outlined"
              onChange={handleLowerCaseChange}
              value={lowerCase}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CamelCase
