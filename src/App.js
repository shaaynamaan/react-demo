import React from 'react';
import Greet from './Components/greet'
import Welcome from './Components/welcome'
import './App.css'
import {useState} from 'react'
import Form from './form'

function App() {
  const [data,setData]=useState(0)
  function updateData()
  {
    setData(data+1)
  }

  return (
    <div className="App">
      <h1>{data}</h1>
      <Form />
    </div>
  );
}

export default App;
