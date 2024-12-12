import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'
const CaptainLogin = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [captainData,setCaptainData]=useState({});
    const {captain,setCaptain}=React.useContext(CaptainDataContext)
    const navigate=useNavigate('')
    const submitHandler=async(e)=>{
        e.preventDefault();
        const captain={
            email:email,
            password:password
        }
        const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captain)
        if(response.status===200){
          const data=response.data;
          setCaptain(data.captain)
          localStorage.setItem('token',data.token)
          navigate('/captain-home')
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
     <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600 '>Register as a Captain</Link></p>
      </form>
       </div>
       <div>
       <Link to='/login' className='flex items-center justify-center bg-[#d5622d] rounded font-semibold mb-5 text-white px-4 py-2 border w-full lg placeholder:text-base'>SingIn as User</Link>
       </div>
    </div>
  )
}

export default CaptainLogin
