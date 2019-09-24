import React, { useState } from 'react'

import Person from './components/Person';

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');

  const updateValue = (handler) => (e) => handler(e.target.value);

  const addContaact = (e) => {
    e.preventDefault();

    if (!!persons.find((p) => p.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat({
      name: newName,
      number: newNumber
    }));

    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={ newName }
                       onChange={ updateValue(setNewName) } />
        </div>
        <div>
          number: <input value={ newNumber }
                       onChange={ updateValue(setNewNumber) } />
        </div>
        <div>
          <button type="submit" onClick={ addContaact }>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      { persons.map((p) => <Person { ...p } />) }
    </div>
  )

};

export default App;
