import { Container as MuiContainer, styled, Typography } from '@mui/material'
import React from 'react'

const Container = styled(MuiContainer)(() => ({
  backgroundColor: '#005BD1',
  height: '588px',
}))

export const Header: React.FC = () => {
  return (
    <Container>
      <Typography>Hello world</Typography>
    </Container>
  )
}
