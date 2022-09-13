import { useState, useEffect } from "react";

import { Header } from "./components/Header";
import { Pokedex } from "./components/Pokedex";
import { PokedexGrid } from "./components/PokedexGrid";
import { getPokemons } from "./helpers/getPokemons";
import { getPokemonData } from "./helpers/getPokemonData";

import "../public/styles/style.css";

export const PokeApp = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState();

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(21, 21 * pages);
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

  useEffect(() => {
    fetchPokemons();
  }, [pages]);

  return (
    <div>
      <Header />

      <div className="main-container">
        <Pokedex pages={pages} setPages={setPages} />
        {loading ? (
          <div>Cargando pokemones</div>
        ) : (
          <PokedexGrid pokemons={pokemons} />
        )}
      </div>
    </div>
  );
};
