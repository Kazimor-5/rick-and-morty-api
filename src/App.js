import { useState, useEffect } from 'react';
import Characters from './Characters';
import Loading from './Loading';
import ReactPaginate from 'react-paginate';

const url = 'https://rickandmortyapi.com/api/character';

const App = () => {
  const [characters, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);

  const getCharacters = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    let characters = await response.json();
    characters = characters.results;
    setCharacter(characters);
    setIsLoading(false);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  if (isLoading) {
    return (
      <main className='container loading-container'>
        <Loading />
      </main>
    );
  }

  const characterPerPage = 8;
  const pagesVisited = pageNumber * characterPerPage;
  const pageCount = Math.ceil(characters.length / characterPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <main className='container'>
      <div className='heading'>
        <h1 className='title head-title'>Rick and Morty</h1>
      </div>
      <Characters
        characters={characters}
        pagesVisited={pagesVisited}
        characterPerPage={characterPerPage}
      />
      <div className='pagination'>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'pagination-btn'}
          previousLinkClassName={'previous-btn'}
          nextLinkClassName={'next-btn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
      </div>
    </main>
  );
};

export default App;
