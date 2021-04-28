import React from 'react';
import Welcome from './components/Welcome'
import List from './components/List.js'
import Greetings from'./components/Greetings'


function App() {
  return (
    <>
    <Greetings firstName='Adrian'/>
    <Welcome/>
  <List/>
  <p>YOU ARE NOT ALLOWED TO QUIT</p>
  </>
  );
}

export default App;
