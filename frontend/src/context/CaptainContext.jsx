import React,{createContext,useState,useContext} from 'react'
export const CaptainDataContext=createContext();

const CaptainContext=({children})=>{
    const [captain,setCaptain]=useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null)
    const updateCaptain=(captainData)=>{
        setCaptain(captainData)
    }
    const value={
        captain,setCaptain,error,setError,updateCaptain,loading,setLoading
    };
    return (
    <CaptainDataContext.Provider value={value}>
        {children}
    </CaptainDataContext.Provider>
    )
}

export default CaptainContext