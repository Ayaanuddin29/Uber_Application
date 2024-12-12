import React, { useState,useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/userContext'
const UserLogin = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [userData,setUserData]=useState({});
    const navigate=useNavigate()
    const {user,setUser}=useContext(UserDataContext)
    const submitHandler=async(e)=>{
        e.preventDefault();
        const userData={
            email:email,
            password:password
        }
        const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)
        if(response.status===200){
          const data=response.data;
           setUser(data.user)
           localStorage.setItem('token',data.token)
           navigate('/home')
        }
        setEmail('');
        setPassword('');
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
       <div>
       <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form onSubmit={(e)=>submitHandler(e)}>
      <h3 className='text-lg font-medium mb-2'>What's your email</h3>
      <input type='email' className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full lg placeholder:text-base' required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='example@email.com'/>
      <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
      <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full lg placeholder:text-base' type='password' required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='*******'/>
      <button className='bg-[#111] rounded font-semibold mb-3 text-white px-4 py-2 border w-full lg placeholder:text-base'>Login</button>
     <p className='text-center'>New Here? <Link to='/signup' className='text-blue-600 '>Create new Account</Link></p>
      </form>
       </div>
       <div>
       <Link to='/captain-login' className='flex items-center justify-center bg-[#10b461] rounded font-semibold mb-5 text-white px-4 py-2 border w-full lg placeholder:text-base'>SingIn as Captain</Link>
       </div>
    </div>
  )
}

export default UserLogin
