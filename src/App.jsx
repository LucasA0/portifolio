import { Typography, Container } from "@mui/material"
import { useEffect } from "react"
import { About, Projects, Skills, Navbar, Contact, Footer } from "./components"
import AOS from "aos"
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init({duration: 2500});
  }, [])

  return (
    <Container sx={{pt: 3, mx: 'auto'}}>
      <Navbar />

      <About />

      <Typography mt={5} variant='h2' sx={{
          fontFamily: 'Playfair Display',
          fontSize: '36px'
        }}
        id='projetos'
      >
          PROJETOS
      </Typography>

      <Projects />

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
    </Container>
  )
}

export default App
