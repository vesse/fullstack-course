import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>
  (<h1>{props.courseName}</h1>)

const CoursePart = (props) => (<p>{ props.name } { props.exerciseCount }</p>)

const Content = (props) =>
  props.courseParts.map((part) => <CoursePart {...part}/>)

const Total = (props) =>
  <p>Number of exercises { props.courseParts.reduce((acc, part) => acc += part.exerciseCount, 0) }</p>

const App = () => {
  const course = 'Half Stack application development'
  const courseParts = [
    { name: 'Fundamentals of React', exerciseCount: 10 },
    { name: 'Using props to pass data', exerciseCount: 7 },
    { name: 'State of a component', exerciseCount: 14 }
  ];

  return (
    <div>
      <Header courseName={course}/>
      <Content courseParts={courseParts}/>
      <Total courseParts={courseParts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
