import {useRef} from 'react'
import {CharacterDataView} from './CharacterDataView'

function CharacterFallback({name}) {
  const characterFallbackData = {
    name: `${name}`,
    nickname: 'loading...',
  }
  return <CharacterDataView character={characterFallbackData} />
}

export {CharacterFallback}
