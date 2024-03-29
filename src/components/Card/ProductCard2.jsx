import React from "react";
import { motion } from "framer-motion";
import {useTranslation} from "react-i18next";

const ProductCard2 = ({ title, subtitle, id, img, delay }) => {
  const { t, i18n } = useTranslation();

  return (
    <motion.div
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
      }}
      className="relative shadow-primary/20 flex w-[350px] flex-col rounded-xl bg-bg bg-clip-border border border-text text-text shadow-md"
    >
      <div className="relative mx-4 -mt-6 h-48 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-bg shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <img src={img} className="object-center object-cover" alt="" />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {subtitle.slice(0, 110)}
          <span className="text-text/30"> learn more ...</span>
        </p>
      </div>
      <div className="p-6 pt-0">
        {/* <div
          data-ripple-light="true"
          type="button"
          className="select-none rounded-lg bg-[#268391] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-bg shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Read More
        </div> */}
        <button className="button-sm border-red-300">{t("BTN")}</button>
      </div>
    </motion.div>
  );
};

export default ProductCard2;
