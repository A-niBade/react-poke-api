export const PokemonCard = ({ pokemon }) => {
  const style = `pokemon-card ${pokemon.type}`;

  console.log(style);

  return (
    <div className="pokemon-card">
      <div className="pokemon-card-img">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>

      <div className="pokemon-details">
        <div className="pokemon-id">
          <h3>
            {pokemon.id}# {pokemon.name}
          </h3>
        </div>

        <div className="pokemon-type">
          {pokemon.types.map((type, idx) => (
            <div key={idx} className={`pokemon-type-name ${type.type.name}`}>
              {type.type.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
