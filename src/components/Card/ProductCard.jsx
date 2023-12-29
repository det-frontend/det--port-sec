import React from "react";
import iot from "../../assets/iot.jpg";
import { motion } from "framer-motion";
import product from "../../content/product";
import "./product.css";
const ProductCard = ({ id, title, subtitle, img }) => {
  //   console.log(product);
  return (
    <motion.div
      viewport={{ once: true }}
      whileInView={{
        scale: 1,
        opacity: 1,
      }}
      initial={{
        scale: 0.5,
        opacity: 0.5,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        duration: 2,
      }}
      className="w-[95%] xl:w-[90%] 2xl:w-[93%] "
    >
        <motion.div
          whileHover={{
            scale: 1.02,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
          }}
          className="bg-[#142938] border border-darkGreen rounded-lg p-1 rightCircuit"
        >
          <div className="flex">
            <div className="w-[60%] text-center overflow-hidden rounded-md h-[350px]  m-3 ">
              <img src={img} alt="err" className="w-full " />
            </div>
            <div className="flex flex-col pb-4">
              <div className=" ms-5 mt-6">
                <div className="text-[1.8rem] xl:text-[2.1rem] 2xl:text-[2.3rem] w-[95%] text-text leading-10 font-semibold">
                  {title}
                </div>
                <div className="text-lg w-[420px] xl:w-[450px] 2xl:w-[500px] mt-3 text-text/80">
                  {subtitle.slice(0, 270)}{" "}
                  <span className="text-text/30 ms-2">see more . . .</span>
                </div>
              </div>
              <button className="button mt-auto w-60 ms-auto me-6  ">
                Learn more
              </button>

              {/* <button className=" mb-4 mt-auto me-5 bg-button xl:text-lg hover:bg-transparent duration-100 hover:text-button border-2 border-button px-4 py-2 ms-auto flex rounded-md text-white">
              Learn more
            </button> */}
            </div>
          </div>
        </motion.div>
    </motion.div>
  );
};

export default ProductCard;
