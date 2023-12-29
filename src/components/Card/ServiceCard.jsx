import React from "react";
import "./serviceCard.css";
const ServiceCard = ({ img, text }) => {
  return (
    <div class="card ">
      <div class="card2 border-darkGreen border flex flex-col gap-4 justify-center items-center duration-100">
        <img src={img} className="h-20" />
        <div className="text-darkGreen text-xl font-bold">{text}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
