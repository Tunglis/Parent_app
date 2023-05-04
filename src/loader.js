import PacmanLoader from "react-spinners/PacmanLoader";
import React, { useState,useEffect, CSSProperties } from 'react';
function Loader()
{
   
        const [loading,setLoading] = useState(false);
      
        useEffect(()=>{
          setLoading(true);
          setTimeout(()=>{
          setLoading(false)
          },3000)
        },[])
    return(
        <div>
                {
        loading ?

   <div style={{textAlign:"center", justifyContent:"center",alignItems:"center",display:"flex",height:"80vh"}}>
   <PacmanLoader color="#36d7b7" /></div>
   :
   <div>
    </div>
}
           </div>
    )
}
export default Loader;