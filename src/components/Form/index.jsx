import React, {useState} from 'react'
import {Stack} from '@mui/material'
import emailjs from '@emailjs/browser'

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault()

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send('service_8488jj1', 'template_x0zm7ae', templateParams, 'uxqaXV2Z_a7JopRFX')
    .then(() => {
      setName('Email Enviado com sucesso!')
      setEmail('Email Enviado com sucesso!')
      setMessage('Email Enviado com sucesso!')
    }, (error) => {
      setName('Falha ao enviar o email!')
      setEmail('Falha ao enviar o email!')
      setMessage('Falha ao enviar o email!')
    })

    setInterval(() => {
      setName('')
      setEmail('')
      setMessage('')
    }, 4000)
  }

  return (
    <form action="" onSubmit={sendEmail}>
      <Stack gap={3.5}>
        <Stack direction='row' justifyContent='space-between' position='relative'>

          <input
            type="text"
            name='nome'
            placeholder='Nome*'
            className='input-name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />

        </Stack>

        <input
          type="email"
          placeholder='Email*'
          className='input-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />

        <textarea
          name="mensagem"
          placeholder='Mensagem'
          className='input-message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={210}
          />

        <button type="submit" className='button-submit'>Enviar</button>
      </Stack>
    </form>
  )
}

export default Form
