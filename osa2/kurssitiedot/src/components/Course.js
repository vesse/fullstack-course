import React from 'react'

import Content from './Content'
import Header from './Header'

const Course = ({ course: { name, parts } }) =>
  <div>
    <Header name={ name } />
    <Content parts= { parts } />
  </div>

export default Course
