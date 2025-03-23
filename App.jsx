import React, { useState, useRef } from 'react';
import "./App.css"

function MyComponent() {
  const [inputValue, setInputValue] = useState('');
  const [divContent, setDivContent] = useState([]);
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddClick = () => {
    if (inputValue.trim() !== '') {
      setDivContent((prevContent) => {
        const newContent = [...prevContent, inputValue.trim()];
        return newContent;
      });

      setInputValue('');
    }
  };

  const renderDivContent = () => {
    let result = [];
    for (let i = 0; i < divContent.length; i++) {
      result.push(<span key={i}>{divContent[i]}</span>);
      if (i < divContent.length - 1) {
        result.push(<br key={`br-${i}`} />);
      }
    }
    return result;
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <input
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Введите задачу'
        className='inputWork'
      />
      <button onClick={handleAddClick} className='btn'>Add</button>
      <div>{renderDivContent()}</div>
    </div>
  );
}

export default MyComponent;