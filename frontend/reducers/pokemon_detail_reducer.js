import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const _defaultState = {};

const PokemonDetailReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

export default PokemonDetailReducer;
