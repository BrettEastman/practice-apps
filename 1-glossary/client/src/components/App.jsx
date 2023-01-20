import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddWord from './AddWord.jsx';
import WordList from './WordList.jsx';

export const App = () => {
  const [ words, setWords ] = useState([{_id: 1, word: "karyotype", definition: "the chromosomes of a cell, usually displayed as a systematized arrangement of chromosome pairs in descending order of size."}, {_id: 2, word: "eye-rhyme", definition: "a rhyme involving words that are similar in spelling but not in sound, such as stone and none."}]);

  // const getWords = function() => {
  //   axios.get('/words')
  // }

  // useEffect(() => {
  //   getWords()
  //     .then(({ data }) => {
  //       setWords(data);
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     });
  // }, []);

  // const postWord = function(word, definition) {
  //   axios.post('/words', {
  //     word: word,
  //     definition: definition
  //   })
  //   .then(function (res) {
  //     getWords()
  //       .then(({ data }) => {
  //         setWords(data);
  //       }).catch((err) => {
  //         console.log(err);
  //       });
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //   });
  // }

  return (
    <div>
      <div>
        <div><AddWord/></div>
      </div>
      <div>
        <div><WordList words={words}/></div>
      </div>
    </div>
  );
};

