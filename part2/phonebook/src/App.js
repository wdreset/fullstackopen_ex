import { useState } from 'react'
import Filter from './components/Filter'

import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {       
    event.preventDefault()

    const nameObject = {
      name: newName,
      number : newNumber,
    }
      if(!persons.some(person => person.name === newName)){
        setPersons(persons.concat(nameObject))
      }else{
        alert(`${newName} is already added to phonebook`)
    }
      setNewName('')
      setNewNumber('')
    }
   
    const handleFilterChange = (event) => { 
      setNewFilter(event.target.value)
     }

  const numberToShow = newFilter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  const handleNameChange = (event) => { 
    console.log(event.target.value)    
    setNewName(event.target.value) 
   }
  
   const handleNumberChange = (event) => { 
    console.log(event.target.value)    
    setNewNumber(event.target.value) 
   }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter  newFilter={newFilter} handleFilterChange={handleFilterChange}  />
      <PersonForm addPerson={addPerson} newName={newName}  newNumber={newNumber}  handleNumberChange={handleNumberChange}  handleNameChange={handleNameChange} />
      <h3>Numbers</h3>
      <Persons numberToShow={numberToShow} />
      </div>
  )
}

export default App
