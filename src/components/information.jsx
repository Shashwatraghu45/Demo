import React from "react";
import exp from "../pitchers/exp.png";
import cust from "../pitchers/cust-omer.png";
import pro from "../pitchers/pro-del.png";
import enable from "../pitchers/enable.png";

const Information = () => {
    return (
        <div className="items-center" style={{ background: "#EAA82A", fontFamily: "Raleway, sans-serif" }}>
            <div className="p-7 flex justify-evenly">
                <div className="flex">
                    <img style={{ width: "80px", height: "80px" }} src={exp} alt="" />
                    <div className="text-white m-auto pb-auto">
                        <h1 style={{ fontWeight: "600", fontSize: "30px", marginBottom: "0" }}>10+</h1>
                        <h2 style={{ fontSize: "15px", marginTop: "0" }}>Years Experience</h2>
                    </div>
                </div>
                <div className="flex">
                    <img style={{ width: "80px", height: "80px" }} src={pro} alt="" />
                    <div className="text-white m-auto pb-auto">
                        <h1 style={{ fontWeight: "600", fontSize: "30px", marginBottom: "0" }}>30+</h1>
                        <h2 style={{ fontSize: "15px", marginTop: "0" }}>Projects  Delevered</h2>
                    </div>
                </div>
                <div className="flex">
                    <img style={{ width: "80px", height: "80px" }} src={enable} alt="" />
                    <div className="text-white m-auto pb-auto">
                        <h1 style={{ fontWeight: "600", fontSize: "30px", marginBottom: "0" }}>Tech</h1>
                        <h2 style={{ fontSize: "15px", marginTop: "0" }}>Enable Construction</h2>
                    </div>
                </div>
                <div className="flex">
                    <img style={{ width: "80px", height: "80px" }} src={cust} alt="" />
                    <div className="text-white m-auto pb-auto">
                        <h1 style={{ fontWeight: "600", fontSize: "30px", marginBottom: "0" }}>100%</h1>
                        <h2 style={{ fontSize: "15px", marginTop: "0" }}>Customer  Satisfaction Rate</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Information;
