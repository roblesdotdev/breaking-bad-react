import {useState} from 'react'
import {CharacterForm} from './components/CharacterForm'
import {CharacterInfo} from './components/CharacterInfo'

function App() {
  const [characterName, setCharacterName] = useState('')

  function handleSubmit(newCharacterName) {
    setCharacterName(newCharacterName)
  }

  return (
    <div>
      <CharacterForm characterName={characterName} onSubmit={handleSubmit} />
      <CharacterInfo name={characterName} />
    </div>
  )
}

export default App
