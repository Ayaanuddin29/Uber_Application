import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
        <h5 onClick={()=>{props.setVehicleFound(false)}} className='p-1 text-center absolute w-[93%] top-0 '><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>Looking For Driver</h3>
     <div className='flex justify-between flex-col items-center gap-2'>
     <img className='h-20' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1568134115/assets/6d/354919-18b0-45d0-a151-501ab4c4b114/original/XL.png'/>
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
     </div>
    </div>
  )
}

export default LookingForDriver
