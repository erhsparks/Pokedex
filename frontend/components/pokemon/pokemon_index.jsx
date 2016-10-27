import React from 'react';

export default ({ pokemon }) => (
  <ul>
    {pokemon.map(poke => (
      <li key={poke.id}>
        <img src={poke.image_url}
          style={{width: 20, height: 20}}
          alt={`Image of ${poke.name}`} />
        {poke.name}
      </li>)
    )}
  </ul>
);
