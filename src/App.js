import { useState, useEffect } from 'react';
import Characters from './Characters';

const url = 'https://rickandmortyapi.com/api/character';

const App = () => {
  const [characters, setCharacter] = useState([]);

  const getCharacters = async () => {
    const response = await fetch(url);
    const characters = await response.json();
    console.log(characters);
    setCharacter(characters);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <main className='container'>
      <h1 className='title head-title'>Rick et Morty API</h1>
      {/* <Characters characters={characters} /> */}
    </main>
  );
};

export default App;
