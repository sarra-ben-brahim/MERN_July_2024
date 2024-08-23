import React, { useState, useEffect } from 'react';

function PlanetDisplay({ id, onError }) {
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/${id}/`)
      .then(response => {
        if (!response.ok) throw new Error('Planet not found');
        return response.json();
      })
      .then(data => setPlanet(data))
      .catch(() => onError());
  }, [id, onError]);

  if (!planet) return <div>Loading...</div>;

  return (
    <div>
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Terrain: {planet.terrain}</p>
      <p>Surface Water: {planet.surface_water}</p>
      <p>Population: {planet.population}</p>
    </div>
  );
}

export default PlanetDisplay;