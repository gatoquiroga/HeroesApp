import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const LoginScreen = () => {
  const {login} = useContext(AuthContext)
 const navigate= useNavigate()
  
 
 const Login = () => {

  const lastPath= localStorage.getItem('lastpath') || '/'

    login('ramiro quiroga');
     
    navigate( lastPath, {
      replace: true

    })

    

    


  };
  return (
    <div className=' container mt-5'>
     <h1>Login</h1>
     <hr/>

     <button className=' btn btn-primary' onClick={ Login}>
      Login
      
      </button>
    </div>
  )
}

export default LoginScreen
