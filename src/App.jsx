import {useState} from 'react'
import {CharacterForm} from './components/CharacterForm'
import {CharacterInfo} from './components/CharacterInfo'

function App() {
  const [characterName, setCharacterName] = useState('')

  function handleSubmit(newCharacterName) {
    setCharacterName(newCharacterName)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: '8px',
      }}
    >
      <CharacterForm characterName={characterName} onSubmit={handleSubmit} />
      <div
        style={{
          width: '300px',
          height: '470px',
          backgroundColor: '#ccc',
          padding: '16px',
        }}
      >
        <CharacterInfo name={characterName} />
      </div>
    </div>
  )
}

export default App
