import React from 'react';
import { withRouter } from 'react-router';

const PokemonIndexItem = ({ router, pokemon }) => {
  const handleClick = url => e => router.push(url);

  return (
    <li className='pokemon-index-item'
        onClick={handleClick(`/pokemon/${pokemon.id}`)}>
      <img src={pokemon.image_url}
        style={{width: 20, height: 20}}
        alt={`Image of ${pokemon.name}`} />
      {pokemon.name}
    </li>
  );
};

export default withRouter(PokemonIndexItem);
