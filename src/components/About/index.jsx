import { Box, Typography, Stack } from "@mui/material"
import BigCleanButton from "../../assets/buttons/BigButton/BigCleanButton"
import { SimpleButton } from "../../assets/buttons/SimpleButton/SimpleButton"
import { motion } from "framer-motion"

function About() {
  return (
    <Box mt={8} display='flex' gap={{md: '20%'}} sx={{
        justifyContent: 'space-between',
        width: '100%',
        height: 'auto'
    }}>
        <Box display='flex' flexDirection='column' width='50%' height='auto'>
            <Typography variant="h3"
                sx={{fontFamily: 'Playfair Display',
                width: '100%',
                fontSize: '3rem',
                fontWeight: '400',
                }}
            >
                LUCAS CARNEIRO DE ARAUJO.<br />
                DESENVOLVEDOR FRONTEND
            </Typography>
            <Typography
                sx={{
                    fontFamily: 'poppins',
                    color: '#878686',
                    width: '80%',
                    mt: '1.8rem'
                }}
            >
                Venho estudando há 8 meses e sinto a cada projeto concluído que a profissão de desenvolvedor
                é onde posso demonstrar todo meu potencial e paixão pela área.
                Ainda estou em fase de expansão, buscando cada vez mais me aprimorar e aprender novas tecnologias
                e metodologias. Sempre gostei de desafios e estou aberto a novas experiências.
            </Typography>
            <Box mt={5}>
                <Stack direction='row' gap='3%'>
                    <BigCleanButton />
                    <SimpleButton />
                </Stack>
            </Box>
        </Box>
       <Box height='31.4rem' width='40%'>
            <motion.img initial={{x: 400}} animate={{x: 0}} transition={{duration: 1}} src="../../../src/assets/images/1674477783595 1.png" alt="" />
       </Box>
    </Box>
  )
}

export default About
