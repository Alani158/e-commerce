import React from "react";
import { FaShippingFast, FaMoneyCheck, FaLock, FaHeadset } from "react-icons/fa"; // Ensure you have react-icons installed

const features = [
  {
    id: 1,
    icon: <FaShippingFast className="text-3xl text-gray-800" />,
    title: "Free Shipping",
    description: "Order above $200",
  },
  {
    id: 2,
    icon: <FaMoneyCheck className="text-3xl text-gray-800" />,
    title: "Money-back",
    description: "30 days guarantee",
  },
  {
    id: 3,
    icon: <FaLock className="text-3xl text-gray-800" />,
    title: "Secure Payments",
    description: "Secured by Stripe",
  },
  {
    id: 4,
    icon: <FaHeadset className="text-3xl text-gray-800" />,
    title: "24/7 Support",
    description: "Phone and Email support.",
  },
];

const FeatureSection = () => {
  return (
    <div className="w-[180vh]  mx-auto px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
          >
            {feature.icon}
            <h3 className="text-lg font-semibold mt-3">{feature.title}</h3>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ Make sure to export correctly
export default FeatureSection;
