const Persons = ({numberToShow}) => {
  return (
    <div>
      <ul>
          {numberToShow.map(person => <li key={person.name} >{person.name} {person.number}</li> )}
      </ul>
    </div>
  )
}    

export default Persons