import React from "react";
import clientimg from "../pitchers/test-monial.jpg";

const Seventh = () => {
    return (
        <>
        <div className="bg-gray-100 flex px-8 items-center" style={{ fontFamily: "Raleway, sans-serif" }}>
          <div className="w-1/3">
            <img src={clientimg} alt="" />
          </div>
          <div className="w-2/3 border border-gray-300 p-7 ml-12 rounded-md">
            <div className="content">
              <span className="text-base" style={{ color: "#785b1f" }}>Don’t Just Take Our Words</span>
              <h3 className="text-5xl my-5 font-medium">See What Our Clients Say</h3>
              <div>
                <div>
                  <i></i>
                  <h4>Gurhani Family</h4>
                  <span style={{ color: "#777777" }}>Customer</span>
                </div>
                <p style={{ color: "#777777" }} className="leading-7">We recently shifted to Sector-9A residence developed under the expertise of Mr. Ashwani. The entire experience of living here has been truly magical. The modern look and intelligent designing has added so much value to our dream home. Mr. Ashwani’s skill, professionalism and consistency has guided us to excellent outcomes. He had kept our interests in sharp focus while creating a home with finesse and intricate detailing. He has been in constant touch throughout and we are extremely thankful to him and definitely recommend Rever Homes.</p>
              </div>
            </div>
          </div>
        </div>
      </>
      
    )
}

export default Seventh;
