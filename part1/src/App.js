/* Unfortunately, the entire application is in the same component.
 Refactor the code so that it consists of three new components: 
 Header, Content, and Total. 
 All data still resides in the App component, 
 which passes the necessary data to each component using props. 
 Define the new components in the file App.js.*/

// Header takes care of rendering the name of the course
const Header = (props) => {
  console.log(props) 
  return (
    <div>
      <p>
        {props.course}      
      </p>
    </div>
  )
}

// Content renders the parts and their number of exercises
const Content = (props) => {
  console.log(props) 
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div> 
  )
}

// Total renders the total number of exercises
const Total = (props) => {
  console.log(props) 
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div> 
  )
}

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}
       exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}  />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}


export default App