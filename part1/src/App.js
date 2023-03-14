/* Unfortunately, the entire application is in the same component.
 Refactor the code so that it consists of three new components: 
 Header, Content, and Total. 
 All data still resides in the App component, 
 which passes the necessary data to each component using props. 
 Define the new components in the file App.js.*/

// Header takes care of rendering the name of the course
const Header = (props) => {
  return (
    <div>
      <p>
        {props.course}      
      </p>
    </div>
  )
}

// Content renders the parts and their number of exercises
const Part = (props) => {
  console.log("Part", props.ex.exercices)
  return (
    <div>
      <p>
        {props.ex.name} {props.ex.exercices}
      </p>
    </div> 
  )
}

// Content renders the parts and their number of exercises
const Content = (props) => {
  console.log("content",props)
  return (
    <div>
      <Part ex={props.part[0]} />
      <Part ex={props.part[1]} />
      <Part ex={props.part[2]} />
    </div> 
  )
}

// Total renders the total number of exercises
const Total = (props) => {
  console.log("total", props)
  return (
    <div>
      <p>Number of exercises {props.totalex}</p>
    </div> 
  )
}

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const partData = [
    { name: 'Fundamentals of React', exercices: 4 },
    { name: 'Using props to pass data', exercices: 10 },
    { name: 'State of a component', exercices: 10 },
  ]

  return (
    <div>
      <Header course={course} />
      <Content part={partData}/>
      <Total totalex={partData[0].exercices + partData[1].exercices + partData[2].exercices}/>
    </div>
  )
}


export default App