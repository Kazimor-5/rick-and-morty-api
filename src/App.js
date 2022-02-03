import { useState, useEffect } from 'react';
import Characters from './Characters';
import Loading from './Loading';
import ButtonUp from './ButtonUp';

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
      <div className='heading'>
        <h1 className='title head-title'>Rick and Morty</h1>
      </div>
      <Characters characters={characters} />
      <footer className='footer'>
        <ButtonUp />
      </footer>
    </main>
  );
};

export default App;
