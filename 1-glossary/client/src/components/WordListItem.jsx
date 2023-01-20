import React from 'react';

const WordListItem = ({ id, word, definition, handleDelete }) => {

  return (
    <div>
      <li>{`${word}: ${definition}`}
        <button onClick={() => {handleDelete(id)}}>Delete</button>
      </li>
    </div>
  );
};

export default WordListItem;