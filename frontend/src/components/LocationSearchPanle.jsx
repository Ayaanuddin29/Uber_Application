import React from 'react'

const LocationSearchPanle = (props) => {
  console.log(props)
  //sample array for location
  const location=[
    "2-3-512/42 bapu Nagar,Amberpet,Hyd,TS",
    "Padmavathi Nursing Home Bapu Nagar,Amberpet,Hyd",
    "Deccan Fast Food near Kothi Bangla 405",
    "Ayaan Residency near masjid-e-mohammadia",
]
  return (
    <div>
      {/* This is Just a Sample data */}
      {
        location.map(function(elem,idx){
           return <div key={idx} onClick={()=>{
          props.setVehiclePanel(true),
           props.setPanelOpen(false)}} className='flex items-center p-3 border-gray-100 active:border-black border-2 my-2 justify- rounded-xl items-center   gap-4'>
           <h2 className='bg-[#eee] flex rounded-full h-8 w-8 items-center justify-center'><i className="ri-map-pin-fill text-xl"></i></h2>
           <h4 className='font-medium'>{elem}</h4>
         </div>
        })
      }
    </div>
  )
}

export default LocationSearchPanle
