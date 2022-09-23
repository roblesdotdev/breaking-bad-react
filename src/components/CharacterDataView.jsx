function CharacterDataView({character}) {
  return (
    <div className="card">
      <div>
        {character.img ? (
          <img className="card-img" src={character.img} alt={character.name} />
        ) : null}
      </div>
      <div className="card-description">
        <h2>{character.name}</h2>
        <h3>{character.nickname}</h3>
        <ul>
          {character.occupation?.map((el, idx) => (
            <li key={idx}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export {CharacterDataView}
