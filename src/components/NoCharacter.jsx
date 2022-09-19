const defaultMessage = 'Submit a breaking bad character...'

function NoCharacter({message = defaultMessage}) {
  return <div className="info">{message}</div>
}

export {NoCharacter}
