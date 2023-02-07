import { Card, CardMedia, CardContent, Typography, Stack } from "@mui/material"
import AOS from 'aos'
import { useEffect } from "react"

function TechCard({name, thumb}) {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Card
      sx={{
        background: 'none',
        border: '2px solid white',
        width: {md: '360px', sm: '340px'},
        height: '200px'
      }}
      data-aos="flip-left"
    >
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Stack>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontSize: '20px',
              color: 'white',
            }}
          >
            {name}
          </Typography>
        </Stack>
        <CardMedia
          image={thumb}
          sx={{
            height: '100px',
            width: '100px',
            boxShadow: '0px 0px 5px white'
          }}
        />

      </CardContent>
    </Card>
  )
}

export default TechCard
