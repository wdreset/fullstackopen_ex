const PersonForm = ({addPerson,newName,newNumber,handleNumberChange,handleNameChange}) => {
  return (
    <div>
        <form onSubmit={addPerson} >
        Add a new
        <div>name: 
          <input value={newName} onChange={handleNameChange} />
        </div>
        <div>number:
          <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <button type="submit">add</button>
      </form>
    </div>
  )
}    

export default PersonForm