import React from "react";
import Navbar from "./Navbar"; 
import ImageSlider from "./ImageSlider";
import CategoryGrid from "./CategoryGrid";
import NewArrivals from "./NewArrival";
import "../index.css";
import ServicesGrid from "./ServiceGrid";
import HeroBanner from "./HeroBanner";
import Articles from "./Articles";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

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
        <a href="#" className="text-sm text-blue-500  hover:underline">
                Shop Now →
              </a>
       
        </div>
        
    </div>
    <div className="justify-items-end  relative -top-4  -left-7"> 
            <img src="cross.png" alt="" className=" w-2 h-2" />
        </div>

 </div>
 <Navbar/>
 <div className="   w-[155vh] mx-auto justify-center p-6">
      <ImageSlider />
      <div className="flex">
        <div className="space-y-4">
      <h2 className="text-4xl font-semibold  relative  top-3  text-gray-900">Simply Unique/ </h2>
      <h2 className="text-4xl font-semibold  text-gray-900"> Simply Better.</h2>
      </div>
      <div className="relative top-10 left-20">
      <p className="text-gray-600  text-sm text-center  mt-2">
        <strong>3legant</strong> is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
      </p>
      </div>
    </div>
    </div>
    <CategoryGrid/>
    <NewArrivals/>
<ServicesGrid/>
<HeroBanner/>
<Articles/>
<Newsletter/>
<Footer/>
    </div>

  );
}

export default Full;
