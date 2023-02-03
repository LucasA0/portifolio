import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import { menuOptions } from '../../utils/menu'
import { Link } from 'react-scroll'

function Footer() {
  return (
    <Box mt={8} sx={{background: '#2c2c2c', height: {md: '250px', sm: '300px'}}}>
      <Stack direction='row' justifyContent='space-around' flexWrap='wrap' p={4} >
        <Typography
              sx={{
                  fontFamily: 'PlayFair Display',
                  fontWeight: 400,
                  fontSize: {md: '25px', sm: '18px'},
                  textDecoration: 'underline',
                  opacity: '0.5'
                  }}
              noWrap={true}
              width={{md: '17%', sm: '21%'}}
          >
          LUCAS ARAUJO
        </Typography>
        <Typography sx={{
                  fontFamily: 'PlayFair Display',
                  fontWeight: 400,
                  fontSize: {md: '25px', sm: '18px'},
                  color: '#fff',
                  opacity: '0.5'
                  }}
                  width={{md: '20%', sm: '18%'}}
        >
          Rua Larissa, 71, Duque de Caxias, Rj, Brasil
        </Typography>
        <Stack gap={2}>
          {menuOptions.map(options => (
            <Link
            to={options.href}
            smooth={true}
            offset={0}
            duration={700}
            key={options.id}
          >
            <Typography sx={{
              fontFamily: 'Playfair Display',
              fontWeight: 400,
              fontSize:{ md: '22px', sm: '18px'},
              cursor: 'pointer',
              position: 'relative',
              opacity: '0.7',

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
              {options.name}
            </Typography>
          </Link>
          ))}
        </Stack>
        <Stack gap={2}>
          <Typography
                sx={{
                    fontFamily: 'PlayFair Display',
                    fontWeight: 400,
                    fontSize: '20px',
                    opacity: '0.5'
                    }}
                noWrap={true}
                width={{md: '100%', sm: '100%'}}
            >
            lucascdearaujo444@gmail.com
          </Typography>
          <Typography
                sx={{
                    fontFamily: 'PlayFair Display',
                    fontWeight: 400,
                    fontSize: '20px',
                    opacity: '0.5'
                    }}
                noWrap={true}
                width={{md: '100%', sm: '100%'}}
            >
            2023 Lucas Araujo - All rights reserved
          </Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Footer
