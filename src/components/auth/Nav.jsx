import axios from 'axios';
import React from 'react'
import {Link} from 'react-router-dom'
import {useContext,AllData} from './Contex_importer'

function Nav(props) {

    const [user,setUser,logged,setLogged]=useContext(AllData);

    const logout=e=>{
        e.preventDefault()

        axios.get('/logout',{
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          })
        .then(response=>{
            if(response.data.status){
                localStorage.clear()
                setLogged(false);
                props.history.push('/login');
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to='/home'>React Auth</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='/profile'>Profile</Link>
                </li>
                
            </ul>
            <form className="d-flex align-items-center">
                {!logged?<div className="d-flex align-items-center"><Link className='nav-link' to='/login'>Login</Link>|<Link className='nav-link' to='register'>Register</Link></div>:<Link className='nav-link' onClick={e=>logout(e)}>LogOut</Link>}
            </form>
            </div>
        </div>
        </nav>

    )
}

export default Nav
