import React from 'react';

const Filter = ({ handler, value }) =>
  <div>
    Filter names:
    <input value={ value } onChange={ handler } />
  </div>;

export default Filter;
