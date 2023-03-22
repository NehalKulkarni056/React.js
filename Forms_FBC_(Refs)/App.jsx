import React, {useRef} from 'react'

const App = () => {

  let userRef = useRef()

  let passRef = useRef()

  let handleSubmit=(e)=>{
    e.preventDefault();
    let user = userRef.current.value
    let pass = passRef.current.value
    console.log({user, pass});
    }

  return (
    <div>
      <form action="">
        <label htmlFor="username">User Name : </label> <br />
        <input type="text" id='username' ref={userRef}/> <br />
        <label htmlFor="password">Password</label> <br />
        <input type="password" id='password' ref={passRef}/> <br />
        <button onClick={handleSubmit}>Submit</button>
          </form>
    </div>
  )
}

export default App