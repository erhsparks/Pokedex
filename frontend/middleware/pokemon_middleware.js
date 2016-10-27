import { fetchAllPokemon } from '../util/api_util';
import { REQUEST_ALL_POKEMON,
         receiveAllPokemon } from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {
const receiveAllPokemonSuccess = pokemon => dispatch(receiveAllPokemon(pokemon));

  switch (action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
