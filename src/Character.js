const Character = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  location,
  image,
}) => {
  return (
    <li key={id} className='card'>
      {/* IMAGES */}
      <div className='img-container'>
        <img src={image} alt={name} className='img' />
      </div>

      {/* TITRE */}
      <div className='content'>
        <div className='title-container'>
          <h4 className='character-name'>{name}</h4>
        </div>

        {/* INFOS */}
        <div className='infos-container'>
          <p className='status'>{status}</p>
          <p className='species'>{species}</p>
          <p className='origin'>{origin.name}</p>
          <p className='location'>{location.name}</p>
          <p className='gender'>{gender}</p>
        </div>
      </div>
    </li>
  );
};

export default Character;
