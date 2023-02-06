import React, {useEffect} from 'react'
import AOS from 'aos'

const BigCleanButton = () => {

  useEffect(() => {
    AOS.init({duration: 2500})
  }, [])

  return (
    <button data-aos="fade-right" className='bigCleanButton'>
      <a href="https://drive.google.com/file/d/1ttdGpm7-KsMyxRkDyfmtRXev_tyvnvPW/view?usp=share_link" target='__blank'>
        Meu Currículo
      </a>
    </button>
  )
}

export default BigCleanButton
