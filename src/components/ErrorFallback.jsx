function ErrorFallback({error}) {
  return (
    <div className="info">
      There was an error <pre className="error">{error.message}</pre>
    </div>
  )
}

export {ErrorFallback}
