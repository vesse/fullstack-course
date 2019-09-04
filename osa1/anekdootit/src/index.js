import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const Button = ({ onClick, label }) => <button onClick={ onClick }>{ label }</button>

const App = ({ anecdotes }) => {
  const [ votes, setVotes ] = useState(new Array(anecdotes.length).fill(0))
  const [ selected, setSelected ] = useState(0)

  const highestVoted = anecdotes[votes.indexOf(Math.max(...votes))]
  const totalVotes = votes.reduce((acc, val) => acc += val, 0)

  const selectRandom = () =>
    setSelected(random(0, anecdotes.length - 1))

  const vote = () => {
    const votesCopy = [ ...votes ]
    votesCopy[selected]++
    setVotes(votesCopy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{ anecdotes[selected] }</p>
      <p>Has { votes[selected] } votes</p>
      <Button onClick={ vote } label='Vote' />
      <Button onClick={ selectRandom } label='Next quote' />
      <h1>Anecdote with most votes</h1>
      { totalVotes > 0 ? highestVoted : <p>No votes yet</p> }
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)