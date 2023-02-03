import React from 'react'
import {Box, Stack, Typography} from '@mui/material'

function Form() {
  return (
    <form action="">
      <Stack gap={3.5}>
        <Stack direction='row' justifyContent='space-between' position='relative'>
          <input type="text" name='nome' placeholder='Nome' className='input-name' required/>
          <input type="tel" name='telefone' placeholder='Telefone' className='input-tel'/>
        </Stack>
        <input type="email" placeholder='Email' className='input-mail' required/>
        <input type="text" placeholder='Assunto' className='input-subject' required/>
        <textarea name="mensagem" placeholder='Mensagem' className='input-message' maxLength={200} />
        <button type="submit" className='button-submit'>Enviar</button>
      </Stack>
    </form>
  )
}

export default Form
