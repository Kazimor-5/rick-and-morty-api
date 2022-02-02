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
            Status:{' '}
            <span className='text'>
              {status}
              <span
                className='pastille'
                style={{
                  backgroundColor:
                    status === 'Alive'
                      ? 'var(--green-dark)'
                      : status === 'unknown'
                      ? 'yellow'
                      : 'var(--red-dark)',
                }}
              ></span>
            </span>
          </p>
          <p className='species'>
            Species: <span className='text'>{species}</span>
          </p>
          <p className='origin'>
            Origin: <span className='text'>{origin.name}</span>
          </p>
          <p className='location'>
            Last known location: <span className='text'>{location.name}</span>
          </p>
          <p className='gender'>
            Gender: <span className='text'>{gender}</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default Character;
