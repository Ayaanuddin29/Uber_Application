import React from 'react'

const WaitingForDriver = ({props}) => {
  return (
    <div>
    <h5 onClick={()=>{props.waitingForDriver(false)}} className='p-1 text-center absolute w-[93%] top-0 '><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
  <div className='flex items-center justify-between'>
  <img className='h-20' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1568134115/assets/6d/354919-18b0-45d0-a151-501ab4c4b114/original/XL.png'/>
  <div className='text-right'>
    <h2 className='text-lg font-medium'>Ayaan</h2>
    <h4 className='text-xl font-semibold -mt-1 -mb-1'>TS 22 EJ 2345</h4>
    <p className='text-sm text-gray-600'>Maruti Suzuki</p>
  </div>
  </div>
 <div className='flex justify-between flex-col items-center gap-2'>
 
        <div className='w-full mt-5'>
             <div className="flex items-center gap-5 p-3 border-b-2"><i className="ri-map-pin-fill text-xl"></i><div><h3 className='text-lg font-medium'>562/11-A</h3>
             <p className='text-sm -mt-1 text-gray-500'>TankBund,Hyderabad</p>
             </div></div>
             <div className="flex items-center gap-5 p-3 border-b-2"><i className="ri-map-pin-fill text-xl"></i><div><h3 className='text-lg font-medium'>562/11-A</h3>
             <p className='text-sm -mt-1 text-gray-500'>TankBund,Hyderabad</p>
             </div></div>
             <div className="flex items-center gap-5 p-3"><i className="ri-money-rupee-circle-line"></i><div><h3 className='text-lg font-medium'>Rs193</h3>
             <p className='text-sm -mt-1 text-gray-500'>Cash</p>
             </div></div>
             
        </div>
        {/* <button className='w-full mt-5 bg-green-400 text-white font-semibold p-2 rounded-lg'>Confirm</button> */}
 </div>
</div>
  )
}

export default WaitingForDriver
