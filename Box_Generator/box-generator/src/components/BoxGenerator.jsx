import React, { useState } from 'react';
import Box from './Box';

const BoxGenerator = () => {
  const [boxes, setBoxes] = useState([]);
  const [color, setColor] = useState('');
  const [size, setSize] = useState(100);

  const addBox = (e) => {
    e.preventDefault();
    setBoxes([...boxes, { color, size }]);
    setColor('');
    setSize(100);
  };

  return (
    <div>
      <form onSubmit={addBox}>
        <label>
          Color:
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Enter color"
          />
        </label>
        <label>
          Size:
          <input
            type="number"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            placeholder="Enter size"
          />
        </label>
        <button type="submit">Add</button>
      </form>
      <div>
        {boxes.map((box, index) => (
          <Box key={index} color={box.color} size={box.size} />
        ))}
      </div>
    </div>
  );
};

export default BoxGenerator;