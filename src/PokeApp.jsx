import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Searchbar } from "./components/Searchbar";
import { PokemonGrid } from "./components/PokemonGrid";

import "../public/styles/style.css";

export const PokeApp = () => {
  return (
    <div>
      <Header />
      <Searchbar />
      <PokemonGrid />
      <Footer />
    </div>
  );
};
