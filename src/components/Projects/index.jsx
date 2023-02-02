import { Box, Typography, Stack } from '@mui/material'
import React, {useState} from 'react'
import { projectsList } from '../../utils/projects'

function Projects() {
  const [scrollX, setScrollX] = useState(0)

  function handleLeftArrow() {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if(x > 0) {
      x = 0
    }

    setScrollX(x)
  }

  function handleRightArrow() {
    let x = scrollX - 120;
    if(x < -300) {
      x = 0
    }
    setScrollX(x)
  }

  return (
    <Box mt={4} gap={2} sx={{overflowX: 'hidden'}}>
      <Box position='relative'>
        <img src="../../../src/assets/icons/LeftArrow.png" className='leftArrow' onClick={handleLeftArrow} alt="" />
        <img src="../../../src/assets/icons/RightArrow.png" className='rightArrow' onClick={handleRightArrow} alt="" />
        <Stack direction='row' pb={4} gap={4} sx={{
          width: '2360px',
          height: '345px',
          marginLeft: scrollX,
          transition: '0.6s ease-in-out'
        }}>
          {projectsList.map((item => (
            <Box key={item.id} sx={{position: 'relative'}}>
              <img src={item.thumbnail} alt="" />
              <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                padding: '20px',
                width: '95%',
                background: 'rgba(53, 53, 53, 0.4)',
                borderRadius: '4px',
                transition: '0.3s',

                ':hover': {
                  background: 'rgba(53, 53, 53, 0.8)'
                }

                }}>
                <Typography variant='h4' sx={{
                  fontFamily: 'Playfair Display',
                  fontSize: '20px'
                }}>
                  {item.name}
                </Typography>
                <Typography variant='h5' sx={{
                  border: '1px solid #fff',
                  padding: '5px 40px',
                  fontFamily: 'Playfair Display',
                  fontSize: '20px',
                  cursor: 'pointer'
                }}>
                  Demo
                </Typography>
              </Stack>
            </Box>
          )))}
        </Stack>
      </Box>
    </Box>
  )
}

export default Projects
