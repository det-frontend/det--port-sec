import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="w-[400px] rounded-lg overflow-hidden">
      <div className=" bg-white">
        <div className=" h-[200px] object-center  overflow-hidden">
          <img src={image} className="w-full  " alt="ddd" />
        </div>
        <div className="p-6">
          <div className="text-2xl font-semibold mb-1 text-text">{title}</div>
          <div className="text-md text-text/80 ">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
