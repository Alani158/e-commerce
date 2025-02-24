import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CgShoppingBag } from "react-icons/cg";

function Navbar(){
    return(

        <div className="w-full flex">
 <div className=" flex   w-full " >
    <img src="elegant.png" alt=""   className="w-20 relative left-20  h-10" />
    <div className="space-x-10  relative   left-14 text-sm  mx-auto text-center ">
    <button>Home</button>
    <button>Shop</button>
    <button>Product</button>
    <button>Contact Us</button>
 </div>
 <div className="flex w-[30vh] space-x-4 relative top-3">
    <CiSearch className="w-5 h-5"/>
    <CgShoppingBag className="w-5 h-5"/>
    <IoPersonCircleSharp className="w-5 h-5"/>
    <img src="two.png" alt=""  className="w-5  h-5"/> 
 </div>


 </div>

 
        </div>

    );

}

export default Navbar;