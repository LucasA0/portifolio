import React, {useEffect} from 'react'
import Arrow from '../../icons/Arrow.svg'
import AOS from 'aos'

export const SimpleButton = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
        <button className='simpleButton' data-aos="fade-right" data-aos-duration="2000">
          <a href="https://github.com/LucasA0?tab=repositories" target='__blank'>
           Meus Projetos
          </a>
            <img src={Arrow} className='simpleButtonArrow' alt="" />
        </button>
  )
}
