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
        {props.course.name}      
      </p>
    </div>
  )
}

// Content renders the parts and their number of exercises 
const Part = (props) => {
  console.log("Part", props)
  return (
    <div>
      <p>
      {props.part.name} {props.part.exercises}
      </p>
    </div> 
  )
}

// Content renders the parts and their number of exercises
const Content = (props) => {
  console.log("content",props)
  return (
    <div>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div> 
  )
}

// Total renders the total number of exercises
const Total = (props) => {
  console.log("total", props)
  return (
    <div>
      <p>Number of exercises {props.course.parts[0].exercises + 
      props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    </div> 
  )
}

const App = () => {
  // const-definitions
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}


export default App