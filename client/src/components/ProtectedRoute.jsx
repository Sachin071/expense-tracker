import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { useSelector} from 'react-redux'

const ProtectedRoute = ({component : Component , ...rest}) => {
    // Check if user login 
    const userLogin = useSelector(state => state?.users?.auth)
    return (
    <div>
        <Route {...rest} render={()=> (userLogin ? <Component {...rest} /> : <Navigate to= '/login' />)} />
    </div>
    )
}

export default ProtectedRoute