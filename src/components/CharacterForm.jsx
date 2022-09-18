import {useEffect, useState} from 'react'

function CharacterForm({
  characterName: externalCharacterName,
  initialCharacterName = externalCharacterName || '',
  onSubmit,
}) {
  const [characterName, setCharacterName] = useState(initialCharacterName)

  useEffect(() => {
    if (typeof externalCharacterName === 'string') {
      // TODO: derive state
      setCharacterName(externalCharacterName)
    }
  }, [externalCharacterName])

  function handleChange(e) {
    setCharacterName(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(characterName)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Character Name</label>
      <div>
        <input
          type="text"
          placeholder="Character name..."
          value={characterName}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export {CharacterForm}
