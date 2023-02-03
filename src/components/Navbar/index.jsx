import { Stack, Typography } from "@mui/material"
import { menuOptions } from '../../utils/menu'
import { Link } from "react-scroll"

function Navbar() {
  return(
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography
              sx={{
                  fontFamily: 'PlayFair Display',
                  fontWeight: 400, fontSize: '30px',
                  textDecoration: 'underline'
                  }}
              noWrap={true}
              width={{md: '60%', sm: '50%'}}
              id='home'
          >
              LUCAS ARAUJO
          </Typography>
          <Stack direction='row' width={{md: '40%', sm: '50%'}} justifyContent='space-between'>
              {menuOptions.map(item => (
                <Link
                  to={item.href}
                  smooth={true}
                  offset={0}
                  duration={700}
                >
                  <Typography key={item.id} sx={{
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
          </Stack>
      </Stack>
  )
}

export default Navbar
