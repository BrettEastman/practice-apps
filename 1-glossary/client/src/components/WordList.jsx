import React from 'react';
import WordListItem from './WordListItem.jsx';

const WordList = ({ words, handleDelete }) => {

  return (
    <div>
      <ul>
        {words.map((wordObj) => {
          return (
            <WordListItem
              key={wordObj._id}
              id={wordObj._id}
              word={wordObj.word}
              definition={wordObj.definition}
              handleDelete={handleDelete}
            />
        )})}
      </ul>
    </div>
  );
};

export default WordList;