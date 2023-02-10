import { Stack, Typography, Box } from "@mui/material"
import { useEffect, useState} from "react"
import { menuOptions } from '../../utils/menu'
import { Link } from "react-scroll"
import MenuModal from "../MenuModal";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', handleMobileMenu)

    return () => {
      window.removeEventListener('resize', handleMobileMenu)
    }
  }, [window.innerWidth])

  const handleMobileMenu = () => {
    if(window.innerWidth < 541) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  const handleIsMenuOpen = () => {
    console.log(isMenuOpen)
    setIsMenuOpen(!isMenuOpen)
  }

  return(
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography
              sx={{
                  fontFamily: 'PlayFair Display',
                  fontWeight: 400,
                  fontSize: {md: '30px', sm: '24px'},
                  textDecoration: 'underline'
                  }}
              noWrap={true}
              width={{md: '60%', sm: '50%'}}
              id='home'
          >
              LUCAS ARAUJO
          </Typography>
          {
            isMobile
            ?
            (
              <Box onClick={handleIsMenuOpen}>
                <img
                    src="/assets/icons/mobileMenu.png"
                    alt="icone de menu hamburguer"
                    className="mobile-menu"
                  />
              </Box>
              )
            :
            (<Stack direction='row' width={{md: '41%', sm: '46%'}} justifyContent='space-between'>
            {menuOptions.map(item => (
              <Link
                to={item.href}
                smooth={true}
                offset={0}
                duration={700}
                key={item.id}
              >
                <Typography sx={{
                  fontFamily: 'Playfair Display',
                  fontWeight: 400,
                  fontSize:{ md: '22px', sm: '18px'},
                  cursor: 'pointer',
                  position: 'relative',

                  '&:after': {
                      content: '""',
                      position: 'absolute',
                      backgroundColor: '#fff',
                      height: '1px',
                      width: 0,
                      left: 0,
                      bottom: '-5px',
                      transition: '0.4s'
                  },
                  '&:hover:after': {
                      width: '30px'
                  },
                  }}>
                  {item.name}
                </Typography>
              </Link>
            ))}
        </Stack>)
          }
          {isMenuOpen && <MenuModal onClickFn={handleIsMenuOpen}/>}
      </Stack>
  )
}

export default Navbar
