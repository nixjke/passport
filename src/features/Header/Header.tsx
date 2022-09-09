import { Container as MuiContainer, styled, Typography, Box, Button, Modal, Select, MenuItem } from '@mui/material'
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
  const [open, setOpen] = React.useState<boolean>(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [document, setDocument] = React.useState(0)

  const handleChange = (e: any) => {
    setDocument(e.target.value)
  }

  const uploadHandler = (e: any) => {
    const file = e.target.files[0]

    const formData = new FormData()
    formData.append(file.name, file)

    console.log(formData)

    const options: any = {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001' },
      body: formData,
    }

    fetch('http://5.53.125.246:8007/process', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err))
  }

  return (
    <>
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
              onClick={handleOpen}
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
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'min(1072px, 100%)',
            backgroundColor: '#fff',
            boxShadow: '2px 4px 12px rgba(0, 0, 0, 0.25)',
            borderRadius: '15px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography
            sx={{
              margin: '60px 220px 0px',
              '@media(max-width: 1060px)': {
                margin: '60px 20px 0px',
              },
            }}
            noWrap
            variant="h1"
          >
            Выберите документ
          </Typography>

          <Select
            sx={{
              margin: '50px 220px 0px',
              '@media(max-width: 1060px)': {
                margin: '50px 20px 0px',
              },
            }}
            value={document}
            onChange={handleChange}
            displayEmpty
          >
            <MenuItem value={0}>Item 1</MenuItem>
            <MenuItem value={1}>Item 2</MenuItem>
            <MenuItem value={2}>Item 3</MenuItem>
            <MenuItem value={3}>Item 4</MenuItem>
          </Select>
          <Button
            component="label"
            onChange={uploadHandler}
            sx={{
              color: colors.orange,
              borderRadius: '58px',
              padding: '21px 40px',
              backgroundColor: '#fff',
              border: `1px solid ${colors.orange}`,
              margin: '0 auto',
              mt: '30px',
              mb: '50px',
              width: 'max(260px)',
            }}
          >
            <Typography noWrap sx={{ fontSize: '18px', fontWeight: 700, color: colors.orange }}>
              Загрузить фото
            </Typography>
            <input hidden type="file" />
          </Button>
        </Box>
      </Modal>
    </>
  )
}
