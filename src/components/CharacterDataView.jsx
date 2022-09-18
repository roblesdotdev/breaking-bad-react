function CharacterDataView({character}) {
  return (
    <div>
      <div style={{width: '100%', height: '350px', backgroundColor: 'white'}}>
        {character.img ? (
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            src={character.img}
            alt={character.name}
          />
        ) : null}
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
