import React from 'react';
import HeticContext from './HeticContext.js'
import './App.css';

function App() {
  return (
    <HeticContext.Provider value="[{ name:'Priou' }, { name:'Masselot' }]">
      <ListContainer />
    </HeticContext.Provider>
  );
}

export default App;
