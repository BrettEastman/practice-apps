import React from 'react';
import WordListItem from './WordListItem.jsx';

const WordList = ({ words }) => {

  return (
    <div>
      <ul>
        {words.map((wordObj) => {
          return <WordListItem key={wordObj._id} word={wordObj.word} definition={wordObj.definition}/>
        })}
      </ul>
    </div>
  );
};

export default WordList;