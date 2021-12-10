import axios from 'axios';
import React,{useState} from 'react';
import {Link} from 'react-router-dom'

function Reset(props) {
    const [reset,setReset]=useState({token:props.match.params.token});
    const [msg,setMsg]=useState('');
    console.log(reset);

    const submitHandler=e=>{
        e.preventDefault()
        axios.post('/reset-password',reset)
        .then(response=>{
            setMsg(response.data.msg);
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div className='d-flex justify-content-center align-items-center mt-5 '>
            <form onSubmit={e=>submitHandler(e)} className='col-lg-4  bg-light p-5 rounded'>
                <div className='alert alert-success'>{msg? <div>
                    <p className="alert alert-success">{msg}</p>
                    <Link to='/login'>got login page</Link>
                    </div> :''}</div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">token</label>
                <input type="text" className="form-control"
                value={props.match.params.token}
                onChange={e=>setReset({...reset,token:e.target.value})}
                required/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                onChange={e=>setReset({...reset,email:e.target.value})}
                required/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" 
                onChange={e=>setReset({...reset,password:e.target.value})}
                required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" 
                onChange={e=>setReset({...reset,password_confirmation:e.target.value})}
                required/>
            </div>

            <button type="submit" className="btn btn-success form-control">Reset Password</button>
            </form>

        </div>
    )
}

export default Reset
