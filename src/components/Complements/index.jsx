import { Box, Typography, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import { complementsList } from '../../utils/complements'
import AOS from 'aos';

function Complements() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Box>
      <Typography mt={10} variant='h2' sx={{
          fontFamily: 'Playfair Display',
          fontSize: '36px'
        }}
        id='skills'
      >
        COMPLEMENTOS
      </Typography>
    </Box>
  )
}

export default Complements
