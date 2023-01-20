import React, { useState } from 'react';

const AddWord = ({ handleAdd }) => {
  const [wordInput, setWordInput] = useState('');
  const [defInput, setDefInput] = useState('');

  return (
    <form>
      <input
        type="text"
        placeholder="Add word here"
        onChange={(e) => setWordInput(e.target.value)}
        value={wordInput}>
      </input>
      <input
        type="text"
        placeholder="Add definition here"
        onChange={(e) => setDefInput(e.target.value)}
        value={defInput}>
      </input>
      <button onClick={() => {handleAdd({word: wordInput, definition: defInput})}}>Add Word</button>
    </form>
  );
};

export default AddWord;