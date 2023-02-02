import { Stack, Typography } from "@mui/material"
import { About, Navbar, Projects, Skills } from "./components"

function App() {

  return (
    <>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Navbar />
      </Stack>
      <About />
      <Typography mt={8} variant='h2' sx={{
          fontFamily: 'Playfair Display',
          fontSize: '36px'
        }}>
          PROJETOS
      </Typography>
      <Projects />
      <Typography mt={8} variant='h2' sx={{
          fontFamily: 'Playfair Display',
          fontSize: '36px'
        }}>
          SKILLS
      </Typography>
      <Skills />
      <Typography mt={8} variant='h2' sx={{
          fontFamily: 'Playfair Display',
          fontSize: '36px'
        }}>
          CONTATO
      </Typography>
    </>
  )
}

export default App
