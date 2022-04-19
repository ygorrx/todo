import React from 'react'
import * as C from './styles'

type Props = {
    onEnter: (taskName: string) => void
}

export const AddItem = ({onEnter}: Props) => {

  const [inputText, setInputText] = React.useState('');  
  
  const handleKeyUp = (e: React.KeyboardEvent) => {
    if((e.code === 'Enter' || e.code === 'NumpadEnter') && inputText !== '') {
        onEnter(inputText);
    }
  }
  
  
  return (
    <C.Container>
        <div className='image'>➕</div>
        <input
        type="text"
        placeholder='Adicione uma tarefa'
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
        />
    </C.Container>
  )
}

