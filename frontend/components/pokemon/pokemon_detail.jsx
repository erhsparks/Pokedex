import React from 'react';

export default ({ pokemon }) => (
  <section className="pokemon-detail">
    <ul>
      <img
        src={pokemon.image_url}
        style={{width: 215, height: 215}}
        alt={`Image of ${pokemon.name}`} />
      <li>
        <h2>
          {pokemon.name}
        </h2>
      </li>
      <li>
        {`Type: ${pokemon.poke_type}`}
      </li>
      <li>
        {`Attack: ${pokemon.attack}`}
      </li>
      <li>
        {`Defense: ${pokemon.defense}`}
      </li>
      <li>
        {`Moves: "${pokemon.moves.join(", ")}"`}
      </li>
    </ul>
    <section className="toys">
      <h3>
        Toys
      </h3>
      <ul className="toy-list">
        {pokemon.items.map(toy => (
          <li key={toy.id}>
            <img
              src={toy.image_url}
              style={{width: 100}}
              alt={`Image of ${toy.name}`} />
          </li>
        ))}
      </ul>
    </section>
  </section>
);
