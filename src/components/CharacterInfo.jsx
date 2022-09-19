import {useEffect, useState} from 'react'
import {CharacterDataView} from './CharacterDataView'
import {NoCharacter} from './NoCharacter'
import {ErrorFallback} from './ErrorFallback'
import {fetchCharacter} from '../utils/fetch-data'

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
}

function CharacterInfo({name}) {
  const [state, setState] = useState({
    status: STATUS.IDLE,
    character: null,
    error: null,
  })
  const {status, error, character} = state
  useEffect(() => {
    if (!name) return
    setState({status: STATUS.PENDING})
    fetchCharacter(name).then(
      data => {
        setState({character: data, status: STATUS.RESOLVED})
      },
      err => {
        setState({status: STATUS.REJECTED, error: err})
      },
    )
  }, [name])
  if (status === STATUS.IDLE) {
    return <NoCharacter />
  } else if (status === STATUS.PENDING) {
    return <NoCharacter message={`loading ${name}...`} />
  } else if (status === STATUS.REJECTED) {
    // handle with error boundary
    // throw error
    return <ErrorFallback error={error} />
  } else if (status === STATUS.RESOLVED) {
    return <CharacterDataView character={character} />
  }
  throw Error('This is impossible')
}

export {CharacterInfo}
