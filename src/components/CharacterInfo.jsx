import {useEffect, useState} from 'react'
import {CharacterDataView} from './CharacterDataView'
import {CharacterFallback} from './CharacterFallback'
import {fetchData} from '../utils/fetch-data'

function CharacterInfo({name}) {
  const [character, setCharacter] = useState(null)
  useEffect(() => {
    if (!name) return
    setCharacter(null)
    fetchData(`characters?name=${name}`).then(data => {
      setCharacter(data)
    })
  }, [name])
  if (!name) {
    return <div>Submit a character</div>
  } else if (!character) {
    return <CharacterFallback name={name} />
  }
  return <CharacterDataView character={character} />
}

export {CharacterInfo}
