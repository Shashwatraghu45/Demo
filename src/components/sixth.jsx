import React from "react";
import img1 from "../pitchers/1.png"
import img2 from "../pitchers/2.png"
import img3 from "../pitchers/3.png"
import img4 from "../pitchers/4.png"
import img5 from "../pitchers/4.jpg"
import img6 from "../pitchers/5.png"
import img7 from "../pitchers/6.png"
import img8 from "../pitchers/7.png"

const Sixth = () => {
    return (
        <div className="justify-center py-14 items-center text-center bg-gray-100" style={{fontFamily: "Raleway, sans-serif"}}>

    <h1 className="text-5xl py-10">Our Projects</h1>

    <div className="container mx-auto">

        <div className="grid grid-cols-4 gap-4">
            <div  className=" bg-gray-100 transform transition-transform hover:-translate-y-1">
                <img src={img6} alt="" />
                <h3 className="mt-4 mb-5 font-bold">300 Sqyrd-Sector 4 Gurgaon-Delivered</h3>
            </div>
            <div className="bg-gray-100 transform transition-transform hover:-translate-y-1">
                <img src={img7} alt="" />
                <h3 className="mt-4 mb-5 font-bold">300 Sqyrd-Shushant Lok 1 Gurgaon-Delivered </h3>
            </div>
            <div className="bg-gray-100 transform transition-transform hover:-translate-y-1">
                <img src={img8} alt="" />
                <h3 className="mt-4 mb-5 font-bold">250 Sqyrd-Sector 4 Gurgaon-Delivered </h3>
            </div>
            <div className="bg-gray-100 transform transition-transform hover:-translate-y-1">
                <img src={img5} alt="" />
                <h3 className="mt-4 mb-5 font-bold">500 Sqyrd-Sector 4 Gurgaon-Delivered</h3>
            </div>
            <div className="bg-gray-100 transform transition-transform hover:-translate-y-1">
                <img src={img1} alt="" />
                <h3  className="mt-4 mb-5 font-bold" >250 Sqyrd-Sector 4 Gurgaon-Under Construction</h3>
            </div>
            <div className="bg-gray-100 transform transition-transform hover:-translate-y-1">
                <img src={img2} alt="" />
                <h3  className="mt-4 mb-5 font-bold">2000 Sqyrd-Sohna Gurgaon-Under Construction</h3>
            </div>
            <div className="bg-gray-100 transform transition-transform hover:-translate-y-1">
                <img src={img3} alt="" />
                <h3  className="mt-4 mb-5 font-bold">259 Sqyrd-Greater Noida-Under Construction</h3>
            </div>
            <div className="bg-gray-100 transform transition-transform hover:-translate-y-1">
                <img src={img4} alt="" />
                <h3  className="mt-4 mb-5 font-bold">160 Sqyrd-Sector 4 Gurgaon-Under Construction</h3>
            </div>
        </div>
    </div>
</div>

    );
};
export default Sixth;
