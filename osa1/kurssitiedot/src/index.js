import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ name }) =>
  (<h1>{ name }</h1>)

const CoursePart = ({ name, exercises }) => (<p>{ name } { exercises }</p>)

const Content = ({ parts }) =>
  parts.map((part) => <CoursePart { ...part } />)

const Total = ({ parts }) =>
  <p>Number of exercises { parts.reduce((acc, { exercises }) => acc += exercises, 0) }</p>

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={ course.name }/>
      <Content parts={ course.parts }/>
      <Total parts={ course.parts }/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
