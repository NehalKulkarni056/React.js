import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogIn from './Log_In';

class SignUp extends Component {
    constructor(){
        super()
        this.state={
            username : "",
            email : "",
            contact : "",
            password : ""
        }
    }
    
    handleSubmit(e){
        e.preventDefault()
        localStorage.setItem("user", JSON.stringify(this.state))
        toast.success('Signed Up successfully...!', {
            position: "top-center",
          });
    }

    render() {
        return (
            <div className='signUp'>
                <form action="" onSubmit={this.handleSubmit.bind(this) && this.props.data}>
                <label htmlFor="username">User Name : </label>
                <input type="text" id='username' placeholder='Enter user name' required onChange={(e)=>{
                    this.setState({username : e.target.value})
                }} /> <br /> <br />
                <label htmlFor="email">Email id : </label>
                <input type="email" id="emaiL" placeholder='Enter Email id' required onChange={(e)=>{
                    this.setState({email : e.target.value})
                }} /> <br /> <br />
                <label htmlFor="contact">Mobile number : </label>
                <input type="number" id='contact' placeholder='Enter mobile number' required onChange={(e)=>{
                    this.setState({contact : e.target.value})
                }}/> <br /> <br />
                <label htmlFor="password">Password : </label>
                <input type="password" id='password' placeholder='Enter Password' required onChange={(e)=>{
                    this.setState({password : e.target.value})
                }} /> <br /><br />
                <div className='btnLog'>
                <button type='Submit'>Submit</button>
                <button type="reset">Reset</button>
                </div>
                </form>
                {this.showLogin && <LogIn/>}
            </div>
        );
    }
}

export default SignUp;
