import React from "react";
import abtone from "../pitchers/abt-new-two.jpg";
import anttwo from "../pitchers/abt-one.jpg";

const Second = () => {
    return (
        <>
            <div className="flex mt-20 mx-auto justify-between" style={{ color: "#0d1820" , fontFamily: "Raleway, sans-serif"}}>

         <div className="content m-4 pl-5 w-1/2">
              <h3 className="text-3xl pb-2 font-light">Do you know 59%* of construction projects are delayed?</h3>
              <p style={{ fontWeight: "300", lineHeight:"28px", fontSize:"17px"}} className="py-1">Most construction projects by local contractors or freelancers are delayed due to various reasons like failures, 
               labor shortages, missing or incorrect data, project mistakes, and conflicts.</p>
              <h2 className="text-2xl font-semibold py-2">Hassle-Free Construction Service That You’ll <br />Love</h2>
               <p className="hidden lg:block py-2">With Rever Homes you’ll get —</p>
            <ul className="hidden lg:block list-none" style={{ paddingLeft: "12px"}}>
               <li>Timely Delivery</li>
               <li>Minimum Client Involvement</li>
               <li>2D & 3D Design Support</li>
               <li>Industry Best Materials</li>
               <li>Warranty of Work</li>
             <li>Transparent Process</li>
           </ul>
         </div>


                <div className="flex w-1/2 justify-end">
                    <div className="w-3/4 m-3 relative">
                        <img src={abtone} alt="Image 1 description" className="w-full" />
                        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center p-3" style={{ background: "#EAA82A" }}>
                            <h2 className="text-white text-3xl font-medium">You Dream it</h2>
                        </div>
                    </div>
                    <div className="w-3/4 m-3 relative">
                        <img src={anttwo} alt="Image 2 description" className="w-full" />
                        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center p-3" style={{ background: "#EAA82A"}}>
                            <h2 className="text-white text-3xl font-medium">We Construct it</h2>
                        </div>
                    </div>
                </div>
                <div className="">
                <div class="inner-content c-padss lg:hidden">
                <h4 class="text-lg font-semibold" style={{color:"#0d1820"}}>But We Are Not The Same</h4>
                <p class="text-base" style={{color:"#0d1820"}}>Unlike other ordinary construction service providers who make home construction a hassled task, we make sure you get your dream home within timelines & that too with minimum involvement.</p>
                 <p class="text-base" style={{color:"#0d1820"}}>And this is what makes Rever Homes one of the best construction service providers in Gurgaon & Delhi-NCR.</p>
                 </div>
                </div>

            </div>
             <div className="">
                <div class=" mx-8 " style={{fontFamily: "Raleway"}}>
                <h2 className="text-2xl font-semibold py-2">But We Are Not The Same</h2>
                <p class="text-base" style={{color:"#0d1820"}}>Unlike other ordinary construction service providers who make home construction a hassled task, we make sure you get your dream home within timelines & that too with minimum involvement.</p>
                    <br/>
                 <p class="text-base" style={{color:"#0d1820"}}>And this is what makes Rever Homes one of the best construction service providers in Gurgaon & Delhi-NCR.</p>
               </div>
               <button className="px-8 py-4 m-8 text-white bg-gray-900 rounded-lg">Talk to Our Expert</button>
             </div>
        </>
    )
}

export default Second;

