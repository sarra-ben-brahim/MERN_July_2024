import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [resource, setResource] = useState('people');
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      onSearch(resource, id);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={resource} onChange={(e) => setResource(e.target.value)}>
        <option value="people">People</option>
        <option value="planets">Planets</option>
      </select>
      <input
        type="number"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;