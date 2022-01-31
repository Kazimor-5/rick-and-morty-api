import Character from './Character';

const Characters = ({ characters }) => {
  return (
    <ul className='characters-list'>
      {characters.map((character) => {
        return <Character key={character.id} {...character} />;
      })}
    </ul>
  );
};

export default Characters;
