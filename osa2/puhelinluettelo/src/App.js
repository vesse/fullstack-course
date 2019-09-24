import React, { useState } from 'react'

import Person from './components/Person';

const App = () => {
  const [ filter, setFilter ] = useState('');
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

  const visibleContacts = filter.trim() === ''
    ? persons
    : persons.filter((p) => new RegExp(`${filter}`, 'i').test(p.name));

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Filter names: <input value={ filter }
                               onChange={ updateValue(setFilter) } />
        </div>
        <h3>Add new contact</h3>
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
      <h3>Numbers</h3>
      { visibleContacts.map((p) => <Person { ...p } />) }
    </div>
  )

};

export default App;
