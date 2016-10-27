import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonIndex from './pokemon_index.jsx';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

export default connect(
  mapStateToProps
)(PokemonIndex);
