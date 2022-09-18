function CharacterDataView({character}) {
  return (
    <div>
      <div>{character.image}</div>
      <section>
        <h2>{character.name}</h2>
      </section>
    </div>
  )
}

export {CharacterDataView}
