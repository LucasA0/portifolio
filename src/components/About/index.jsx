import { Box, Typography, Stack } from "@mui/material"
import BigCleanButton from "../../../public/assets/buttons/BigButton/BigCleanButton"
import { SimpleButton } from "../../../public/assets/buttons/SimpleButton/SimpleButton"
import { useEffect } from "react"
import AOS from 'aos'

function About() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Box mt={8} display='flex' gap={{md: '20%'}} sx={{
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1600px',
        height: 'auto'
    }}>
        <Box display='flex' flexDirection='column' width='60%' height='auto'>
            <Typography variant="h3"
                sx={{fontFamily: 'Playfair Display',
                width: '100%',
                fontSize: {md: '52px', sm: '33px'},
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
                    opacity: '0.7',
                    color: '#828686',
                    width: {md: '95%', sm: '85%'},
                    mt: '2rem',
                    fontSize: {md: '20px', sm: '18px'},
                    lineHeight: '26px'
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
       <Box height={{md: 'auto'}} width={{md: '60%', sm: '50%'}}>
            <img data-aos="flip-right" className="main-image" data-aos-duration="2000" src="./assets/images/Lucas Araujo.jpeg" alt="foto de perfil" />
       </Box>
    </Box>
  )
}

export default About
