import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import CharacterDisplay from './components/CharacterDisplay';
import PlanetDisplay from './components/PlanetDisplay';
import ErrorComponent from './components/ErrorComponent';

function App() {
  const [resource, setResource] = useState('');
  const [id, setId] = useState(null);
  const [error, setError] = useState(false);

  const handleSearch = (selectedResource, selectedId) => {
    setResource(selectedResource);
    setId(selectedId);
    setError(false);
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />

      {error ? (
        <ErrorComponent />
      ) : resource === 'people' && id ? (
        <CharacterDisplay id={id} onError={handleError} />
      ) : resource === 'planets' && id ? (
        <PlanetDisplay id={id} onError={handleError} />
      ) : (
        <div>Star Wars API</div>
      )}
    </div>
  );
}

export default App;