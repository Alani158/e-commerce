import React from "react";
import Navbar from "./Navbar"; 
import ImageSlider from "./ImageSlider";

function Full() {
  return (
   <div className="w-full h-full  ">
 <div className="w-full bg-[#F3F5F7]">
    <div className="w-[50vh] justify-self-center space-x-6 flex  " >
        <div className=" flex space-x-2 "> 
         <img src="cut.png" alt=""
         className="w-4 h-4 relative top-1 "
         />
         <div className=" space-x-1 flex">
         <p>30% storewide</p>
         <p>-Limited</p>
        </div>
        </div>
        <div className="">
        <button className="text-blue-400">Shop Now-> </button>
        <hr />
        </div>
        
    </div>
    <div className="justify-items-end  relative -top-4  -left-7"> 
            <img src="cross.png" alt="" className=" w-2 h-2" />
        </div>

 </div>
 <Navbar/>
 <div className="   w-[110vh] mx-auto justify-center p-6">
      <ImageSlider />
      <div className="flex">
        <div>
      <h2 className="text-3xl font-bold mt-6 text-gray-900">Simply Unique/ </h2>
      <h2 className="text-3xl font-bold  text-gray-900"> Simply Better.</h2>
      </div>
      <p className="text-gray-600 text-center max-w-xl mt-2">
        <strong>3legant</strong> is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
      </p>
    </div>
    </div>


    </div>

  );
}

export default Full;
