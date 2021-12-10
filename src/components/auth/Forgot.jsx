import React,{useState} from 'react'
import axios from 'axios';


function Forgot() {
    const [forgot,setForgot]=useState({})
    const [msg,setMsg]=useState('')

    const submitHandler=e=>{
        e.preventDefault()
        axios.post('/forgot-password',forgot)
        .then(response=>{
            setMsg(response.data.msg)
        })
        .catch(error=>{
            console.log(error);
        })

    }

    return (
        <div className='d-flex justify-content-center align-items-center mt-5 '>
            <form onSubmit={e=>submitHandler(e)} className='col-lg-4  bg-light p-5 rounded'>
            <h6 className='text-success'>{msg}</h6>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                onChange={e=>setForgot({...forgot,email:e.target.value})}
                required/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                <button type="submit" className=" mt-2 btn btn-success form-control">Submit</button>
            </div>
            
            </form>

        </div>
    )
}

export default Forgot
