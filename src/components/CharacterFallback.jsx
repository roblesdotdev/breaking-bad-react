import {useRef} from 'react'
import {CharacterDataView} from './CharacterDataView'

function CharacterFallback({name}) {
  const initialName = useRef(name).current
  const characterFallbackData = {
    name: `Fallback ${initialName}`,
    image: 'fallback image',
  }
  return <CharacterDataView character={characterFallbackData} />
}

export {CharacterFallback}
