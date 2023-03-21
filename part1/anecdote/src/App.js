import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const DisplayBestAnecdote = ({anecdotes,indexBestAnecdote}) => {
  if (indexBestAnecdote > 0){
  return(
    <p>{anecdotes[indexBestAnecdote]}</p>
  )
  }else{
    return(
      <p>Please vote for your favourite Anecdote</p>
    )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [indexBestAnecdote, setIndexBestAnecdote] = useState(-1)
  const [votes, setVote] = useState(new Array(8).fill(0))
  
  const handleVoteClick = () => {   
    console.log("selected",selected)
    const copy = { ...votes }
    copy[selected] += 1 
    setVote (copy)

    let maxValue = -1
    let maxIndex = -1
    Object.entries(copy).forEach(([key, value]) => {
       if (value>maxValue){
        maxValue = value;
        maxIndex = key
      }
    })
    setIndexBestAnecdote(maxIndex);
    }

  return (
    <div>
      <p>Anecdote of the day</p>
      <p>{anecdotes[selected]}</p>
      <Button handleClick={() => setSelected(Math.floor((Math.random() * 7) + 0))} text="Click to change" />
      <Button handleClick={handleVoteClick}  text="Click to vote" />

      <p>Anecdote with the most vote</p>
      <DisplayBestAnecdote anecdotes={anecdotes} indexBestAnecdote={indexBestAnecdote}/>

    </div>
  )

}

export default App