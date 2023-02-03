import { Typography, Box } from "@mui/material"
import { About, Projects, Skills, Navbar, Contact, Footer } from "./components"


function App() {

  return (
    <>
      <Navbar />

      <About />

      <Typography mt={8} variant='h2' sx={{
          fontFamily: 'Playfair Display',
          fontSize: '36px'
        }}
        id='projetos'
      >
          PROJETOS
      </Typography>

      <Projects />

      <Typography mt={8} variant='h2' sx={{
          fontFamily: 'Playfair Display',
          fontSize: '36px'
        }}
        id='skills'
      >
          SKILLS
      </Typography>

      <Skills />

      <Typography mt={8} variant='h2' sx={{
          fontFamily: 'Playfair Display',
          fontSize: '36px'
        }}
        id='contato'
      >
          CONTATO
      </Typography>

      <Contact />

      <Footer />
    </>
  )
}

export default App
