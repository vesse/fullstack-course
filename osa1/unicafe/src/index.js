import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const percentageFormatter = new Intl.NumberFormat('fi', { style: 'percent', minimumFractionDigits: 1 });

const Button = ({ label, onClick }) => <button onClick={ onClick }>{ label }</button>

const Statistic = ({ label, value }) => <tr><td>{ label }</td><td>{ value }</td></tr>

const GiveFeedback = ({ feedback }) =>
  feedback.map((feedback) => <Button key={ feedback.label } { ...feedback } />)

const Statistics = ({ feedback, totalVotes }) => {
  const average = totalVotes > 0
    ? feedback.map((item) => item.count * item.statisticalValue).reduce((acc, stats) => acc += stats, 0) / totalVotes
    : '-';
  const positivePercentage = percentageFormatter.format(totalVotes > 0
    ? feedback.find((item) => item.statisticalValue === 1).count / totalVotes
    : 0)

  return (
    <table>
      <tbody>
        { feedback.map(({ label, count }) => <Statistic key={ label } label={ label } value={ count } />) }
        <Statistic label='all' value={ totalVotes } />
        <Statistic label='average' value={ average } />
        <Statistic label='positive' value={ positivePercentage } />
      </tbody>
    </table>
  )
}

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const increase = (count, handler) => () => handler(count + 1)

  const feedback = [
    {
      label: 'good',
      count: good,
      statisticalValue: 1,
      onClick: increase(good, setGood)
    },
    {
      label: 'neutral',
      count: neutral,
      statisticalValue: 0,
      onClick: increase(neutral, setNeutral)
    },
    {
      label: 'bad',
      count: bad,
      statisticalValue: -1,
      onClick: increase(bad, setBad)
    }
  ]

  const totalVotes = feedback.reduce((acc, item) => acc += item.count, 0)

  return (
    <div>
      <h1>Give feedback</h1>
      <GiveFeedback feedback={ feedback } />
      <h1>Statistics</h1>
      { totalVotes > 0
          ? <Statistics feedback={ feedback } totalVotes={ totalVotes } />
          : <p>No feedback given</p> }
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)