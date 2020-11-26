import React from 'react';
import './App.css';

const getAllArticles=()=>{
 console.log('i want to get all articles')
}
const App = () => {
  return (
    <div>
      <h1>HELLO WORLD</h1>

      <div> <button onClick={getAllArticles}>Get all articles</button> </div>
    </div>
  );
};
export default App;

