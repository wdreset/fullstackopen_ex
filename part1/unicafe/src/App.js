import { useState } from 'react'

const StatisticLine = ({text,value}) => {
  return(
      <tr><td>{text}</td><td>{value}</td></tr>
  )
}

const Statistics = ({good,neutral,bad}) => {
  let votecount = bad + neutral + good
  let goodscore = good
  let neutralscore = 0
  let badscore = bad * -1
  let allscore = (goodscore + neutralscore + badscore)
  if (votecount === 0){
    return(
      <div>
        No feedback given
      </div>
    )
  }
  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <StatisticLine text="good" value ={good} />
          <StatisticLine text="neutral" value ={neutral} />
          <StatisticLine text="bad" value ={bad} />
          <StatisticLine text="All" value ={votecount} />
          <StatisticLine text="Average" value ={allscore/votecount} />
          <StatisticLine text="Positive" value ={(goodscore*100)/votecount} />
        </tbody>
      </table>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newValue => {
    console.log('setToGood now', newValue)
    setGood(newValue)
  }

  const setToNeutral = newValue => {
    console.log('setToNeutral now', newValue)
    setNeutral(newValue)
  }

  const setToBad = newValue => {
    console.log('setToBad now', newValue)
    setBad(newValue)
  }

  return (
    <div>
      <div>
        <p>Give feedback</p>
        <Button handleClick={() => setToGood(good + 1)} text="Good" />
        <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      </div>
      <div>
        <p>Statistics</p>
        
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    </div>
  )
}

export default App