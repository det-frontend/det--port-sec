import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";

const Layout = () => {
  const [show, setShow] = useState(true);
  const [chg, setChg] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
        setChg(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };
  // console.log(show);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <>
      {/* <div className={`fixed duration-500  w-full ${!show&&"-translate-y-32 delay-500"}`}> */}
      <div className={`fixed duration-500 z-50  w-full `}>
        <Nav />
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
