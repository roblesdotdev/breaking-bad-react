import {useEffect, useState} from 'react'
import {CharacterDataView} from './CharacterDataView'
import {CharacterFallback} from './CharacterFallback'

function CharacterInfo({name}) {
  const [character, setCharacter] = useState(null)
  useEffect(() => {
    // HERE FETCH CHARACTER
    setCharacter(null)
    if (name.length > 3) {
      setCharacter({name: `fetched ${name}`, image: `fetched image`})
    }
  }, [name])
  if (!name) {
    return <div>Submit a character</div>
  } else if (!character) {
    return <CharacterFallback name={name} />
  }
  return <CharacterDataView character={character} />
}

export {CharacterInfo}
