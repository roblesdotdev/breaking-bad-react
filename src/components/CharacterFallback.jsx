import {useRef} from 'react'
import {CharacterDataView} from './CharacterDataView'

function CharacterFallback({name}) {
  const characterFallbackData = {
    name: `Fallback ${name}...`,
    img: 'https://httpstatusdogs.com/img/404.jpg',
  }
  return <CharacterDataView character={characterFallbackData} />
}

export {CharacterFallback}
