import {useEffect, useState} from 'react'
import {CharacterDataView} from './CharacterDataView'
import {CharacterFallback} from './CharacterFallback'
import {NoCharacter} from './NoCharacter'
import {fetchCharacter} from '../utils/fetch-data'

function CharacterInfo({name}) {
  const [character, setCharacter] = useState(null)
  useEffect(() => {
    if (!name) return
    setCharacter(null)
    fetchCharacter(name).then(data => {
      setCharacter(data)
    })
  }, [name])
  if (!name) {
    return <NoCharacter />
  } else if (!character) {
    return <CharacterFallback name={name} />
  }
  return <CharacterDataView character={character} />
}

export {CharacterInfo}
