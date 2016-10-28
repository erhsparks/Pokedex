import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import { requestAllPokemon,
         requestSinglePokemon } from '../actions/pokemon_actions';

const Root = ({ store }) => {
  const requestAllPokemonOnEnter = () => {
    store.dispatch(requestAllPokemon());
  };
  const requestSinglePokemonOnEnter = ({ params }) => {
    store.dispatch(requestSinglePokemon(params.pokemonId));
  };

  return (
    <Provider
      store={store}>
      <Router
        history={hashHistory}>
        <Route
          path='/'
          onEnter={requestAllPokemonOnEnter}
          component={PokemonIndexContainer}>
          <Route
            path='pokemon/:pokemonId'
            onEnter={requestSinglePokemonOnEnter}
            component={PokemonDetailContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
