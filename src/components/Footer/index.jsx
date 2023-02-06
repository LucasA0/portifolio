import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import { menuOptions } from '../../utils/menu'
import { Link } from 'react-scroll'

function Footer() {
  return (
    <Box
      mt={8}
      sx={{background: '#1c1c1c', height: {md: '250px', sm: '300px'}}}
      display='flex'
      justifyContent='space-between'
      alignItems='center'
    >
      <Stack gap={2} width='32%'>

        <Typography sx={{
          fontFamily: 'Playfair Display',
          fontSize: {md: '30px', sm: '24px'},
          textDecoration: 'underline',
          fontWeight: '500',
          width: 'auto',
          opacity: '0.9'
        }}>
          LUCAS ARAUJO
        </Typography>

        <Typography sx={{
          fontFamily: 'Playfair Display',
          fontSize: {md: '28px', sm: '22px'},
          fontWeight: '500',
          width: {md: '59%', sm: '80%'},
          opacity: '0.6'
        }}>
          Rua Larissa, 171, Duque de Caxias, RJ, Brasil
        </Typography>

      </Stack>

      <Stack direction='row' gap={2} flexWrap='wrap' alignItems='center' width='32%'
        sx={{
          justifyContent: {sm: 'center'}
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

      <Stack gap={2} width='32%' alignItems='flex-end'>

        <Typography sx={{
            fontFamily: 'Playfair Display',
            fontSize: '20px',
            fontWeight: '500',
            opacity: '0.5',
            width: {md: '75%', sm: '100%'}
          }}>
            lucascdearaujo444@gmail.com
        </Typography>

        <Typography sx={{
          fontFamily: 'Playfair Display',
          fontSize: '20px',
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
