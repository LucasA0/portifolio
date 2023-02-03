import React from 'react'
import Arrow from '../../icons/Arrow.svg'

export const SimpleButton = () => {
  return (
        <button className='simpleButton'>
          <a href="https://github.com/LucasA0?tab=repositories" target='__blank'>
           Meus Projetos
          </a>
            <img src={Arrow} className='simpleButtonArrow' alt="" />
        </button>
  )
}
