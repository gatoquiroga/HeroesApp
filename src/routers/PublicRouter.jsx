import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const PublicRouter = ({children}) => {
    const {logged} = useContext(AuthContext)
    return (!logged  )
    ?children
    : <Navigate to='/marvel'/>
}

export default PublicRouter
