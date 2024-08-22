import React from 'react';

function ErrorComponent() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>These aren't the droids you're looking for.</h2>
      <img 
        src="https://i.imgur.com/qCRmjdx.jpg" 
        alt="Obi-Wan Kenobi"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
}

export default ErrorComponent;