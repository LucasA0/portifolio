import { Box, Typography, Stack } from '@mui/material'
import React, {useState, useEffect, useRef} from 'react'
import { complementsList } from '../../utils/complements'
import { motion } from 'framer-motion'
import AOS from 'aos';

function Complements() {
  const carousel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Box mt={8} sx={{overflowX: 'hidden'}}>
      <motion.div className='carousel' ref={carousel} whileTap={{cursor: 'grabbing'}}>
        <motion.div
          className='inner-carousel'
          style={{width: '2600px', height: '400px'}}
          drag="x"
          dragConstraints={{right: 0, left: -width}}
        >
          {complementsList.map((item => (
            <Box key={item.id} sx={{position: 'relative'}} data-aos="flip-left" data-aos-duration="2000">
              <img src={item.thumbnail} alt="" />
              <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{
                position: 'absolute',
                bottom: '5px',
                paddingY: '20px',
                width: '100%',

                }}>
                <Typography variant='h4' sx={{
                  fontFamily: 'Playfair Display',
                  letterSpacing: '2px',
                  fontSize: '20px'
                }}>
                  {item.name}
                </Typography>
                <a href={item.link} target='__blank'>
                  <Typography variant='h5' sx={{
                    fontFamily: 'Playfair Display',
                    fontSize: '20px',
                    cursor: 'pointer'
                  }}>
                    Projetos
                  </Typography>
                </a>
              </Stack>
            </Box>
          )))}
        </motion.div>
      </motion.div>
    </Box>
  )
}

export default Complements
