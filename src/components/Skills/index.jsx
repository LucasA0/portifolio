import { Box, Typography, Stack } from '@mui/material'
import React, {useState, useEffect, useRef} from 'react'
import { technologiesList } from '../../utils/technologies'
import { motion } from 'framer-motion'

function Skills() {
  const carousel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])


  return (
    <Box mt={4} gap={2} sx={{overflowX: 'hidden'}}>
      <motion.div className='carousel' ref={carousel} whileTap={{cursor: 'grabbing'}}>
        <motion.div
          className='inner-carousel'
          style={{width: '3200px'}}
          drag="x"
          dragConstraints={{right: 0, left: -width}}
          initial={{x: 200}}
          animate={{x: 0}}
          transition={{duration: 2}}
        >
          {technologiesList.map((item => (
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
                  Projetos
                </Typography>
              </Stack>
            </Box>
          )))}
        </motion.div>
      </motion.div>
    </Box>
  )
}

export default Skills
