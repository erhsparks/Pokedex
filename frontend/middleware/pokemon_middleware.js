import {
  fetchAllPokemon,
  fetchSinglePokemon } from '../util/api_util';
import {
  REQUEST_ALL_POKEMON,
  REQUEST_SINGLE_POKEMON,
  receiveAllPokemon,
  receiveSinglePokemon } from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  const receiveAllPokemonSuccess = pokemon => {
    dispatch(receiveAllPokemon(pokemon));
  };
  const receiveSinglePokemonSuccess = pokemon => {
    dispatch(receiveSinglePokemon(pokemon));
  };

  switch (action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess);
      return next(action);
    case REQUEST_SINGLE_POKEMON:
      fetchSinglePokemon(action.pokemonId, receiveSinglePokemonSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
