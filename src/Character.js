const Character = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  location,
  image,
  cardID,
  toggleInfo,
}) => {
  return (
    <li
      key={id}
      className='card'
      onClick={() => {
        toggleInfo(id);
      }}
    >
      {/* IMAGES */}
      <div className='img-container'>
        <img src={image} alt={name} className='img' />
      </div>

      {/* TITRE */}
      <div className='content'>
        <h4
          className={
            name.length >= 16
              ? 'title character-name long-name'
              : 'title character-name'
          }
        >
          {name}
        </h4>

        {/* INFOS */}
        <div
          className={
            cardID === id ? 'infos-container show-infos' : 'infos-container'
          }
        >
          <p className='status'>
            Status: {status}
            <span
              style={{
                backgroundColor:
                  status === 'Alive'
                    ? 'green'
                    : status === 'unknown'
                    ? 'yellow'
                    : 'red',
              }}
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
