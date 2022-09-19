import {useState} from 'react'
import {CharacterForm} from './components/CharacterForm'
import {CharacterInfo} from './components/CharacterInfo'
import {ErrorBoundary} from './components/ErrorBoundary'
import {ErrorFallback} from './components/ErrorFallback'

import './styles/index.css'

function App() {
  const [characterName, setCharacterName] = useState('')

  function handleSubmit(newCharacterName) {
    setCharacterName(newCharacterName)
  }

  return (
    <div className="app">
      <CharacterForm characterName={characterName} onSubmit={handleSubmit} />
      <div className="container content">
        <ErrorBoundary FallbackComponent={ErrorFallback} key={characterName}>
          <CharacterInfo name={characterName} />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
