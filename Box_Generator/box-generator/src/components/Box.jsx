import React from 'react';

const Box = ({ color, size }) => {
  const boxStyle = {
    backgroundColor: color,
    width: `${size}px`,
    height: `${size}px`,
    display: 'inline-block',
    margin: '10px'
  };

  return <div style={boxStyle}></div>;
};

export default Box;