export const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-card-img">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div>
        <div>
          <h3>
            <span>{pokemon.id}# </span>
            {pokemon.name}
          </h3>
        </div>
        <div>
          {pokemon.types.map((type, idx) => (
            <div key={idx}>{type.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
