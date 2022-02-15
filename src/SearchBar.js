const SearchBar = ({ searchCharacters, setSearchCharacters }) => {
  return (
    <form className='searchbar'>
      <label className='search-label' htmlFor='research'>
        Search character(s)
      </label>
      <input
        type='text'
        id='research'
        name='research'
        value={searchCharacters}
        onChange={(e) => setSearchCharacters(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
