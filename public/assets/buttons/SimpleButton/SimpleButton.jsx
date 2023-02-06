import React, {useEffect} from 'react'
import Arrow from '../../icons/Arrow.svg'
import AOS from 'aos'

export const SimpleButton = () => {

  useEffect(() => {
    AOS.init({duration: 2500})
  }, [])

  return (
        <button className='simpleButton' data-aos="fade-right">
          <a href="https://github.com/LucasA0?tab=repositories" target='__blank'>
           Meus Projetos
          </a>
            <img src={Arrow} className='simpleButtonArrow' alt="" />
        </button>
  )
}
