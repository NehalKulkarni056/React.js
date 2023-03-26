import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class LogIn extends Component {
    
    constructor(){
        super()
        this.state = {
            username : "",
            password : ""
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const {username,password} = this.state
        const store = localStorage.getItem("user")
        console.log({username,password});
        const user = JSON.parse(store)
        if(username === user.username && password === user.password ){
            toast.success('Logged in successfully...!', {
                position: "top-center",
              });
            }

            else{
                toast.error('Wrong Username or Password...!', {
                    position: "top-center",
                  });
            }
    }

    render() {
        return (
            <div className='login'>
                <ToastContainer/>
                <form action="" onSubmit={this.handleSubmit.bind(this)}>
                <label htmlFor="username"> Username : </label>
                <input type="text" placeholder='Enter User name' id='username' required onChange={(e)=>{
                    this.setState({username : e.target.value})
                }} /> <br /> <br />
                <label htmlFor="password">Password : </label>
                <input type="password" id="password" placeholder='Enter Password' required onChange={(e)=>{
                    this.setState({password : e.target.value})
                }} /> <br /> <br />
                <button type='Submit' className='inBtn'> Log In </button>
                </form>
            </div>
        );
    }
}

export default LogIn;
