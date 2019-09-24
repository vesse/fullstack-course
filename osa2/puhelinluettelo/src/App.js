import React, { useState } from 'react'

import Person from './components/Person';

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [ newName, setNewName ] = useState('');

  const updateNewName = (e) => setNewName(e.target.value);

  const addName = (e) => {
    e.preventDefault();

    if (!!persons.find((p) => p.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat({
      name: newName
    }));

    setNewName('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={ newName }
                       onChange={ updateNewName } />
        </div>
        <div>
          <button type="submit" onClick={ addName }>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      { persons.map((p) => <Person { ...p } />) }
    </div>
  )

};

export default App;
