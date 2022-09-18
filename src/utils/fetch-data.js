function fetchData(path, options = {}) {
  const url = `https://www.breakingbadapi.com/api/${path}`
  return fetch(url, options).then(async res => {
    const data = await res.json()
    if (res.ok) {
      return data[0]
    } else {
      const error = {message: data?.errors?.map(e => e.message).join('\n')}
      return Promise.reject(error)
    }
  })
}

export {fetchData}
