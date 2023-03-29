import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

import personsService from './services/persons'

import { useState, useEffect } from 'react'
import './index.css'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState('')
  const [className, setClassName] = useState('')

  useEffect(() => {
    //console.log('effect')
    personsService
      .getAll()
      .then(response => {
        //console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  //console.log('render', persons, 'notes')

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    }

    if (!persons.some(person => person.name === newName)) {
      personsService
        .create(nameObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setMessage(`person '${newName}' added`)
          setClassName("allgood")
          setTimeout(() => { setMessage(null) }, 2000)
        })

    } else {
      if (window.confirm(`Do you really want to update ${newName} ?`)) {
        var foundIndex = persons.findIndex(person => person.name === newName);

        personsService
          .update(foundIndex + 1, nameObject)
          .then(response => {
            setPersons(persons.map(person => {
              if (person.name === newName) { person.number = newNumber }
              return person
            }))
            setMessage(`person '${newName}' updated `)
            setClassName("allgood")
            setTimeout(() => { setMessage(null) }, 2000)
          })
          .catch(error => {
            setMessage(`the person '${newName}' was already deleted from server`)
            setClassName("error")
            setTimeout(() => { setMessage(null) }, 2000)
          })


      }
    }
    setNewName('')
    setNewNumber('')
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const numberToShow = newFilter === '' ?
    persons :
    persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const deleto = (id) => {
    const url = `http://localhost:3001/persons/${id}`

    if (window.confirm(`Do you really want to delete ${id} ?`)) {
      personsService
        .personDelete(id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => {
          alert(`the note '${id}' was already deleted from server`)
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  return (
    <div>
      <Notification message={message} className={className} />
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNumberChange={handleNumberChange} handleNameChange={handleNameChange} />
      <h3>Numbers</h3>
      <Persons numberToShow={numberToShow} deleto={deleto} />
    </div>
  )
}

export default App
