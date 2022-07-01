import React, { useReducer } from 'react'
import { Card, CardHeader, CardContent, Divider, Grid, TextField } from '@material-ui/core'

const toCamelCase = (str) => {
  let ans = ''
  str.split(' ').forEach((element, index) => {
    if (element.length > 0) {
      let item = element.toLowerCase()
      ans += index === 0 ? item : item[0].toUpperCase() + item.slice(1)
    }
  })
  return ans
}

const toKebabCase = (str) => {
  let ans = ''
  str.split(' ').forEach((element, index) => {
    if (element.length > 0) {
      let item = element.toLowerCase()
      ans += index === 0 ? item : '-' + item
    }
  })
  return ans
}

const toTitleCase = (str) => {
  let ans = ''
  str.split(' ').forEach((element, index) => {
    if (element.length > 0) {
      let item = element[0].toUpperCase() + element.slice(1).toLowerCase()
      ans += index === 0 ? item : ' ' + item
    }
  })
  return ans
}

const toSnakeCase = (str) => {
  let ans = ''
  str.split(' ').forEach((element, index) => {
    if (element.length > 0) {
      let item = element[0].toUpperCase() + element.slice(1).toLowerCase()
      ans += index === 0 ? item : '_' + item
    }
  })
  return ans
}

const initialState = {
  text: '',
  camelCase: '',
  kebabCase: '',
  titleCase: '',
  snakeCase: '',
  upperCase: '',
  lowerCase: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'text':
      return {
        text: action.payload.text,
        camelCase: toCamelCase(action.payload.text),
        kebabCase: toKebabCase(action.payload.text),
        titleCase: toTitleCase(action.payload.text),
        snakeCase: toSnakeCase(action.payload.text),
        upperCase: action.payload.text.toUpperCase(),
        lowerCase: action.payload.text.toLowerCase()
      }
    case 'camelCase':
      return { ...state, camelCase: action.payload.camelCase }
    case 'kebabCase':
      return { ...state, kebabCase: action.payload.kebabCase }
    case 'titleCase':
      return { ...state, titleCase: action.payload.titleCase }
    case 'snakeCase':
      return { ...state, snakeCase: action.payload.snakeCase }
    case 'upperCase':
      return { ...state, upperCase: action.payload.upperCase }
    case 'lowerCase':
      return { ...state, lowerCase: action.payload.lowerCase }
    default:
      throw new Error(`不存在的 action type: ${action.type}`)
  }
}

function CamelCase() {
  const [states, dispatch] = useReducer(reducer, initialState)
  const { text, camelCase, kebabCase, titleCase, snakeCase, upperCase, lowerCase } = states

  const handleTextChange = (e) => dispatch({ type: 'text', payload: { text: e.target.value } })
  const handleCamelCaseChange = (e) =>
    dispatch({ type: 'camelCase', payload: { camelCase: e.target.value } })
  const handleKebabCaseChange = (e) =>
    dispatch({ type: 'kebabCase', payload: { kebabCase: e.target.value } })
  const handleTitleCaseChange = (e) =>
    dispatch({ type: 'titleCase', payload: { titleCase: e.target.value } })
  const handleSnakeCaseChange = (e) =>
    dispatch({ type: 'snakeCase', payload: { snakeCase: e.target.value } })
  const handleUpperCaseChange = (e) =>
    dispatch({ type: 'upperCase', payload: { upperCase: e.target.value } })
  const handleLowerCaseChange = (e) =>
    dispatch({ type: 'lowerCase', payload: { lowerCase: e.target.value } })

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
