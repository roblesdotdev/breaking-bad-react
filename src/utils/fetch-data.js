function fetchCharacter(name, options = {}) {
  const url = `https://www.breakingbadapi.com/api/characters?name=${name}`
  return fetch(url, options).then(async res => {
    const data = await res.json()
    if (res.ok) {
      if (data.length > 0) {
        return data[0]
      } else {
        return Promise.reject(new Error(`No character with name ${name}`))
      }
    } else {
      const error = {message: data?.errors?.map(e => e.message).join('\n')}
      return Promise.reject(error)
    }
  })
}

export {fetchCharacter}
