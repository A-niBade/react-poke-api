export const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-card-img">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>

      <div>
        <div className="pokemon-details">
          <h3>
            {pokemon.id}# {pokemon.name}
          </h3>
        </div>

        <div className="pokemon-type">
          {pokemon.types.map((type, idx) => (
            <h5 key={idx}>{type.type.name}</h5>
          ))}
        </div>
      </div>
    </div>
  );
};
