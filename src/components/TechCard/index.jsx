import { Card, CardMedia, CardContent, Typography, Stack } from "@mui/material"
import AOS from 'aos'
import { useEffect } from "react"

function TechCard({name, thumb, about}) {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Card
      sx={{
        background: 'none',
        border: '2px solid white',
        width: {md: '360px', sm: '340px'},
        height: '150px'
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
        <Stack width='40%' gap={2}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontSize: '20px',
              color: 'white',
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              width: '200px',
              color: '#5F5F5F',
            }}
          >
            {about}
          </Typography>
        </Stack>
        <CardMedia
          image={thumb}
          sx={{
            height: '100px',
            width: '100px',
          }}
        />

      </CardContent>
    </Card>
  )
}

export default TechCard
