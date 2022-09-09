import { Container as MuiContainer, styled, Typography, Box, Button } from '@mui/material'
import { borderRadius } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import { colors } from 'theme'

import headerImg from './img.png'

const ContainerWrapper = styled(MuiContainer)(() => ({
  backgroundColor: colors.blue,
  height: '588px',
  paddingTop: 38,
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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '680px', gap: '4px' }}>
          <NavLink>О сервисе</NavLink>
          <NavLink>Документы</NavLink>
          <NavLink>Контакты</NavLink>
          <NavLink>Блог</NavLink>
        </Box>
      </Box>
      <Box
        sx={{
          margin: '80px 140px 0 140px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Typography
            sx={{
              color: '#fff',
              width: 'max(660px)',
            }}
            variant="h1"
          >
            Поможем вам сделать качественное фото для документов
          </Typography>
          <Typography
            sx={{
              color: '#fff',
              fontSize: '28px',
            }}
          >
            с учетом размерных требований
          </Typography>
          <Button
            sx={{
              color: '#000',
              borderRadius: '58px',
              padding: '21px 40px',
              backgroundColor: colors.yellow,
              mt: '30px',
              '&:hover': {
                backgroundColor: '#fff',
              },
            }}
          >
            <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>Загрузить фото</Typography>
          </Button>
        </Box>
        <Box>
          <Box
            sx={{
              width: '578px',
              marginTop: '-66px',
            }}
          >
            <Image placeholder="blur" src={headerImg} alt="" />
          </Box>
        </Box>
      </Box>
    </ContainerWrapper>
  )
}
