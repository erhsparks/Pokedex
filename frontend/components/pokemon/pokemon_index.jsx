import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

export default ({ pokemon }) => (
  <ul
    className='pokemon-index'>
    {pokemon.map(poke => (
      <PokemonIndexItem
        key={poke.id}
        pokemon={poke} />
    ))}
  </ul>
);
