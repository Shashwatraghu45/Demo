import React from "react";

const Fifth = () => {
    return (
        <>
            <div className="container mx-auto my-20" style={{ fontFamily: "Raleway, sans-serif" }}>
                <div className="text-center my-5">
                    <h2 className="text-4xl font-semibold tracking-wider">What Makes Us Stand Out</h2>
                </div>
                <div className="flex justify-center">
                    <div className="overflow-x-auto">
                        <table className="table-auto border border-gray-500" style={{fontFamily: "Raleway, sans-serif" }}>
                            <thead>
                                <tr className="bg-black text-white text-base">
                                    <th className="border px-5  "></th>
                                    <th className="border px-5 ">Rever Homes</th>
                                    <th className="border px-5 ">Local Construction</th>
                                    <th className="border px-5 ">Freelancers</th>
                                    <th className="border px-5 ">Other construction & build companies</th>
                                </tr>
                            </thead>
                            <tbody style={{ background: "#EAA82A " }}>
                                <tr>
                                    <td className="border px-5 font-semibold ">Client Involvement</td>
                                    <td className="border px-5 ">Only till we know what you want</td>
                                    <td className="border px-5  ">Involvement required at every stage</td>
                                    <td className="border px-5 ">Continuous involvement required</td>
                                    <td className="border px-5 ">Involvement required at every stage</td>
                                </tr>
                                <tr>
                                    <td className="border px-5 font-semibold ">Commitment/ Delivery Deviation</td>
                                    <td className="border px-5 ">Zero Deviation</td>
                                    <td className="border px-5 ">High Deviation</td>
                                    <td className="border px-5 ">High Deviation</td>
                                    <td className="border px-5 ">Medium Deviation</td>
                                </tr>

                                <tr>
                                    <td className="border px-5  font-semibold">Construction Standards</td>
                                    <td className="border px-5 ">Global Standards</td>
                                    <td className="border px-5 ">Local Standards</td>
                                    <td className="border px-5 ">As per client’s budget</td>
                                    <td className="border px-5 ">As per client's requirement</td>
                                </tr>
                               
                                <tr>
                                    <td className="border px-5 font-semibold ">Timeline</td>
                                    <td className="border px-5 ">100% timely delivery</td>
                                    <td className="border px-5 ">Timelines usually extends</td>
                                    <td className="border px-5 ">No Timeline</td>
                                    <td className="border px-5 ">Timelines usually extends</td>
                                </tr>
                               
                                <tr>
                                    <td className="border px-5 font-semibold ">Warranty</td>
                                    <td className="border px-5 ">We provide warranty for multiple jobs</td>
                                    <td className="border px-5 ">No warranty</td>
                                    <td className="border px-5 ">No TimelineNo warranty</td>
                                    <td className="border px-5 ">Depends on company</td>
                                </tr>
                               
                                <tr>
                                    <td className="border px-5 font-semibold ">Transparency</td>
                                    <td className="border px-5 ">100% transparent quotation &amp; process</td>
                                    <td className="border px-5 ">Extremely Low</td>
                                    <td className="border px-5 ">Low</td>
                                    <td className="border px-5 ">Medium</td>
                                </tr>
                               
                                <tr>
                                    <td className="border px-5 font-semibold ">Rework</td>
                                    <td className="border px-5 ">Extremely Low</td>
                                    <td className="border px-5 ">High</td>
                                    <td className="border px-5 ">High</td>
                                    <td className="border px-5 ">Medium</td>
                                </tr>
                                {/* Add more rows with proper border styling */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fifth;