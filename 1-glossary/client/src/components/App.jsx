import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddWord from './AddWord.jsx';
import WordList from './WordList.jsx';

export const App = () => {
  const [ words, setWords ] = useState([]);

  const getWords = () => {
    return axios.get('/words')
  };

  const fetchWords = function() {
    getWords()
      .then(({ data }) => { //data is from the getWords axios promise
        setWords(data);
      })
      .catch((err) => {
        console.log(err)
      });
  };

  useEffect(() => {
    fetchWords()
  }, []);

  const postWord = function(obj) {

    axios({
      method: 'post',
      url: '/words',
      data: obj
    })
    .then(function (res) {
      fetchWords()
    })
    .catch(function (err) {
      console.log(err);
    });
  };

  const deleteWord = function(id) {
    axios({
      method: 'delete',
      url: `words/${id}`
    })
    .then(function (res) {
      fetchWords()
    })
    .catch(function (err) {
      console.log(err);
    });
  };

  return (
    <div>
      <div>
        <div><AddWord handleAdd={postWord}/></div>
      </div>
      <div>
        <div><WordList words={words} handleDelete={deleteWord}/></div>
      </div>
    </div>
  );
};

