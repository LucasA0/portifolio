import { Typography, Stack } from '@mui/material'
import React from 'react'
import { menuOptions } from '../../utils/menu'

const Navbar = () => {
  return (
    <>
        <Typography
            sx={{
                fontFamily: 'PlayFair Display',
                fontWeight: 400, fontSize: '30px',
                textDecoration: 'underline'
                }}
            noWrap={true}
            width='60%'
        >
            LUCAS ARAUJO
        </Typography>
        <Stack direction='row' width='40%' justifyContent='space-between'>
            {menuOptions.map(item => (
            <Typography key={item.id} sx={{
                fontFamily: 'PlayFair Display',
                fontWeight: 400, fontSize: '22px',
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
                {item.name}
            </Typography>
            ))}
        </Stack>
    </>
  )
}

export default Navbar
