import { useState } from "react";
import { searchPokemon } from "../helpers/searchPokemon";

export const Searchbar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await searchPokemon(inputValue);
    console.log(data);
    setInputValue("");
  };

  return (
    <div className="searchbar-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Pokemon..."
          className="nes-input searchbar-input"
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
        />
        <button type="submit" className="nes-btn searchbar-btn">
          Search
        </button>
      </form>
    </div>
  );
};
