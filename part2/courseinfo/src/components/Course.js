const Course = ({course}) => {
  return (
    <div>
      <Header header={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}    

const Header = ({header}) => { 
  return (
    <div>
      <h2>{header}</h2>
    </div> 
  )
} 

const Content = ({parts}) => {
  return(
  <div>
    <h3>Content</h3>
    <ul>
        {parts.map(part =>
          <Part part={part} key={part.id}/>
          )} 
        <b>total of {parts.reduce (
          (accumulateur, valeurCourante) => {return accumulateur + valeurCourante.exercises}
          ,0
          ) 
        } exercises </b>
    </ul>
  </div>
  )     
} 

const Part = ({part}) => {
  return (
      <li> {part.name} {part.exercises} </li>
  )
} 

export default Course