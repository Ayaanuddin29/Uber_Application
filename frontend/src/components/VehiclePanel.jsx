import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
           
      <h5 onClick={()=>props.setVehiclePanel(false)} className='p-1 text-center absolute w-[93%] top-0 '><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
          <div onClick={()=>props.setConfirmRidePanel(true)} className='flex active:bg-gray-100 border-2 w-full active:border-black rounded-xl mb-2 p-3 items-center justify-between'>
            <img className='h-14' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1568134115/assets/6d/354919-18b0-45d0-a151-501ab4c4b114/original/XL.png'/>
            <div className=' w-1/2'>
              <h4 className='font-medium text-lg'>UberGo <span><i class="ri-user-line"></i>4</span></h4>
              <h5 className='font-medium text-sm'>2mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable,compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>193Rs</h2>
          </div>
          <div onClick={()=>props.setConfirmRidePanel(true)} className='flex active:bg-gray-100 border-2 w-full active:border-black rounded-xl mb-2 p-3 items-center justify-between'>
            <img className='h-14' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png'/>
            <div className='ml-2 w-1/2'>
              <h4 className='font-medium text-lg'>Moto <span><i class="ri-user-line"></i>1</span></h4>
              <h5 className='font-medium text-sm'>5mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable,motocycle rides</p>
            </div>
            <h2 className='text-lg font-semibold'>50Rs</h2>
          </div>
          <div onClick={()=>props.setConfirmRidePanel(true)} className='flex active:bg-gray-100 border-2 w-full active:border-black rounded-xl mb-2 p-3 items-center justify-between'>
            <img className='h-14' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png'/>
            <div className=' w-1/2'>
              <h4 className='font-medium text-lg'>UberAuto <span><i class="ri-user-line"></i>3</span></h4>
              <h5 className='font-medium text-sm'>7mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable,Auto rides</p>
            </div>
            <h2 className='text-lg font-semibold'>100Rs</h2>
          </div>
      </div>
      

  )
}

export default VehiclePanel
