import React,{useState} from 'react'
import axios from 'axios';
import {useContext,AllData} from './Contex_importer'
import {Redirect,Link} from 'react-router-dom'

function Login(props) {

    const [user,setUser,logged,setLogged]=useContext(AllData);
    const [login,setLogin]=useState({})

    const submitHandler=e=>{
        e.preventDefault()
        axios.post('/login',login)
        .then(response=>{
            localStorage.setItem('token',response.data.token);
            setLogged(true);
            props.history.push('/profile');
        })
        .catch(error=>{
            console.log(error);
        })

    }

    return (
        logged?<Redirect to='/profile' />:
        <div className='d-flex justify-content-center align-items-center mt-5 '>
            <form onSubmit={e=>submitHandler(e)} className='col-lg-4  bg-light p-5 rounded'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                onChange={e=>setLogin({...login,email:e.target.value})}
                required/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" 
                onChange={e=>setLogin({...login,password:e.target.value})}
                required/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-success form-control">login</button>
            <div className='mt-2 mb-2'>
                forget your password? <Link to='/forgot-password'>Click here</Link>
            </div>
            <div className='mt-2 mb-2'>
                You don't have an account? <Link to='/register'>Click here</Link>
            </div>
            </form>

        </div>
    )
}

export default Login
