import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/detlogo.png";
import List from "./List";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { useScroll } from "framer-motion";
import "../../index.css";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { LanguagePicker } from "../LanguagePicker.jsx";
import { useTranslation } from "react-i18next";
import ThemeContext from "../../services/context.js";
import nav from "../../services/nav.js";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  const { state, setState } = useContext(ThemeContext);
  const { chg, setChg } = useContext(nav);

  useEffect(() => {
    setChg(false);
  }, [pathname]);

  // console.log(state);
  const { t, i18n } = useTranslation();
  const { scrollY } = useScroll();
  const [param, setParam] = useState();
  console.log("----------");
  console.log(window.location.pathname);
  console.log("----------");
  const current = scrollY.current;
  const navList = [
    {
      to: "home",
      id: 1,
      name: t("N_HOME"),
      link: "/#home",
      offset: 0,
      active: current < 400 ? "active" : "",
    },
    {
      to: "service",
      id: 2,
      name: t("N_SER"),
      link: "/#service",
      offset: -120,
      active: current > 400 && current < 1100 ? "active" : "",
    },
    {
      to: "product",
      id: 3,
      name: t("N_PRO"),
      link: "/#product",
      offset: -100,
      active: current > 1100 && current < 1800 ? "active" : "",
    },
    {
      to: "about",
      id: 4,
      name: t("N_ABOUT"),
      link: "/#about",
      offset: -120,
      active: current > 1800 && current < 2050 ? "active" : "",
    },
    {
      to: "contact",
      name: t("N_CONTACT"),
      link: "/#contact",
      offset: -180,
      active: current > 2050 ? "active" : "",
    },
  ];
  // const [chg, setChg] = useState(false);
  console.log(window.location.pathname, "..................");
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
      className=""
    >
      <div className=" h-[85px] bg-[#19072B20] backdrop-blur-lg shadow-2xl  flex justify-center">
        <div className="w-[80%] items-center flex justify-between px-3">
          <img src={logo} className="h-16 ms-[-50px]" alt="err" />
          <div className="flex ">
            <div className="lg:flex items-center gap-3 hidden">
              {!(window.location.pathname == "/blog") &&
                !(window.location.pathname == "/aboutDetails") &&
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
              <Link to={"/"}>
                {window.location.pathname == "/aboutDetails" && (
                  <div className=" hover:border-2 duration-150 hover:border-text text-white bg-text/80 font-bold hover:bg-transparent hover:text-text duration-2000 p-5 text-lg py-2 rounded-md active:scale-105">
                    HOME
                  </div>
                )}
              </Link>
            </div>
            <div className="lg:flex hidden">
              <LanguagePicker />
            </div>
            {window.location.pathname === "/blog" ? (
              <Link onClick={() => setParam("/")} to={"/"}>
                {/* <Link> */}
                {/* <div className="border-2 hover:bg-secondary duration-100 hover:text-white border-secondary p-5 text-lg py-2 rounded-md">
                  Home
                </div> */}
                <button className="button ms-4">Home</button>
              </Link>
            ) : (
              <Link onClick={() => setParam("/blog")} to={"/blog"}>
                {/* <Link> */}
                {/* <div className="border-2 hover:bg-secondary duration-100 hover:text-white border-secondary p-5 text-lg py-2 rounded-md">
                  Blog
                </div> */}
                <button className="button ms-4">Blog</button>
              </Link>
            )}
          </div>

          {/* menu  */}
          <div onClick={() => setChg(!chg)} className="lg:hidden ms-auto">
            {chg ? (
              <MdClose className="text-4xl duration-100 text-text" />
            ) : (
              <HiMenu className="text-4xl duration-100 text-text" />
            )}
          </div>
          {/* {chg && !show ? ( */}
          {window.location.pathname == "/aboutDetails" && (
            <div
              className={`w-[90%] mx-auto lg:hidden  ${
                chg ? "opacity-100 translate-y-[250px]" : "opacity-0"
              } mt-[-330px] z-30 flex items-center justify-around inset-x-0 rounded-xl p-2 duration-500  bg-[#151E2F] border border-text fixed`}
            >
              <div className="w-[45%]">
                <Link to={"/"}>
                  {window.location.pathname == "/aboutDetails" && (
                    <div className=" hover:border-2 duration-150 w-full hover:border-text border-text border-2 text-white bg-text/80 font-bold hover:bg-transparent hover:text-text duration-2000 p-5 text-lg py-2 text-center rounded-md active:scale-105">
                      HOME
                    </div>
                  )}
                </Link>
              </div>
              <div className="w-[45%]">
                <LanguagePicker className="w-ful" />
              </div>
            </div>
          )}

          {/* other  */}
          {window.location.pathname != "/aboutDetails" && (
            <div
              className={`w-[93%] mx-auto lg:hidden  ${
                chg ? "opacity-100 translate-y-[340px]" : "opacity-0"
              } mt-[-330px] z-30 inset-x-0 rounded-xl p-2 duration-500 bg-[#151E2F] border border-text fixed`}
            >
              <ul className="list-none lg:hidden grid grid-cols-2 gap-2 text-text justify-end text-center items-center flex-col">
                {navList.map((e) => (
                  <motion.a
                    onClick={() => setChg(false)}
                    href={e.link}
                    key={e.id}
                    // whileHover={{ scale: 1.2 }}
                    // key={e.id}
                    className="hover:text-darkGreen text-xl justify-center duration-75 items-center font-semibold flex p-6 font-poppins"
                  >
                    {/* <div className="flex me-2 text-2xl">{e.icon}</div> */}
                    {e.name}
                  </motion.a>
                ))}
                <li className="lg:hidden ">
                  <LanguagePicker />
                </li>
                <li>
                  <Link onClick={() => setParam("/blog")} to={"/blog"}>
                    {/* <Link> */}
                    <div className="border-2 hover:bg-secondary duration-100 hover:text-white border-secondary p-5 text-lg py-2 rounded-md">
                      Blog
                    </div>
                    <button className="button">Blog</button>
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {/* menu end  */}
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
