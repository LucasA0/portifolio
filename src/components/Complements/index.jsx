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
    <Box mt={8} gap={2} sx={{overflowX: 'hidden'}}>
      <motion.div className='carousel' ref={carousel} whileTap={{cursor: 'grabbing'}}>
        <motion.div
          className='inner-carousel'
          style={{width: '2500px', height: '400px'}}
          drag="x"
          dragConstraints={{right: 0, left: -width}}
        >
          {complementsList.map((item => (
            <Box key={item.id} sx={{position: 'relative', overflowY: 'hidden'}} data-aos="flip-left" data-aos-duration="2000">
              <img src={item.thumbnail} alt="" />
              <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{
                position: 'absolute',
                bottom: '30px',
                left: '19px',
                padding: '20px',
                width: '90%',
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
                <a href={item.link} target='__blank'>
                  <Typography variant='h5' sx={{
                    border: '1px solid #fff',
                    padding: '5px 40px',
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
