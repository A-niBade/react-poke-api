export const Searchbar = () => {
  return (
    <div className="searchbar-container">
      <form className="nes-container is-rounded">
        <input
          placeholder="Search Pokemon..."
          className="nes-container is-rounded"
        />
        <div>
          <button>Search</button>
        </div>
      </form>
    </div>
  );
};
