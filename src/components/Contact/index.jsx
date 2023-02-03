import { Box, Typography, Stack } from '@mui/material'
import { socialsList } from '../../utils/socials'
import { Form } from '../index'

function Contact() {
  return (
    <Box mt={8}>
      <Stack direction='row' justifyContent='space-between' flexWrap='wrap'>
        <Stack gap={5.2}>
          {socialsList.map(social => (
            <a href={social?.link} target='__blank'>
              <Stack direction='row' key={social.id} alignItems='center' gap={3}>
                <img src={social.thumbnail} style={{width: '50px', height: '50px'}}/>

                <Typography sx={{fontFamily: 'Poppins', fontSize: '20px'}}>
                  {social.target}
                </Typography>
              </Stack>
            </a>
          ))}
        </Stack>
        <Form />
      </Stack>
    </Box>
  )
}

export default Contact
