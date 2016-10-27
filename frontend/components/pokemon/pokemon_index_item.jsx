import React from 'react';

export default ({ pokemon }) => (
  <li>
    <img src={pokemon.image_url}
      style={{width: 20, height: 20}}
      alt={`Image of ${pokemon.name}`} />
    {pokemon.name}
  </li>
);
