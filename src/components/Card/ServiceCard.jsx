import React from "react";
import "./serviceCard.css";
const ServiceCard = ({ img, text }) => {
  return (
    <div class="card ">
      <div class="card2 border-darkGreen border flex flex-col gap-2 lg:gap-4 justify-center items-center duration-100">
        <img src={img} className="lg:h-20 h-10" />
        <div className="text-darkGreen lg:text-xl font-semibold">{text}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
