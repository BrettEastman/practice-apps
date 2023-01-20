import React from 'react';

const WordListItem = ({ word, definition }) => {
  // console.log('word: ', word);
  // console.log('definition: ', definition);
  return (
    <div>
      <li>{`${word}: ${definition}`}</li>
    </div>
  );
};

export default WordListItem;