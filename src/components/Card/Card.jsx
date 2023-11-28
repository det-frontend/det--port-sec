import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, subtitle, id, img, delay }) => {
  return (
      <motion.div
        whileHover={{
          scale: 1.03,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
        }}
        className="bg-white shadow-xl shadow-primary/20 overflow-hidden w-[90%] rounded-lg mb-12 "
      >
        <div className="overflow-hidden  h-[220px]">
          <img src={img} className="object-center object-cover" alt="" />
        </div>
        <div className="p-5 pt-4">
          <div className="mb-2">
            <div className="text-2xl font-semibold text-text">{title}</div>
            <div className="text-md text-text/80 ">{subtitle.slice(0,110)} <span className="text-text/30"> learn more ...</span></div>
          </div>
          <button className="bg-button hover:bg-transparent duration-100 mt-2 hover:text-button border-2 border-button px-4 py-2 ms-auto flex rounded-md text-white">
            Learn more
          </button>
        </div>
    </motion.div>
  );
};

export default Card;
