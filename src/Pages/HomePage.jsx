import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Card from "../components/Card/Card";
import service from "../content/service";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as Custom } from "https://cdn.jsdelivr.net/npm/swiper@11/swiper.min.mjs";
import { TypeAnimation } from "react-type-animation";
import { PasswordInput, TextInput, Textarea } from "@mantine/core";
import { FaLocationDot } from "react-icons/fa6";
import left from "../assets/left.png";
import right from "../assets/rightbutton.png";
import { useNavigate } from "react-router";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import ProductCard from "../components/Card/ProductCard";
import product from "../content/product";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import ScrollX from "../components/ScrollX";
import { Link, NavLink } from "react-router-dom";

const HomePage = () => {
  const [render, setRender] = useState(false);
  // const navigate = useNavigate();
  const { scrollY } = useScroll();
  const [typingStatus, setTypingStatus] = useState("Initializing");
  return (
    <div className="circuitBg bg-cover ">
      <section className="" id="home">
        <div className=" heroBg flex items-center overflow-hidden justify-center w-full h-[560px] xl:h-[730px] bg-cover bg-top">
          <div className="w-[90%] ms-40 xl:mt-[30px] items-center 2xl:mt-[70px] flex justify-between">
            <div className="flex  ms-8 w-[60%] h-[300px] flex-col items-start">
              {/* <motion.div
                viewport={{ once: true }}
                whileInView={{ x: 1, opacity: 1 }}
                initial={{ x: "-100%", opacity: 0 }}
                transition={{
                  type: "spring",
                  // stiffness: 50,
                  delay: 0.2,
                  duration: 2,
                }}
                className="w-full mx-auto leading-10 pt-[100px]  mb-6 text-[3rem] header text-white"
              >
                Everything in one App
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                whileInView={{ x: 1, opacity: 1 }}
                initial={{ x: "-100%", opacity: 0 }}
                transition={{
                  type: "spring",
                  // stiffness: 50,
                  delay: 0.5,
                  duration: 2,
                }}
                className="flex justify-center text-[2.3rem] text-white items-center"
              >
                Control Your Home With DET Products
              </motion.div> */}
              <motion.div
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 1 }}
                initial={{ opacity: 0, x: "-100%" }}
                transition={{
                  type: "spring",
                  // stiffness: 50,
                  // delay: 0.8,
                  duration: 2,
                }}
                className="text-white  flex flex-col"
              >
                <TypeAnimation
                  // cursor={false}
                  sequence={[
                    () => {
                      setTypingStatus("Typing...");
                    },
                    "Everything in one App,",
                    () => {
                      setTypingStatus("Done Typing");
                    },
                    6800,
                    () => {
                      setTypingStatus("Deleting...");
                    },
                    "",
                    () => {
                      setTypingStatus("Done Deleting");
                    },
                    () => {
                      setTypingStatus("Typing...");
                    },
                    "For Simple, Secure And Smart",
                    () => {
                      setTypingStatus("Done Typing");
                    },
                    5000,
                    () => {
                      setTypingStatus("Deleting...");
                    },
                    "",
                    () => {
                      setTypingStatus("Done Deleting");
                    },
                    () => {
                      setTypingStatus("Typing...");
                    },
                    "Use Smart Devices",
                    () => {
                      setTypingStatus("Done Typing");
                    },
                    5500,
                    () => {
                      setTypingStatus("Deleting...");
                    },
                    "",
                    () => {
                      setTypingStatus("Done Deleting");
                    },
                  ]}
                  speed={65}
                  style={{ fontSize: "3em" }}
                  className="font-bold pt-10 text-white"
                  repeat={Infinity}
                />
                <TypeAnimation
                  sequence={[
                    1500,
                    () => {
                      setTypingStatus("Typing...");
                    },
                    "Control Your Home With DET Products...",
                    () => {
                      setTypingStatus("Done Typing");
                    },
                    3500,
                    () => {
                      setTypingStatus("Deleting...");
                    },
                    "",
                    () => {
                      setTypingStatus("Done Deleting");
                    },
                    1900,
                    () => {
                      setTypingStatus("Typing...");
                    },
                    "Use DET Products",
                    () => {
                      setTypingStatus("Done Typing");
                    },
                    3900,
                    () => {
                      setTypingStatus("Deleting...");
                    },
                    "",
                    () => {
                      setTypingStatus("Done Deleting");
                    },
                    1500,
                    () => {
                      setTypingStatus("Typing...");
                    },
                    "To Become Smart Life",
                    () => {
                      setTypingStatus("Done Typing");
                    },
                    3800,
                    () => {
                      setTypingStatus("Deleting...");
                    },
                    "",
                    () => {
                      setTypingStatus("Done Deleting");
                    },
                  ]}
                  speed={65}
                  style={{ fontSize: "1.7em" }}
                  className="font-bold pt-5 text-white"
                  repeat={Infinity}
                />
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 1 }}
                initial={{ opacity: 0, x: "-100%" }}
                transition={{
                  type: "spring",
                  // stiffness: 50,
                  // delay: 1,
                  duration: 2,
                }}
                className="mt-5 "
              >
                {/* <div
                  whileHover={{
                    scale: 1.1,
                  }}
                  className=" border-2 hover:bg-white hover:text-primary duration-150 border-white text-white rounded-md mt-4 px-4 text-2xl py-2"
                >
                  About us
                </div> */}
                <a href="/#about">
                  <button className="button-wh mt-5 border-red-300">
                    About us
                  </button>
                </a>
              </motion.div>
            </div>
            {/* lottie */}
            <motion.div
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 1 }}
              initial={{ opacity: 0, x: "100%" }}
              transition={{
                type: "spring",
                // stiffness: 30,
                delay: 1.2,
                duration: 2,
              }}
              className=" ms-[-200px] w-[50%] "
            >
              <div className="xl:flex hidden">
                <lottie-player
                  src="https://lottie.host/c2501c80-a1ae-4410-b609-371f97519054/6rX8wwTPN9.json"
                  background="transparent"
                  speed="1"
                  style={{
                    width: "600px",
                    height: "600px",
                    // marginTop: "-170px",
                    // marginRight: "-50px",
                  }}
                  direction="1"
                  mode="normal"
                  loop
                  autoplay
                  className=""
                ></lottie-player>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="service">
        <div className=" ps-5  sectionBg pt-12 bg-cover ">
          <div className=" w-[90%] pt-5 mx-auto">
            <TypeAnimation
              sequence={[
                1000,
                () => {
                  setTypingStatus("Typing...");
                },
                "Services that we offer",
                () => {
                  setTypingStatus("Done Typing");
                },
                5000,
                () => {
                  setTypingStatus("Deleting...");
                },
                "",
                () => {
                  setTypingStatus("Done Deleting");
                },
              ]}
              speed={65}
              style={{ fontSize: "2.3em" }}
              className="font-bold pt-10   ms-11 text-text"
              repeat={Infinity}
            />
            <div className="mt-2 xl:flex hidden ps-3 pb-12 items-center">
              <Swiper
                slidesPerView={3}
                // spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                // modules={[Pagination]}
                // cssMode={true}
                navigation={true}
                // pagination={true}
                // mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper h-[500px]"
              >
                {service.map((e) => (
                  <SwiperSlide className="pt-16 ps-5">
                    {/* <div className="" ref={ref}> */}
                    <motion.div
                      viewport={{ once: true, margin: "250px" }}
                      whileInView={{ opacity: 1, y: 1 }}
                      initial={{ opacity: 0, y: "100%" }}
                      transition={{
                        type: "spring",
                        stiffness: 40,
                        delay: e.delay,
                        duration: 2,
                      }}
                      className=""
                    >
                      <Card id={e.id} {...e} />
                    </motion.div>
                    {/* </div> */}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="mt-8 xl:hidden flex ps-3 pb-12">
              <Swiper
                slidesPerView={2}
                // spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                // modules={[Pagination]}
                // cssMode={true}
                navigation={true}
                // pagination={true}
                // mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper h-[500px]"
              >
                {service.map((e) => (
                  <SwiperSlide className="pt-16 ps-5">
                    <motion.div
                      viewport={{ once: true }}
                      whileInView={{ opacity: 1, y: 1 }}
                      initial={{ opacity: 0, y: "100%" }}
                      transition={{
                        type: "spring",
                        stiffness: 40,
                        delay: e.delay,
                        duration: 2,
                      }}
                      className=""
                    >
                      <Card id={e.id} {...e} />
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* <div className="p-5" onClick={()=>Navigation.}>next</div> */}
        </div>
      </section>
      <section id="product">
        <div className=" flex-col items-center flex justify-center pb-12 pt-12">
          <div className="w-[90%] mt-5 mx-auto">
            <TypeAnimation
              sequence={[
                1000,
                () => {
                  setTypingStatus("Typing...");
                },
                "Products that we provide",
                () => {
                  setTypingStatus("Done Typing");
                },
                5000,
                () => {
                  setTypingStatus("Deleting...");
                },
                "",
                () => {
                  setTypingStatus("Done Deleting");
                },
              ]}
              speed={65}
              style={{ fontSize: "2.3em" }}
              className="font-bold pt-10  ms-11 text-white"
              repeat={Infinity}
            />
            <div className="w-full flex flex-col items-center mt-10">
              {product.map((e) => (
                <ProductCard {...e} />
              ))}
            </div>
          </div>
          {/* <div className="overflow-hidden w-full pt-32">
            <ScrollX />
          </div> */}
        </div>
      </section>
      <section id="about" className="pt-10 ">
        <div className="flex flex-row justify-between pb-7 sectionBg bg-cover overflow-hidden">
          <img
            src={left}
            alt=""
            className="2xl:h-[300px] h-[200px] mt-auto mb-[-55px]"
          />
          <div className="mt-10 flex flex-col items-center">
            <motion.div
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 1 }}
              initial={{ opacity: 0, y: "100%" }}
              transition={{
                // stiffness: 400,
                // delay: e.delay,
                duration: 0.8,
              }}
              className="text-text font-semibold text-[2.5rem] mb-3 text-center"
            >
              About Us
            </motion.div>
            <div className="flex flex-col items-center gap-1">
              {/* <motion.div
                viewport={{ once: true }}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{
                  // stiffness: 400,
                  // delay: e.delay,
                  duration: 0.8,
                }}
                className="text-text font-bold xl:font-extrabold text-[3rem] text-center"
              >
                For Simple, Secure And Smart
              </motion.div> */}
              <motion.div
                viewport={{ once: true }}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{
                  // stiffness: 400,
                  delay: 0.2,
                  duration: 0.8,
                }}
                className="w-[100%] havig text-2xl  text-center text-text/80"
              >
                Our company, initially named Digital Engineering Group, was
                established in December 2019 and later changed and registered to
                Digital Engineering Tech Ltd in November 2021. We offer a
                variety of services with a primary focus on IOT Engineering and
                other IT services. Throughout our journey, our company has
                achieved several significant milestones
              </motion.div>
              {/* <motion.div
                viewport={{ once: true }}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{
                  // stiffness: 400,
                  delay: 0.4,
                  duration: 0.8,
                }}
                className="text-text font-semibold text-[2rem] text-center"
              >
                Use DET Products
              </motion.div> */}
              <motion.div
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 1 }}
                initial={{ opacity: 0, y: "-100%" }}
                transition={{
                  // stiffness: 400,
                  delay: 0.4,
                  duration: 0.8,
                }}
                className=""
              >
                <button className="button mt-5">Learn more</button>
              </motion.div>
            </div>
          </div>
          <img
            src={right}
            alt=""
            className="2xl:h-[300px] h-[200px] mt-auto mb-[-55px]"
          />
        </div>
      </section>
      <section id="contact">
        <div className="h-[550px]">
          <div className="mt-10 w-full overflow-hidden">
            <div className="text-white font-bold text-[3rem] text-center">
              Contact Us
            </div>
            <div className=" flex justify-center">
              <motion.div
                viewport={{ once: true, margin: "200px" }}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{
                  // stiffness: 400,
                  duration: 0.8,
                }}
                className="w-[90%] lg:w-[90%] 2xl:w-[80%] mt-5 flex justify-around items-center backdrop-blur-sm bg-text/40 border-2 rounded-xl border-div  h-[400px]"
              >
                <motion.div
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: "-100%" }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    delay: 0.7,
                    duration: 2,
                  }}
                  className="bg-text/20 backdrop-blur-md shadow-lg border-div border-2  shadow-text/20 w-[45%] flex flex-col rounded-lg gap-3 p-8 "
                >
                  <div className="flex justify-between">
                    <TextInput
                      className="w-[48%]"
                      variant="filled"
                      size="lg"
                      placeholder="First Name"
                    />
                    <TextInput
                      className="w-[48%]"
                      variant="filled"
                      size="lg"
                      placeholder="Last Name"
                    />
                  </div>
                  <TextInput
                    variant="filled"
                    size="lg"
                    placeholder="Enter your email"
                  />
                  <Textarea
                    variant="filled"
                    size="lg"
                    placeholder="Text .... "
                    minRows={5}
                  />
                  <div className=" me-8 justify-center bg-div text-xl font-semibold hover:bg-transparent duration-100 hover:border-white hover:text-white border-[3px] w-full border-div px-4 py-2 flex rounded-md text-white">
                    Submit
                  </div>
                </motion.div>
                <motion.div
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: "100%" }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    delay: 1,
                    duration: 3,
                  }}
                  className="bg-text/20 border-2 border-div p-7 backdrop-blur-md shadow-lg shadow-text/20 rounded-lg w-[45%]"
                >
                  <div className="text-2xl text-white font-semibold">
                    Information
                  </div>
                  <div className="text-lg font-semibold text-white ">
                    Contact us and we'll get back to you within 24 hours.
                  </div>
                  <div className="flex flex-col mt-3 items-start gap-2">
                    <div className="flex mt-3">
                      <FaLocationDot className="me-3 my-auto w-20 text-white text-[30px]" />
                      <div className="text-xl font-semibold text-white">
                        No.15/1921, 12th Street, Paung Laung 2 Wardz, Pyinmana,
                        Naypyitaw
                      </div>
                    </div>
                    <div className="flex mt-3">
                      <MdEmail className="me-3 my-auto w-12 text-white text-[30px]" />
                      <div className="text-xl font-semibold text-white">
                        <a href="mailto:digitalengineeringtech.mm@gmail.com">
                          digitalengineeringtech.mm@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex mt-3">
                      <FaPhone className="me-3 my-auto w-12 text-white text-[25px]" />
                      <div className="text-xl font-semibold text-white">
                        <a href="tel:+959988340001">+959-988-34-0001</a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
// import React from 'react'

// const HomePage = () => {
//   return (
//     <div className='pt-[300px]'>HomePage</div>
//   )
// }

// export default HomePage
