import React, { useState } from 'react'

import Persons from './components/Persons';
import Filter from './components/Filter';
import AddContact from './components/AddContact';

const App = () => {
  const [ filter, setFilter ] = useState('');
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
    { name: 'Osman Käämi', number: '040-1123243' }
  ]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');

  const updateValue = (handler) => (e) => handler(e.target.value);

  const addContact = (e) => {
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
        <Filter handler={ updateValue(setFilter) } value={ filter } />

        <AddContact
          newName={ newName }
          setNewName={ updateValue(setNewName) }
          newNumber={ newNumber }
          setNewNumber={ updateValue(setNewNumber) }
          submit={ addContact } />
      </form>

      <Persons contacts={ visibleContacts } />
    </div>
  )

};

export default App;
