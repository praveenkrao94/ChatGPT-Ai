import React, { useContext } from 'react'
import Register from './register/Register'
import { UserContext } from './UserContext'
import Chat from './Chat/Chat'

function Routes() {
    const{username,id} = useContext(UserContext)

    if(username){
        return <Chat/> 
    }


  return (
    <div><Register/></div>
  )
}

export default Routes