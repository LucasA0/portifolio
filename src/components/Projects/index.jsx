import { Box, Typography, Stack } from '@mui/material'
import React, {useState, useEffect, useRef} from 'react'
import { projectsList } from '../../utils/projects'
import { motion } from 'framer-motion'
import AOS from 'aos'

function Projects() {
  const carousel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Box mt={5} sx={{overflowX: 'hidden'}}>
      <motion.div className='carousel' ref={carousel} whileTap={{cursor: 'grabbing'}}>
        <motion.div
          className='inner-carousel'
          drag="x"
          style={{width: '2600px', height: '400px'}}
          dragConstraints={{right: 0, left: -width}}
        >
          {projectsList.map((item => (
            <Box key={item.id} sx={{position: 'relative', boxShadow: '4px 4px 10px black'}} data-aos="flip-left" data-aos-duration="2000">
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
                <a href={item.link} target='__blank' style={{textDecoration: 'none', color: '#fff'}}>
                  <Typography variant='h5' sx={{
                    border: '1px solid #fff',
                    padding: '5px 40px',
                    fontFamily: 'Playfair Display',
                    fontSize: '20px',
                    cursor: 'pointer'
                  }}>
                    Demo
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

export default Projects
