import { PokemonCard } from "./PokemonCard";

export const PokedexGrid = ({ pokemons }) => {
  return (
    <div className="pokedex-container">
      {pokemons.map((pokemon, idx) => (
        <PokemonCard pokemon={pokemon} key={pokemon.name} />
      ))}
    </div>
  );
};
