import React from 'react';

function LanguageSelection({ handleLanguageSelect }) {
  return (
    <div className='lang-selection'>
      <h1>Choose a Language</h1>
      <button onClick={() => handleLanguageSelect('javascript')}>JavaScript</button>
      <button onClick={() => handleLanguageSelect('react')}>React</button>
      <button onClick={() => handleLanguageSelect('mongodb')}>MongoDB</button>
      <button onClick={() => handleLanguageSelect('nodejs')}>Node.js</button>
    </div>
  );
}

export default LanguageSelection;
