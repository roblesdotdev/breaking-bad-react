function ErrorFallback({error}) {
  return (
    <div>
      There was an error{' '}
      <pre style={{whiteSpace: 'pre-wrap'}}>{error.message}</pre>
    </div>
  )
}

export {ErrorFallback}
