import React,{useState} from 'react'
import axios from 'axios'

function Register(props) {
    const [register,setRegister]=useState({})
    console.log(register);

    const submitHandler=e=>{
        e.preventDefault()

        axios.post('/register',register)
        .then(response=>{
            localStorage.setItem('token',response.data.token);
            props.history.push('/profile');
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div className='d-flex justify-content-center align-items-center mt-5 '>
            <form onSubmit={e=>submitHandler(e)} className='col-lg-4  bg-light p-5 rounded'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                onChange={e=>setRegister({...register,name:e.target.value})}
                required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                onChange={e=>setRegister({...register,email:e.target.value})}
                required/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" 
                onChange={e=>setRegister({...register,password:e.target.value})}
                required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" 
                onChange={e=>setRegister({...register,password_confirmation:e.target.value})}
                required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                onChange={e=>setRegister({...register,phone_no:e.target.value})}
                required/>
            </div>
            <button type="submit" className="btn btn-success form-control">Register</button>
            </form>

        </div>
    )
}

export default Register
