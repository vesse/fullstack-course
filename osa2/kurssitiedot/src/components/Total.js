import React from 'react'

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((acc, { exercises }) => acc += exercises, 0)

  return (<p><strong>total of { totalExercises } exercises</strong></p>)
}

export default Total
