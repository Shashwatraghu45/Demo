import React from 'react';


const Form = () => {
    return (
        <div className="bg-white w-full md:w-3/3 lg:w-2/5 xl:w-1/2 mx-auto p-5 pt-8 pb-10 rounded-lg shadow-lg"
          style={{fontFamily: "Raleway, sans-serif"}}
         >
        <form>
            <h2 className="text-center text-2xl mb-8 text-gray-900">
                Get Free 40 Mins. Design Consultation
            </h2>
            <input type="text" placeholder='Name' className="w-full px-4 py-2 mb-4 border rounded-lg" />
            <input type="email" placeholder='Email Address' className="w-full px-4 py-2 mb-4 border rounded-lg" />
            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 mb-4 border rounded-lg" />
            <input type="text" placeholder="Plot Location" className="w-full px-4 py-2 mb-4 border rounded-lg" />
            <button type="submit" className=" w-full h-14 py-2 text-sm bg-gray-950 text-white rounded-lg mt-1">
                Book A Free Design Consultation
            </button>
        </form>
    </div>
    
    );
};

export default Form;


