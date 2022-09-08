import { createTheme } from '@mui/material'

export const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontWeight: 700,
      fontSize: '54px',
      color: '#051A47',
    },
    h2: {
      fontWeight: 700,
      fontSize: '36px',
      color: '#051A47',
    },
    h3: {
      fontWeight: 700,
      fontSize: '22px',
      color: '#051A47',
    },
    body1: {
      fontWeight: 400,
      fontSize: '22px',
      color: '#051A47',
    },
  },
})

export const colors = {
  indigo: '#051A47',
  blue: '#005BD1',
  orange: '#FDA059',
  yellow: '#F3F462',
  grey: '#DBE4F7',
}
