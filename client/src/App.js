import React, { useState } from 'react';

import { Axios } from 'axios';
import './App.css';

function App() {
const [question, setQuestion] = useState('');
const [description, setDescription] = useState('');

const addNewQuestion = () => {
  Axios.post('/api/questions', {
    question: question,
    description: description
  })
  .then(res => {
    console.log(res);
    setQuestion('');
    setDescription('');
  }).catch(err => {
    console.log(err);
  }
  )
}

  return (
    <div className="container">

      <label htmlFor="">Question: </label>
      <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />

      <label htmlFor="">Description: </label>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

      <button onClick={addNewQuestion}>Add Question</button>
    </div>
      )
}


export default App;
