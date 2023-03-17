import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const PrivateRouter = ({children}) => {

    const {logged} = useContext(AuthContext);
    const {pathname,search } = useLocation();
const  lastpath= pathname + search;
 localStorage.setItem('lastpath', lastpath);




  return (logged  )
  ?children
  : <Navigate to='/login'/>
}

export default PrivateRouter
