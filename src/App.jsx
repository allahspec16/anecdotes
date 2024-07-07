import { useState } from 'react'
import './App.css'
import Button from './button'
function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ] 
  const [selected, setSelected] = useState(0)
  const handleSelect = () => {
    // const selectedNum = Math.ceil(Math.random() * 8);
    const selectedNum = Math.floor(Math.random() * anecdotes.length);
    setSelected(selectedNum)
  }  
  const [vote, setVote] = useState([0,0,0,0,0,0,0,0])
  const handleVote = () => {
    const newVotes = [...vote]
    newVotes[selected] += 1
    setVote(newVotes)
  } 
  const highestVote = Math.max(...vote)
  const highestVotesIndex = vote.indexOf(highestVote);
  const mostVotedAnecdote = anecdotes[highestVotesIndex];
  // const [vote, setVote] = useState(Array(anecdotes.length).fill(0));
  // const handleVote = () => {
  //   const newVotes = [...vote];
  //   newVotes[selected] += 1;
  //   setVote(newVotes);
  // };
  return (
    <div className='anecdote'>
      <div className='day'>
        <h1>Anecdote of the Day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {vote[selected]} votes</p>
        <Button handleClick = {handleVote} text= 'vote'></Button>
        <Button handleClick = {handleSelect} text = 'next ancedote'></Button>
      </div>
      <div className='vote'>
        <h1>Anecdotes with most votes</h1>
        <p>{mostVotedAnecdote}</p>
        <p>has the highest vote of {highestVote}</p>
      </div>
    </div>
  )
}

export default App
