const Persons = ({numberToShow,deleto}) => {
  
  return (
    <div>
      <ul>
          {numberToShow.map(person => <li key={person.id} >{person.name} {person.number}  
                                        <button type="button" onClick={() => deleto(person.id)}>
                                          Delete
                                        </button>
                                      </li> )}
      </ul>
    </div>
  )
}    

export default Persons