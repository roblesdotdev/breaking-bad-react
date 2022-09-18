function CharacterDataView({character}) {
  return (
    <div>
      <div>
        <img width={320} src={character.img} alt={character.name} />
      </div>
      <section>
        <h2>{character.name}</h2>
        <h3>{character.nickname}</h3>
      </section>
      <footer>
        <ul>
          {character.occupation?.map((el, idx) => (
            <li key={idx}>{el}</li>
          ))}
        </ul>
      </footer>
    </div>
  )
}

export {CharacterDataView}
