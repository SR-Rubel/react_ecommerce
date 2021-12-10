import React,{useEffect} from 'react'
import {AllData,useContext} from './Contex_importer'
import axios from 'axios'
import {Redirect} from 'react-router-dom'


function Profile(porps) {
    const [user,setUser,logged,setLogged]=useContext(AllData);


    useEffect(()=>{
        axios.get('/profile',{
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          })
        .then(response=>{
            const data=response.data.msg;
            setUser({name:data.name,email:data.email,phone:data.phone_no})
        })
        .catch(error=>{
            console.log(error);
        })

    },[]);

    return (
       !logged?<Redirect to='/login' />:
       <div className='d-flex justify-content-center mt-5 '>
            <div className="bg-light card text-center" style={{width: '30vw'}}>
            <div className="card-body">
                {console.log('==user data==',user)}
                <h5 className="card-title">{user?.name}</h5>
                <p className="card-text">Email: {user?.email}</p>
                <p className="card-text">Phone: {user?.phone}</p>
            </div>
            </div>

        </div>
    )
}

export default Profile
