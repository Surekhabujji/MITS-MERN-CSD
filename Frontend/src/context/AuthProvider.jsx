import React from 'react'
import AuthContext from './AuthContext'

const AuthProvider = ({children}) => {
    const user={
        id :1,
        name: "Surekha",
        email : "surekha45@gmail.com"
    }
  return (
    <AuthContext value ={user}>
        {children}
    </AuthContext>
    
  )
}

export default AuthProvider