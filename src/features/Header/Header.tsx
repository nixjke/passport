import { Container as MuiContainer, styled, Typography, Box } from '@mui/material'
import React from 'react'
import { colors } from 'theme'

const ContainerWrapper = styled(MuiContainer)(() => ({
  backgroundColor: colors.blue,
  height: '588px',
  paddingTop: 38
}))

const NavLink = styled(Typography)(() => ({
  backgroundColor: colors.blue,
  display: 'flex',
  color: '#fff',
  position: 'relative',
  cursor: 'pointer',
  '&:after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    right: 0,
    bottom: '-3px',
    width: 0,
    height: '2px',
    backgroundColor: '#fff',
    transition: 'width 500ms',
  },
  '&:hover:after': {
    content: '""',
    width: '100%',
    display: 'block',
    position: 'absolute',
    left: 0,
    bottom: '-3px',
    height: '2px',
    backgroundColor: '#fff',
    transition: 'width 500ms',
  },
}))

export const Header: React.FC = () => {
  return (
    <ContainerWrapper maxWidth={false}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1440px',
          padding: '0 16px',
          margin: '0 auto',
        }}
      >
        <Typography
          sx={{ p: '20px 30px', backgroundColor: '#fff', borderRadius: '20px', fontSize: 26, color: colors.blue }}
          variant="body1"
        >
          Логотип
        </Typography>
        <Box sx={{ display: 'flex', gap: '100px' }}>
          <NavLink variant="body1">О сервисе</NavLink>
          <NavLink>Документы</NavLink>
          <NavLink>Контакты</NavLink>
          <NavLink>Блог</NavLink>
        </Box>
      </Box>
    </ContainerWrapper>
  )
}
