import { Box, Typography, Stack } from '@mui/material'
import { socialsList } from '../../utils/socials'
import { Form } from '../index'

function Contact() {
  return (
    <Box mt={8}>
      <Stack direction='row' width='100%' justifyContent='space-between' flexWrap='wrap'>
        <Stack gap={5} width='50%'>
          {socialsList.map(social => (
            <a href={social?.link} key={social.id} target='__blank'>
              <Stack direction='row' alignItems='center' gap={3}>
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
