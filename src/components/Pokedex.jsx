import { useState } from "react";
import { searchPokemon } from "../helpers/searchPokemon";
import { Pagination } from "./Pagination";

export const Pokedex = ({ pages, setPages }) => {
  const [inputValue, setInputValue] = useState("");
  const [pokemon, setPokemon] = useState("");

  console.log(pages);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await searchPokemon(inputValue);
    setPokemon(data);
    setInputValue("");
  };

  const lastPage = () => {
    const nextPage = Math.min(pages, 0);
    setPages(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(pages, total);
    setPages(nextPage);
  };

  return (
    <aside className="nes-container is-rounded searchbar-container">
      <div className="nes-container with-title is-rounded search-name">
        <p className="title title-name">Search by name</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Pokemon..."
            className="nes-input searchbar-input"
            onChange={(event) => setInputValue(event.target.value)}
            value={inputValue}
          />
          <button type="submit" className="nes-btn search-btn">
            Search
          </button>
        </form>
      </div>

      <div className="nes-container is-rounded with-title search-type">
        <p className="title title-type">Filter by type</p>
        <div class="nes-select">
          <select required id="default_select">
            <option value="" disabled selected hidden>
              Select...
            </option>
            <option value="">To be</option>
            <option value="1">Not to be</option>
          </select>
        </div>
      </div>

      <div className="nes-container is-rounded with-title search-region">
        <p className="title title-region">Filter by region</p>
        <div class="nes-select">
          <select required id="default_select">
            <option value="" disabled selected hidden>
              Select...
            </option>
            <option value="">To be</option>
            <option value="1">Not to be</option>
          </select>
        </div>
      </div>

      <div className="btn-container">
        <div className="nes-container is-rounded btn-red"></div>
        <div className="nes-container is-rounded btn-blue"></div>
      </div>

      <Pagination
        pages={pages + 1}
        totalPages={100}
        onLeftClick={lastPage}
        onRightClick={nextPage}
      />
    </aside>
  );
};
