import React,{useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'
const CaptainSignup = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [userData,setUserData]=useState({});
    const [vehicleColor,setVehicleColor]=useState('')
    const [vehiclePlate,setVehiclePlate]=useState('')
    const [vehicleCapacity,setVehicleCapacity]=useState('');
    const [vehicleType,setVehicleType]=useState('')
    const {captain,setCaptain}=React.useContext(CaptainDataContext)
    const navigate=useNavigate()
    const submitHandler=async(e)=>{
        e.preventDefault();
        const captainData={
            fullname:{
                firstname:firstName,
                lastname:lastName
            },
            email:email,
            password:password,
            vehicle:{
                color:vehicleColor,
                plate:vehiclePlate,
                capacity:vehicleCapacity,
                vehicleType:vehicleType
            }
        }
        const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData);
        if(response.status===201){
            const data=response.data;
            setCaptain(data.captain);
            localStorage.setItem('token',data.token);
            navigate('/captain-home')
        }
        setEmail('');
        setFirstName('');
        setLastName('');
        setPassword('');
        setVehicleColor('');
        setVehiclePlate('')
        setVehicleCapacity('');
        setVehicleType('')
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
   <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
   <div className='flex gap-4 mb-7'>
    <input type='' required className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-sm' placeholder='Vehicle color' value={vehicleColor} onChange={(e)=>setVehicleColor(e.target.value)}/>
    <input type='' required className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-sm' placeholder='Vehicle plate' value={vehiclePlate} onChange={(e)=>setVehiclePlate(e.target.value)}/>
   </div>
   <div className='flex gap-4 mb-7'>
   <input type='number' required className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-sm' placeholder='Vehicle Capactiy' value={vehicleCapacity} onChange={(e)=>setVehicleCapacity(e.target.value)}/>
    <select  required className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-sm'  value={vehicleType} onChange={(e)=>setVehicleType(e.target.value)}>
        <option value="" disabled>Select Vehicle Type</option>
        <option value="car" >Car</option>
        <option value="auto" >Auto</option>
        <option value="motorcycle" >MotorCycle</option>
    </select>
   </div>
   <button className='bg-[#111] rounded font-semibold mb-3 text-white px-4 py-2 border w-full lg placeholder:text-sm'>Create Account</button>
  <p className='text-center'>Already Have a Account? <Link to='/captain-login' className='text-blue-600 '>Login</Link></p>
   </form>
    </div>
    <div>
   <p className='text-[10px] leading-tight'>By proceeding,you consent to get calls,whatsapp or SMS message, inlcuding by automated means,from uber and its affiliates to the number provided</p>
    </div>
 </div>
  )
}

export default CaptainSignup
