import React from 'react';
import {Router} from '@reach/router';
import './App.css';
import Main from './views/Main';
import NewPet from './views/NewPet';
import PetDetail from './views/PetDetail';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Router>
        <Main path="/" />
        <NewPet path="/pet/new" />
        <PetDetail path="/pet/:id" />
        <Update path="/pet/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
