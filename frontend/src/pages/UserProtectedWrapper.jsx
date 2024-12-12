import React,{useContext, useEffect} from 'react'
import { UserDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const UserProtectedWrapper = ({
    children
}) => {
    const {user,setUser}=useContext(UserDataContext)
    const token=localStorage.getItem('token')
    const navigate=useNavigate()
   useEffect(()=>{
   if(!token){
    navigate('/login')
   }
},[token])
axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
   headers:{
    Authorization:`Bearer ${token}`
   }
}).then(response=>{
  if(response.status===200){
    setUser(response.data.user);
  }
}).catch(err=>{
  localStorage.removeItem('token');
  navigate('/login')
})
  return (
    <>
      {children}
    </>
  )
}

export default UserProtectedWrapper
