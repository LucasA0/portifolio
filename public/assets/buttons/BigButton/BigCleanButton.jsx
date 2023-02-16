import React, {useEffect} from 'react'
import AOS from 'aos'

const BigCleanButton = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <button data-aos="fade-right" data-aos-duration="2000" className='bigCleanButton'>
      <a href="https://drive.google.com/file/d/1H0silfeC5PE0SRLuN4LzQEeQPl8ky-Mf/view?usp=share_link" target='__blank'>
        Meu Currículo
      </a>
    </button>
  )
}

export default BigCleanButton
