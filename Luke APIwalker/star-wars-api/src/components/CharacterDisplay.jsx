import React, { useState, useEffect } from 'react';

function CharacterDisplay({ id, onError }) {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}/`)
      .then(response => {
        if (!response.ok) throw new Error('Character not found');
        return response.json();
      })
      .then(data => setCharacter(data))
      .catch(() => onError());
  }, [id, onError]);

  if (!character) return <div>Loading...</div>;

  return (
    <div>
      <h2>{character.name}</h2>
      <p>Height: {character.height} cm</p>
      <p>Mass: {character.mass} kg</p>
      <p>Hair Color: {character.hair_color}</p>
      <p>Skin Color: {character.skin_color}</p>
    </div>
  );
}

export default CharacterDisplay;