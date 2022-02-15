import { useState, useEffect, useCallback } from 'react';
import Characters from './Characters';
import Loading from './Loading';
import ButtonUp from './ButtonUp';
import ReactPaginate from 'react-paginate';
import SearchBar from './SearchBar';

const url = 'https://rickandmortyapi.com/api/character/?page=';
const searchUrl = 'https://rickandmortyapi.com/api/character/?name=';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagesTotal, setPagesTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [searchCharacters, setSearchCharacters] = useState('');
  const [error, setError] = useState(false);

  const findCharacters = useCallback(async () => {
    const response = await fetch(`${searchUrl}${searchCharacters}`);
    const search = await response.json();
    if (!search.error) {
      setCharacters(search.results);
      setError(false);
    } else {
      setError(true);
    }
  }, [searchCharacters]);

  const getCharacters = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(`${url}${page}`);
    const {
      info: { pages },
      results: characters,
    } = await response.json();
    setPagesTotal(pages);
    setCharacters(characters);
    setIsLoading(false);
  }, [page]);

  useEffect(() => {
    getCharacters();
  }, [getCharacters, page]);

  useEffect(() => {
    findCharacters();
  }, [findCharacters, searchCharacters]);

  if (isLoading) {
    return (
      <main className='container loading-container'>
        <Loading />
      </main>
    );
  }

  const changePage = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <main className='container'>
      <div className='heading'>
        <h1 className='title head-title'>Rick and Morty</h1>
      </div>
      <SearchBar
        searchCharacters={searchCharacters}
        setSearchCharacters={setSearchCharacters}
      />
      {error ? (
        <h3>There are no characters found</h3>
      ) : (
        <>
          <Characters characters={characters} />
          <div className='pagination'>
            <ReactPaginate
              previousLabel='Prev'
              nextLabel='Next'
              pageCount={pagesTotal}
              onPageChange={changePage}
              containerClassName='pagination-btn'
              previousLinkClassName='previous-btn'
              nextLinkClassName='next-btn'
              disabledClassName='paginationDisabled'
              activeClassName='paginationActive'
              forcePage={page - 1}
            />
          </div>
          <footer className='footer'>
            <ButtonUp />
          </footer>
        </>
      )}
    </main>
  );
};

export default App;
