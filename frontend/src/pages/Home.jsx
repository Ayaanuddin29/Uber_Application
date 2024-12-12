import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanle from '../components/LocationSearchPanle'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'
const Home = () => {
  const [pickUp,setPickUp]=useState('')
  const [destination,setDestination]=useState('')
  const [panelOpen,setPanelOpen]=useState(false)
  const panelRef=useRef(null)
  const panelClose=useRef(null)
  const [vehiclePanel,setVehiclePanel]=useState(false)
  const [confirmRidePanel,setConfirmRidePanel]=useState(false)
  const [vehcileFound,setVehicleFound]=useState(false)
  const [waitingForDriver,setWaitingForDriver]=useState(false)
  const vehiclePanelRef=useRef(null)
  const confirmRidePanelRef=useRef(null)
  const vehicleFoundRef=useRef(null);
  const waitingForDriverRef=useRef(null);
  const submitHandler=(e)=>{
   e.preventDefault();
  }
  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'70%',
        opacity:1,
        padding:24
      })
      gsap.to(panelClose.current,{
        opacity:1,
      })
    }else{
      gsap.to(panelRef.current,{
        height:'0%',
        opacity:0,
        padding:0
      })
      gsap.to(panelClose.current,{
        opacity:0
      })
    }
  },[panelOpen])
  useGSAP(function(){
     if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)'
       })
     }else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)'
      })
     }
  },[vehiclePanel])
  useGSAP(function(){
    if(confirmRidePanel){
     gsap.to(confirmRidePanelRef.current,{
       transform:'translateY(0)'
      })
    }else{
     gsap.to(confirmRidePanelRef.current,{
       transform:'translateY(100%)'
     })
    }
 },[confirmRidePanel])
 useGSAP(function(){
  if(vehicleFoundRef){
   gsap.to(vehicleFoundRef.current,{
     transform:'translateY(0)'
    })
  }else{
   gsap.to(vehicleFoundRef.current,{
     transform:'translateY(100%)'
   })
  }
},[vehcileFound])
useGSAP(function(){
  if(waitingForDriverRef){
   gsap.to(waitingForDriverRef.current,{
     transform:'translateY(0)'
    })
  }else{
   gsap.to(waitingForDriverRef.current,{
     transform:'translateY(100%)'
   })
  }
},[waitingForDriver])
  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div onClick={()=>{
        setVehiclePanel(false)
      }} className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"/>
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
      <div className='h-[30%] p-6 bg-white relative'>
      <h5 ref={panelClose} onClick={()=>setPanelOpen(false)} className='absolute top-6 right-6 text-xl opacity-0'>
      <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h4 className='text-2xl font-semibold'>Find a Trip</h4>
        <form onSubmit={(e)=>submitHandler(e)}>
          <div className="line absolute h-16 w-1 top-[43%] left-10 bg-black rounded-full"></div>
          <input onClick={()=>setPanelOpen(true)} className='bg-[#eeeeee] mt-5 rounded px-12 py-2 border w-full text-lg rounded-lg placeholder:text-base' placeholder='Add a pick-up Location' value={pickUp} onChange={(e)=>setPickUp(e.target.value)} type='text'/>
          <input onClick={()=>setPanelOpen(true)} className='bg-[#eeeeee] mt-3 rounded px-12 py-2 border w-full text-lg rounded-lg placeholder:text-base' placeholder='Enter your Destination' type='text' value={destination} onChange={(e)=>setDestination(e.target.value)}/>
        </form>
      </div>
      <div ref={panelRef} className='bg-white h-0'>
<LocationSearchPanle  setPanelOpen={setPanelOpen}  setVehiclePanel={setVehiclePanel}/>
      </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 bg-white translate-y-full  px-3 py-10 pt-12'>
      <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>
      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 bg-white translate-y-full  px-3 py-6 pt-12'>
      <ConfirmRide setVehicleFound={setVehicleFound} setConfirmRidePanel={setConfirmRidePanel}/>
      </div>
      <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 bg-white translate-y-full  px-3 py-6 pt-12'>
      <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 bg-white py-16 px-3 pt-12'>
      <WaitingForDriver waitingForDriver={waitingForDriver} setWaitingForDriver={setWaitingForDriver} setVehicleFound={setVehicleFound}/>
      </div>
    </div>
  )
}

export default Home
