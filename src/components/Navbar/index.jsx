import { Stack, Typography } from "@mui/material"
import { useEffect, useState} from "react"
import { menuOptions } from '../../utils/menu'
import { Link } from "react-scroll"

function Navbar() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    window.addEventListener('resize', handleMobileMenu)

    return () => {
      window.removeEventListener('resize', handleMobileMenu)
    }
  }, [window.innerWidth])

  const handleMobileMenu = () => {
    if(window.innerWidth > 541) {
      setIsMobile(false)
    } else {
      setIsMobile(true)
    }
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
            (<img src="../../../public/assets/icons/mobileMenu.png" alt="icone de menu hamburguer" className="mobile-menu"/>)
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
      </Stack>
  )
}

export default Navbar
