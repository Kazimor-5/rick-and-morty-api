import Character from './Character';
import { useState } from 'react';

const Characters = ({ characters }) => {
  const [cardID, setCardID] = useState('');
  const toggleInfo = (id) => {
    if (cardID === id) {
      return setCardID('');
    }
    return setCardID(id);
  };

  return (
    <ul className='characters-list'>
      {characters.map((character) => {
        return (
          <Character
            key={character.id}
            {...character}
            cardID={cardID}
            toggleInfo={toggleInfo}
          />
        );
      })}
    </ul>
  );
};

export default Characters;
