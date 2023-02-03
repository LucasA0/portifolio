import React from 'react'
import Arrow from '../../icons/Arrow.svg'

export const SimpleButton = () => {
  return (
        <button className='simpleButton'>
           Meus Projetos
            <img src={Arrow} className='simpleButtonArrow' alt="" />
        </button>
  )
}
