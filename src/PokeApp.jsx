import { useState, useEffect } from "react";

import { Pokedex } from "./components/Pokedex";
import { PokemonGrid } from "./components/PokemonGrid";
import { getPokemons } from "./helpers/getPokemons";
import { getPokemonData } from "./helpers/getPokemonData";

import { searchPokemon } from "./helpers/searchPokemon";

import "../public/styles/style.css";

export const PokeApp = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(0);
  const [total, setTotal] = useState(0);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(21, 21 * pages);
      const totalPages = data.count / 21;
      setTotal(totalPages.toFixed());
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onSearch = async (pokemon) => {
    setLoading(true);
    const result = await searchPokemon(pokemon);
    setPokemons([result]);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, [pages]);

  return (
    <div>
      <div className="poke-container">
        <Pokedex
          pages={pages}
          setPages={setPages}
          total={total}
          onSearch={onSearch}
        />
        {loading ? (
          <div>Cargando pokemones</div>
        ) : (
          <PokemonGrid pokemons={pokemons} />
        )}
      </div>
    </div>
  );
};
