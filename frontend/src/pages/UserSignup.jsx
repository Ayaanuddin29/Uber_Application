import React,{useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import {UserDataContext} from '../context/userContext';
const UserSignup = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [userData,setUserData]=useState({});
    const navigate=useNavigate();
    const {user,setUser}=useContext(UserDataContext)
    const submitHandler=async(e)=>{
        e.preventDefault();
        const newUser={
                fullname:{
                    firstname:firstName,
                    lastname:lastName
                },
                email:email,
                password:password
        }
        const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)
        console.log(response.data)
        if(response.status===201){
           const data=response.data;
           setUser(data.user)
           localStorage.setItem('token',data.token)
           navigate('/home')
        }
        setEmail('');
        setFirstName('');
        setLastName('');
        setPassword('');
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
    <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
   <form onSubmit={(e)=>submitHandler(e)}>
   <h3 className='text-lg text-base font-medium mb-2'>What's your name</h3> 
   <div className='flex gap-3 mb-5'>
    <input type='text' placeholder='First Name' required className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border  lg placeholder:text-sm' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
    <input type='text' placeholder='last Name' required className='bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border  lg placeholder:text-sm' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
   </div>
   <h3 className='text-lg text-base font-medium mb-2'>What's your email</h3>
   <input type='email' className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full lg placeholder:text-sm' required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='example@email.com'/>
   <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
   <input className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full lg placeholder:text-sm' type='password' required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='*******'/>
   <button className='bg-[#111] rounded font-semibold mb-3 text-white px-4 py-2 border w-full lg placeholder:text-sm'>Create Account</button>
  <p className='text-center'>Already Have a Account? <Link to='/Login' className='text-blue-600 '>Login</Link></p>
   </form>
    </div>
    <div>
   <p className='text-[10px] leading-tight'>By proceeding,you consent to get calls,whatsapp or SMS message, inlcuding by automated means,from uber and its affiliates to the number provided</p>
    </div>
 </div>
  )
}

export default UserSignup
