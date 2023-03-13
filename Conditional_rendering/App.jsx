import React from 'react'
import Course from './Conditional_rendering/Course';

const App = () => {
  return (
    <>
    <Course courseDetails={{
      courseName : "JAVA Full Stack",
      courseAvail : true,
      courseDuration : "3 months"
    }}/>
    </>
  )
}

export default App;