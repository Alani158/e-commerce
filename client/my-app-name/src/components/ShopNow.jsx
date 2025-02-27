import React from "react";
import Navbar from "./Navbar"; 
import Shop1 from "./Shop1";
import ProductGrid from "./ProductGrid";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
// import ImageSlider from "./ImageSlider";
// import CategoryGrid from "./CategoryGrid";
// import NewArrivals from "./NewArrival";
// import "../index.css";
// import ServicesGrid from "./ServiceGrid";
// import HeroBanner from "./HeroBanner";
// import Articles from "./Articles";
// import Newsletter from "./Newsletter";
// import Footer from "./Footer";

function ShopNow() {
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
 <p className="text-center font-bold ">LIVING ROOM FURNITURE </p>
 <Shop1/>
 <ProductGrid/>
 <Newsletter/>
 <Footer/>
 </div>
    );
}

export default ShopNow;