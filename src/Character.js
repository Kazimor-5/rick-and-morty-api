const Character = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  location,
  image,
  episode: episodes,
}) => {
  return (
    // TODO Quand je clique sur l'élément <li> j'affiche une nouvelle page qui donne les épisodes dans lesquelles le personnage est apparu
    <li key={id} className='card'>
      {/* IMAGES */}
      <div className='img-container'>
        <img src={image} alt={name} className='img' />
      </div>

      {/* TITRE */}
      <div className='content'>
        <div className='title-container'>
          <h4 className='title character-name'>{name}</h4>
        </div>

        {/* INFOS */}
        <div className='infos-container'>
          <p className='status'>
            Status: {status}
            <span
              style={{ backgroundColor: status === 'Alive' ? 'green' : 'red' }}
            ></span>
          </p>
          <p className='species'>Species: {species}</p>
          <p className='origin'>Origin: {origin.name}</p>
          <p className='location'>Last known location: {location.name}</p>
          <p className='gender'>Gender: {gender}</p>
        </div>
      </div>
    </li>
  );
};

export default Character;

/*
status === 'Alive' ? span.style.backgroundColor('green') : span.style.backgroundColor('red')
*/
