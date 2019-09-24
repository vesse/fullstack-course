import React from 'react';

const AddContact = ({ newName, setNewName, newNumber, setNewNumber, submit }) =>
  <div>
    <h3>Add new contact</h3>
    <div>
      name:
      <input value={ newName } onChange={ setNewName } />
    </div>
    <div>
      number:
      <input value={ newNumber } onChange={ setNewNumber } />
    </div>
    <div>
      <button type="submit" onClick={ submit }>add</button>
    </div>
  </div>;

export default AddContact;
