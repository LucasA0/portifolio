import { Box, Typography, Stack } from '@mui/material'
import { socialsList } from '../../utils/socials'
import { Form } from '../index'

function Contact() {
  return (
    <Box
      mt={10}
    >
      <Stack
        direction='row'
        width='100%'
        justifyContent='space-between'
        sx={{
          flexWrap: {md: 'nowrap', sm: 'nowrap', xs: 'wrap'}
        }}
      >
        <Stack gap={5} width={{md: '50%', sm: '50%', xs: '100%'}} mb={{md: '0px', sm: '0px', xs: '50px'}}>
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
