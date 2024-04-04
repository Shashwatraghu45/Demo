import React from "react";
import residential from "../pitchers/residential.png"
import turnkey from "../pitchers/turnkey.png"
import civil from "../pitchers/civil.png"
import interier from "../pitchers/interior.png"
import parlxx from "../pitchers/parlxxx.png"

const Fourth =()=>{
    return (
     <> 
        <div className=" flex my-16">


           <div className="grid grid-cols-2 gap-4 w-1/2 p-8 " style={{fontFamily: "Raleway, sans-serif"}}>

                 <div className="bg-gray-200 px-4 flex items-center justify-center rounded transform transition-transform hover:-translate-y-1">
                  <img src={residential} alt="" />
                  <p class="m-1 text-center">Residential Construction Service</p>
                 </div>
                 <div className="bg-gray-200 px-4 flex items-center justify-center rounded  transform transition-transform hover:-translate-y-1">
                  <img src={civil} alt="" />
                  <p class="m-1 text-center">Civil Construction Service</p>
                 </div>
                 <div className="bg-gray-200  px-4 flex items-center justify-center rounded transform transition-transform hover:-translate-y-1">
                  <img src={turnkey} alt="" />
                  <p class="m-1 text-center">Turnkey Construction Service</p>
                 </div>
                 <div className="bg-gray-200 px-4 flex items-center justify-center rounded transform transition-transform hover:-translate-y-1">
                  <img src={interier} alt="" />
                  <p class="m-1 text-center">Interier Construction Service</p>
                 </div>
                
           </div>

           <div className=" w-1/2 p-10" style={{fontFamily: "Raleway, sans-serif"}}>
              <p style={{color:"#785b1f"}}>Our Service</p>
              <h1 className=" text-4xl font-semibold py-5">What We Offer</h1>
              <p className=" font-medium text-sm tracking-wide leading-6">We offer a variety of construction services, from residential to 
              turnkey projects &amp; interior designing we got you covered. But above all, we offer a peace
              of mind to you while we take the hassle of constructing the architectural marvel you wish for.</p>
              <button className=" text-white p-3 rounded-lg my-5" style={{background:"#0b0b0b"}}>Talk to our Expert</button>
           </div>
           
        </div>
        <div className="relative m-7" style={{ fontFamily: "Raleway, sans-serif" }}>
              <img src={parlxx} alt="" className="rounded-lg" />
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <h1 className="text-white text-5xl text-center font-semibold">
                      Get the Best Construction Service <br /> For Your Dream Home
                  </h1>
                  <button className=" text-white px-6 py-3 rounded-lg my-5" style={{background:"#0b0b0b"}}>Talk to our Expert</button>
              </div>
       </div>




   </>
    )
}
export default Fourth;