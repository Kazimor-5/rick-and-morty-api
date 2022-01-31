import { useState, useEffect } from 'react';
import Characters from './Characters';
import Loading from './Loading';

const url = 'https://rickandmortyapi.com/api/character';

const App = () => {
  const [characters, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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

  return (
    <main className='container'>
      <h1 className='title head-title'>Rick and Morty</h1>
      <Characters characters={characters} />
    </main>
  );
};

export default App;
