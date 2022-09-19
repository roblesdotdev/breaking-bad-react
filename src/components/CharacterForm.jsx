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
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Character Name</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Character name..."
            value={characterName}
            onChange={handleChange}
          />
          <button className="button" type="submit" disabled={!characterName}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export {CharacterForm}
