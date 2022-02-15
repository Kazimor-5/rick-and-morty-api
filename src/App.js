import { useState, useEffect, useCallback } from 'react';
import Characters from './Characters';
import Loading from './Loading';
import ButtonUp from './ButtonUp';
import ReactPaginate from 'react-paginate';

const url = 'https://rickandmortyapi.com/api/character/?page=';
const searchUrl = 'https://rickandmortyapi.com/api/character/?name=';

const App = () => {
  const [characters, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagesTotal, setPagesTotal] = useState(0);
  const [page, setPage] = useState(1);

  const getCharacters = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(`${url}${page}`);
    const {
      info: { pages },
      results: characters,
    } = await response.json();
    setPagesTotal(pages);
    setCharacter(characters);
    setIsLoading(false);
  }, [page]);

  useEffect(() => {
    getCharacters();
  }, [getCharacters, page]);

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
      <Characters characters={characters} />
      <div className='pagination'>
        <ReactPaginate
          previousLabel='Previous'
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
    </main>
  );
};

export default App;
