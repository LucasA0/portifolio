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
    AOS.init({duration: 2500})
  }, [])

  return (
    <Box mt={8} gap={2} sx={{overflowX: 'hidden'}}>
      <motion.div className='carousel' ref={carousel} whileTap={{cursor: 'grabbing'}}>
        <motion.div
          className='inner-carousel'
          style={{width: '2600px'}}
          drag="x"
          dragConstraints={{right: 0, left: -width}}
          initial={{x: 200}}
          animate={{x: 0}}
          transition={{duration: 2}}
        >
          {complementsList.map((item => (
            <Box key={item.id} sx={{position: 'relative', overflowY: 'hidden'}} data-aos="flip-right">
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
