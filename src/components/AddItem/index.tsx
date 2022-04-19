import React from 'react'
import * as C from './styles'

export const AddItem = () => {
  return (
    <C.Container>
        <div className='image'>➕</div>
        <input
        type="text"
        placeholder='Adicione uma tarefa'
        />
    </C.Container>
  )
}

