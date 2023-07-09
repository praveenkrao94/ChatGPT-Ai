import React, { useContext } from 'react'
import Register from './register/Register'
import axios from 'axios'
import { UserContextProvider } from './UserContext'
import Routes from './Routes'


function App() {


//   //!logout function

// function logoutUser(){
//   axios.post('/logout').then(()=>{
    
//     setId(null);
//     setUsername(null);
//   })
// }

  axios.defaults.baseURL = "http://localhost:4050"
  axios.defaults.withCredentials = true

  

  return (
   <UserContextProvider>
 <Routes/>
   </UserContextProvider>
     
    
  )
}

export default App