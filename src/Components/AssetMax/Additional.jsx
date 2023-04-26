import React, { useState } from 'react'
import './AssetMax.css'

const Additional = () => {

  const [boxes, setBoxes] = useState([
    { id: 1, highlighted: false },
    { id: 2, highlighted: false },
    { id: 3, highlighted: false }
  ]);

  const handleBoxClick = (id) => {
    const index = boxes.findIndex(box => box.id === id);
    if (index < boxes.length - 1) {
      const newBoxes = [...boxes];
      newBoxes[index + 1].highlighted = true;
      setBoxes(newBoxes);
    }
  }

  const handleBoxLeave = (id) => {
    const index = boxes.findIndex(box => box.id === id);
    if (index < boxes.length - 1) {
      const newBoxes = [...boxes];
      newBoxes[index + 1].highlighted = false;
      setBoxes(newBoxes);
    }
  }
  return (
    <>
    <div className='ast'>Additional</div>

     <div id="container">
      {boxes.map(box => (
        <div
          key={box.id}
          className={`box${box.highlighted ? ' highlight' : ''}`}
          onClick={() => handleBoxClick(box.id)}
          onMouseLeave={() => handleBoxLeave(box.id)}
        />
      ))}
    </div>
    </>
  )
}

export default Additional

