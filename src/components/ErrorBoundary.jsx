import React from 'react'

class ErrorBoundary extends React.Component {
  state = {
    error: null,
  }
  static getDerivedStateFromError(err) {
    return {error: err}
  }
  componentDidCatch() {
    console.clear()
  }
  render() {
    const {error} = this.state
    if (error) return <this.props.FallbackComponent error={error} />
    return this.props.children
  }
}

export {ErrorBoundary}
