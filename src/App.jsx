import { Stack } from "@mui/material"
import { About, Navbar, Projects } from "./components"

function App() {

  return (
    <>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Navbar />
      </Stack>
      <About />
      <Projects />
    </>
  )
}

export default App
