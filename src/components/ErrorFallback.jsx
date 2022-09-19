function ErrorFallback({error}) {
  return (
    <div>
      There was an error <pre>{error.message}</pre>
    </div>
  )
}

export {ErrorFallback}
