import { Box, Typography, Stack } from "@mui/material"
import BigCleanButton from "../../../public/assets/buttons/BigButton/BigCleanButton"
import { SimpleButton } from "../../../public/assets/buttons/SimpleButton/SimpleButton"
import { useEffect, useState} from "react"
import AOS from 'aos'

function About() {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [window.innerWidth])

  useEffect(() => {
    AOS.init()
  }, [])

  const handleResize = () => {
    if(window.innerWidth > 821) {
      setIsDesktop(true)
    } else {
      setIsDesktop(false)
    }
  }

  return (
    <Box mt={8} display='flex' gap={{md: '20%'}} sx={{
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1600px',
        height: 'auto',
        flexWrap: {sm: 'wrap', xs: 'wrap', md: 'nowrap'},
    }}>
        <Box
          display='flex'
          flexDirection='column'
          height='auto'
          sx={{
            width: {md: '60%', sm: '100%'},
            marginBottom: {sm: '40px', md: '0px'}
          }}
        >
            <Typography variant="h3"
                sx={{fontFamily: 'Playfair Display',
                width: '98%',
                fontSize: {md: '52px', sm: '50px'},
                fontWeight: '400',
                }}

                data-aos="fade-right"
                data-aos-duration="2000"
            >
                LUCAS CARNEIRO DE ARAUJO. <br />
                DESENVOLVEDOR FRONTEND
            </Typography>
            <Typography
                sx={{
                    fontFamily: 'poppins',
                    opacity: '0.5',
                    color: '#808080',
                    width: {md: '95%', sm: '95%'},
                    mt: '37px',
                    fontSize: {md: '20px', sm: '24px'},
                    lineHeight: {md: '26px', sm: '35px'}
                }}

                data-aos="fade-right"
            >
                Venho estudando há 8 meses e sinto a cada projeto concluído que a profissão de desenvolvedor
                é onde posso demonstrar todo meu potencial e paixão pela área.
                Ainda estou em fase de expansão, buscando cada vez mais me aprimorar e aprender novas tecnologias
                e metodologias. Sempre gostei de desafios e estou aberto a novas experiências.
            </Typography>
            <Box mt={5}>
                <Stack direction='row' gap='2%'>
                    <BigCleanButton />
                    <SimpleButton />
                </Stack>
            </Box>
        </Box>
       <Box
          height={{md: 'auto'}}
          width={{md: '60%', sm: '98%'}}
        >
            {
              isDesktop
              ?
              (<img data-aos="flip-right" className="main-image" data-aos-duration="2000" src="./assets/images/Lucas Araujo.jpeg" alt="foto de perfil" />)
              :
              (<img data-aos="flip-right" className="main-image" data-aos-duration="2000" src="./assets/images/LucasAraujo02.png" alt="foto de perfil" />)
            }
       </Box>
    </Box>
  )
}

export default About
