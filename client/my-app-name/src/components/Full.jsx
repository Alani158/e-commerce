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
    <div className=" sm:w-full  w-full  h-full  ">
      <Navbar />
      <div className="   w-[155vh] mx-auto justify-center p-6">
        <ImageSlider />
        <div className="flex">
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold  relative  top-3  text-gray-900">
              Simply Unique/{" "}
            </h2>
            <h2 className="text-4xl font-semibold  text-gray-900">
              {" "}
              Simply Better.
            </h2>
          </div>
          <div className="relative top-10 left-20">
            <p className="text-gray-600  text-sm text-center  mt-2">
              <strong>3legant</strong> is a gift & decorations store based in
              HCMC, Vietnam. Est since 2019.
            </p>
          </div>
        </div>
      </div>
      <CategoryGrid />
      <NewArrivals />
      <ServicesGrid />
      <HeroBanner />
      <Articles />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Full;
