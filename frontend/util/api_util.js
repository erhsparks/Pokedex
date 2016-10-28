export const fetchAllPokemon = success => {
  $.ajax({
    method: 'GET',
    url: 'api/pokemon',
    success
  });
};

export const fetchSinglePokemon = (pokemonId, success) => {
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${pokemonId}`,
    success
  });
};
