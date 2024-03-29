import { Box, Typography} from '@mui/material'
import {TechCard} from '../index'
import { technologiesList } from '../../utils/technologies'

function Skills() {

  return (
    <Box>
      <Typography mt={5} variant='h2' sx={{
          fontFamily: 'Playfair Display',
          fontSize: '36px'
        }}
        id='skills'
      >
       TECNOLOGIAS
      </Typography>

      <Box
        mt={5}
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: {md: '35px', sm: '0px', xs: '30px'},
          rowGap: {sm: '40px'},
          justifyContent: {sm: 'space-between'}
        }}
      >
        {technologiesList.map(tech => (
          <TechCard
            name={tech.name}
            thumb={tech.thumbnail}
            key={tech.id}
            about={tech.about}
          />
        ))}
      </Box>
    </Box>
  )
}

export default Skills
