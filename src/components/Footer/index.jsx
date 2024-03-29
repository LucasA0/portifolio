import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import { menuOptions } from '../../utils/menu'
import { Link } from 'react-scroll'

function Footer() {
  return (
    <Box
      mt={5}
      sx={{
        background: '#1a1a1a',
        height: {md: '250px', sm: '300px', xs: '260px'},
        flexWrap: {md: 'nowrap', sm: 'nowrap', xs: 'wrap'}
      }}
      display='flex'
      justifyContent='space-between'
      alignItems='center'
    >
      <Stack gap={2} width={{md: '32%', sm: '32%', xs: '40%'}}>

        <Typography sx={{
          fontFamily: 'Playfair Display',
          fontSize: {md: '30px', sm: '24px', xs: '18px'},
          textDecoration: 'underline',
          fontWeight: '500',
          width: 'auto',
          opacity: '0.6'
        }}>
          LUCAS ARAUJO
        </Typography>

        <Typography sx={{
          fontFamily: 'Playfair Display',
          fontSize: {md: '28px', sm: '22px', xs: '18px'},
          fontWeight: '500',
          width: {md: '59%', sm: '80%', xs: '100%'},
          opacity: '0.6'
        }}>
          Rua Larissa, 171, Duque de Caxias, RJ, Brasil
        </Typography>

      </Stack>

      <Stack
        direction='row'
        gap={2}
        flexWrap='wrap'
        alignItems='center'
        width={{md: '32%', sm: '32%', xs: '40%'}}
        sx={{
          justifyContent: {sm: 'center', xs: 'end'}

        }}
      >
        {menuOptions.map(menuItem => (
          <Link
            to={menuItem.href}
            smooth={true}
            offset={0}
            duration={700}
            key={menuItem.id}
          >
            <Typography sx={{
              fontFamily: 'Playfair Display',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: {md: '20px', sm: '18px'},
              position: 'relative',
              opacity: '0.6',
              '&:after': {
                content: '""',
                position: 'absolute',
                backgroundColor: '#fff',
                height: '1px',
                width: 0,
                left: 0,
                bottom: '-5px',
                transition: '0.4s'
            },
            '&:hover:after': {
                width: '30px'
            },
            }}>
              {menuItem.name}
            </Typography>
          </Link>
        ))}
      </Stack>

      <Stack
        gap={2}
        width={{md: '32%', sm: '32%', xs: '100%'}}
        alignItems={{md: 'flex-end', sm: 'flex-end', xs: 'center'}}
        sx={{
          flexDirection: {md: 'column', sx: 'column', xs: 'column'}
        }}
      >

        <Typography sx={{
            fontFamily: 'Playfair Display',
            fontSize: {md: '20px', sm: '16px', xs: '18px'},
            fontWeight: '500',
            opacity: '0.5',
            width: {md: '75%', sm: '100%'}
          }}>
            lucascdearaujo444@gmail.com
        </Typography>

        <Typography sx={{
          fontFamily: 'Playfair Display',
          fontSize: {md: '20px', sm: '20px', xs: '18px'},
          fontWeight: '500',
          opacity: '0.5',
          width: {md: '75%', sm: '100%'}
        }}>
          2023 Lucas Araujo - All rights reserved
        </Typography>

      </Stack>
    </Box>
  )
}

export default Footer
