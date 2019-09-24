import React from 'react';

import Person from './Person';

const Persons = ({ contacts }) =>
  <div>
    <h3>Contacts</h3>
    { contacts.map((p) => <Person { ...p } />) }
  </div>;

export default Persons;
