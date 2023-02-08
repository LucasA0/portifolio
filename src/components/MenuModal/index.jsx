import {Box, Stack, Typography} from '@mui/material'
import AOS from 'aos'
import { useEffect } from 'react'
import { menuOptions } from '../../utils/menu'

function MenuModal() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Box
      sx={{
        width: '50%',
        height: '30%',
        background: '#1a1a1a',
        position: 'absolute',
        right: '14px',
        top: '14px'
      }}
    >
      <Stack
        sx={{
          width: '100%',
          height: '100%',
          gap: '20px'
        }}
      >
        {menuOptions.map((option) => (
          <Link
            to={item.href}
            smooth={true}
            offset={0}
            duration={700}
            key={option.id}
          >
            <Typography sx={{
              fontFamily: 'Playfair Display',
              fontWeight: 400,
              fontSize: '20px',
              cursor: 'pointer',
              position: 'relative',

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
              {option.name}
            </Typography>
          </Link>
        ))}
      </Stack>
    </Box>
  )
}

export default MenuModal
