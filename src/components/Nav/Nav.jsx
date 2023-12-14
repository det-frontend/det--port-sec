import React, { useEffect, useState } from "react";
import logo from "../../assets/detlogo.png";
import List from "./List";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { useScroll } from "framer-motion";
import "../../index.css";

const Nav = () => {
  const { scrollY } = useScroll();
  const current = scrollY.current;
  const navList = [
    {
      to: "home",
      id: 1,
      name: "Home",
      link: "/#home",
      offset: 0,
      active: current < 400 ? "active" : "",
    },
    {
      to: "service",
      id: 2,
      name: "Service",
      link: "/#service",
      offset: -120,
      active: current > 400 && current < 1100 ? "active" : "",
    },
    {
      to: "product",
      id: 3,
      name: "Product",
      link: "/#product",
      offset: -100,
      active: current > 1100 && current < 1800 ? "active" : "",
    },
    {
      to: "about",
      id: 4,
      name: "About",
      link: "/#about",
      offset: -120,
      active: current > 1800 && current < 2200 ? "active" : "",
    },
    {
      to: "contact",
      name: "Contact",
      link: "/#contact",
      offset: -180,
      active: current > 2200 ? "active" : "",
    },
  ];

  return (
    <div>
      <motion.div
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 1 }}
        initial={{ opacity: 0, y: "-100%" }}
        transition={{
          // stiffness: 400,
          delay: 0.2,
          duration: 0.8,
        }}
        className="bgImg h-[85px] shadow-2xl shadow-primary/10 flex justify-center"
      >
        {/* <div
        className={`bgImg h-[100px] delay-100 shadow-2xl shadow-primary/10 flex justify-center -translate-y-28`}
      > */}
        {/* <div
        className={`bgImg h-[100px] delay-150 shadow-2xl shadow-primary/10 flex justify-center ${
          !show && "-translate-y-28"
        }`}
      > */}
        <div className="w-[80%] items-center flex justify-between px-3">
          <img src={logo} className="h-16 ms-[-50px]" alt="err" />
          <div className="flex items-center gap-3">
            {navList.map((data) => (
              // console.log(data.active),
              <a href={data.link}>
                <List key={data.id} active={data.active} className="active" {...data} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Nav;
