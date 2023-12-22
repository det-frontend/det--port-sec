import React, { useEffect, useState } from "react";
import logo from "../../assets/detlogo.png";
import List from "./List";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { useScroll } from "framer-motion";
import "../../index.css";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Nav = () => {
  const { scrollY } = useScroll();
  const [param, setParam] = useState();
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
  const [chg, setChg] = useState(false);

  return (
    <motion.div
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: "-100%" }}
      transition={{
        // stiffness: 400,
        delay: 0.2,
        duration: 0.8,
      }}
    >
      <div className="bgImg h-[85px] shadow-2xl shadow-primary/10 flex justify-center">
        <div className="w-[80%] items-center flex justify-between px-3">
          <img src={logo} className="h-16 ms-[-50px]" alt="err" />
          <div className="lg:flex items-center gap-3 hidden">
            {!(param == "/blog") &&
              navList.map((data) => (
                // console.log(data.active),
                <a href={data.link}>
                  <List
                    key={data.id}
                    active={data.active}
                    className="active"
                    {...data}
                  />
                </a>
              ))}

            {!(param == "/blog") ? (
              <Link onClick={() => setParam("/blog")} to={"/blog"}>
                {/* <div className="border-2 hover:bg-secondary duration-100 hover:text-white border-secondary p-5 text-lg py-2 rounded-md">
                  Blog
                </div> */}
                <button className="button">Blog</button>
              </Link>
            ) : (
              <Link onClick={() => setParam()} to={"/"}>
                {/* <div className="border-2 hover:bg-secondary duration-100 hover:text-white border-secondary p-5 text-lg py-2 rounded-md">
                  Back to Home
                </div> */}
                <button className="button">Back to Home</button>
              </Link>
            )}
          </div>
          {/* menu  */}
          <div onClick={() => setChg(!chg)} className="lg:hidden ms-auto">
            {chg ? (
              <MdClose className="text-4xl duration-100 text-primary" />
            ) : (
              <HiMenu className="text-4xl duration-100 text-primary" />
            )}
          </div>
          {/* {chg && !show ? ( */}
          <div
            className={`w-[90%] mx-auto lg:hidden ${
              chg ? "opacity-100 translate-y-[350px]" : "opacity-0"
            } mt-[-330px] z-30 inset-x-0 rounded-xl p-2 duration-500 bg-[#E4F8FF] backdrop-blur-md fixed`}
          >
            <ul className="list-none lg:hidden grid grid-cols-2 gap-2 text-button justify-end text-center items-center flex-col">
              {navList.map((e) => (
                <motion.a
                  href={e.link}
                  key={e.id}
                  // whileHover={{ scale: 1.2 }}
                  // key={e.id}
                  className="hover:text-secondary text-2xl justify-center duration-75 items-center font-semibold flex p-6 font-poppins"
                >
                  {/* <div className="flex me-2 text-2xl">{e.icon}</div> */}
                  {e.name}
                </motion.a>
              ))}
              <li>
                <Link onClick={() => setParam("/blog")} to={"/blog"}>
                  {/* <div className="border-2 hover:bg-secondary duration-100 hover:text-white border-secondary p-5 text-lg py-2 rounded-md">
                  Blog
                </div> */}
                  <button className="button">Blog</button>
                </Link>
              </li>
            </ul>
          </div>
          {/* menu end  */}
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
