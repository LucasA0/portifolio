import { Box, Typography, Stack } from "@mui/material"
import BigCleanButton from "../../../public/assets/buttons/BigButton/BigCleanButton"
import { SimpleButton } from "../../../public/assets/buttons/SimpleButton/SimpleButton"
import { useEffect } from "react"
import AOS from 'aos'

function About() {

  useEffect(() => {
    AOS.init({duration: 2500})
  }, [])

  return (
    <Box mt={8} display='flex' gap={{md: '20%'}} sx={{
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1600px',
        height: 'auto'
    }}>
        <Box display='flex' flexDirection='column' width='50%' height='auto'>
            <Typography variant="h3"
                sx={{fontFamily: 'Playfair Display',
                width: '100%',
                fontSize: {md: '48px', sm: '30px'},
                fontWeight: '400',
                }}

                data-aos="fade-right"
            >
                LUCAS CARNEIRO DE ARAUJO. <br />
                DESENVOLVEDOR FRONTEND
            </Typography>
            <Typography
                sx={{
                    fontFamily: 'poppins',
                    color: '#878686',
                    width: '95%',
                    mt: '2rem',
                    fontSize: {md: '16px', sm: '14px'}
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
       <Box height={{md: 'auto'}} width={{md: '50%', sm: '50%'}}>
            <img data-aos="flip-right" src="../../../public/assets/images/1674477783595 1.png" alt="foto de perfil" />
       </Box>
    </Box>
  )
}

export default About
