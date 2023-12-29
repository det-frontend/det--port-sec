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
import coding from "../assets/coding.png";
import design from "../assets/logo-design.png";

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
import ProductCard2 from "../components/Card/ProductCard2";
import ServiceCard from "../components/Card/ServiceCard";
import lamp from "../assets/lamp.png";

const HomePage = () => {
  const [render, setRender] = useState(false);
  // const navigate = useNavigate();
  const { scrollY } = useScroll();
  const [typingStatus, setTypingStatus] = useState("Initializing");
  return (
    <div className="circuitBg bg-cover ">
      <section className="" id="home">
        <div className=" heroBg flex items-center overflow-hidden justify-center w-full h-[390px]  md:h-[560px] xl:h-[660px] pb-10 bg-cover bg-top">
          {/* <div className="  flex items-center overflow-hidden justify-center w-full h-[350px]  md:h-[560px] xl:h-[730px] bg-cover bg-top"> */}
          <div className="w-[90%] lg:ms-40 xl:mt-[30px] items-center 2xl:mt-[90px] flex justify-between">
            <div className="flex mt-[50px] pt-6 md:mt-0 lg:ms-8 w-full lg:w-[60%] h-[300px] flex-col items-start">
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
                  cursor={false}
                  // style={{ fontSize: "3em" }}
                  className="font-bold pt-10 h-20 md:text-[3em] text-2xl text-white"
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
                  cursor={false}
                  style={{ fontSize: "1.7em" }}
                  className="font-bold pt-2 h-20 md:pt-5 text-darkGreen"
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
                  <button className="button-wh ">About us</button>
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
                // delay: 1.2,
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
        <div className="  bg-[#151E2F] beeBg pt-8 md:pt-12 bg-cover ">
          {" "}
          <div className="mt-[-90px] lg:mt-[-125px] w-full gap-2 md:gap-10 flex justify-center">
            <ServiceCard img={lamp} text="Innovation" />
            <ServiceCard img={design} text="Designing" />
            <ServiceCard img={coding} text="Developing" />
          </div>
          <div className=" mt-[-80px] absolute">
            <img
              src={left}
              alt=""
              className="2xl:h-[250px] opacity-40 rotate-90  hidden lg:flex h-[200px] mt-auto mb-[-55px]"
            />
          </div>
          <div className=" mt-[-83px] right-0 absolute">
            <img
              src={left}
              alt=""
              className="2xl:h-[250px] opacity-40 rotate-180 hidden lg:flex h-[200px] mt-auto mb-[-55px]"
            />
          </div>
          <div className="w-[95%] xl:w-[90%] md:pt-5 mx-auto">
            {/* <TypeAnimation
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
              cursor={false}
              // style={{ fontSize: "2.3em" }}
              className="font-bold md:pt-10 text-[1.5rem] md:text-[2.3rem]  md:ms-11 text-darkGreen"
              repeat={Infinity}
            /> */}
            <motion.div
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 1 }}
              initial={{ opacity: 0, y: "100%" }}
              transition={{
                // stiffness: 400,
                // delay: e.delay,
                duration: 0.8,
              }}
              className="font-bold md:pt-10 pt-9 mx-auto flex text-center justify-center text-[1.8rem] md:text-[2.3rem] text-darkGreen"
            >
              Services that we offer
            </motion.div>
            <div className="md:mt-2 flex pb-3 md:pb-12 items-center">
              <Swiper
                slidesPerView={1}
                // spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  "@0.75": {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  "@1.00": {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  "@1.50": {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                // modules={[Pagination]}
                // cssMode={true}
                navigation={true}
                // pagination={true}
                // mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper h-[500px] md:h-[535px]"
              >
                {service.map((e) => (
                  <SwiperSlide className="pt-12 md:pt-16">
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
                      className="flex justify-center"
                    >
                      <Card id={e.id} {...e} />
                    </motion.div>
                    {/* </div> */}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* <div className="p-5" onClick={()=>Navigation.}>next</div> */}
        </div>
      </section>
      <section id="product">
        <div className=" flex-col items-center flex justify-center pt-5 md:pt-7">
          <div className="w-[90%] mt-5 mx-auto">
            <motion.div
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 1 }}
              initial={{ opacity: 0, y: "100%" }}
              transition={{
                // stiffness: 400,
                // delay: e.delay,
                duration: 0.8,
              }}
              className=" flex justify-center text-center"
            >
              {/* <TypeAnimation
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
                cursor={false}
                className="font-bold md:pt-10 md:text-[2.3rem] h-24 text-[1.5rem] ms-3 flex mx-auto  md:ms-11 text-white"
                repeat={Infinity}
              /> */}
              <div className="font-bold mx-auto flex text-center justify-center text-[1.7rem] md:text-[2.8rem] text-white">
                Products that we provide
              </div>
            </motion.div>

            <div className="w-full  hidden md:flex flex-col items-center mt-10">
              {product.map((e) => (
                <ProductCard {...e} />
              ))}
            </div>
            <div className="w-full  flex md:hidden flex-col items-center mt-14">
              {product.map((e) => (
                <ProductCard2 {...e} />
              ))}
            </div>
          </div>
          <div className="overflow-hidden w-full pt-20 lg:pt-28">
            <ScrollX />
          </div>
        </div>
      </section>
      <section id="about" className="pt-5">
        <div className="flex flex-row justify-between pb-7  bg-[#151E2F] bg-cover overflow-hidden">
          <img
            src={left}
            alt=""
            className="2xl:h-[300px] hidden lg:flex h-[200px] mt-auto mb-[-55px]"
          />
          <div className="mt-10 flex w-[90%] lg:w-full mx-auto flex-col items-center">
            <motion.div
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 1 }}
              initial={{ opacity: 0, y: "100%" }}
              transition={{
                // stiffness: 400,
                // delay: e.delay,
                duration: 0.8,
              }}
              className="text-text font-semibold text-[1.9rem] md:text-[2.5rem] mb-3 text-center"
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
                className="w-[100%] havig md:text-2xl text-xl  text-center text-text/80"
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
                className="mb-4"
              >
                <button className="button mt-5">Learn more</button>
              </motion.div>
            </div>
          </div>
          <img
            src={right}
            alt=""
            className="2xl:h-[300px] hidden lg:flex h-[200px] mt-auto mb-[-55px]"
          />
        </div>
      </section>
      <section id="contact">
        <div className="pb-20 pt-5">
          <div className="mt-10 w-full overflow-hidden">
            <div className="text-white font-bold text-[3rem] text-center">
              Contact Us
            </div>
            <div className=" flex   justify-center">
              <motion.div
                viewport={{ once: true, margin: "200px" }}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{
                  // stiffness: 400,
                  duration: 0.8,
                }}
                className="w-[90%] lg:w-[90%] py-10 2xl:w-[80%] mt-5 lg:flex justify-around items-center backdrop-blur-md bg-darkBg/20 border-2 rounded-xl border-darkGreen "
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
                  className="bg-darkBg/10 backdrop-blur-md shadow-lg border-darkGreen border-2  shadow-darkBg/10  flex flex-col rounded-lg gap-3 p-8 mx-auto my-5  lg:m-0 w-[90%] md:w-[70%] lg:w-[45%]"
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
                  <div className=" me-8 justify-center  text-xl font-semibold hover:bg-transparent duration-100 hover:border-darkGreen hover:text-white border-[3px] w-full border-div px-4 py-2 flex rounded-md text-white">
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
                  className="bg-darkBg/10 border-2 border-darkGreen p-7 backdrop-blur-md shadow-lg shadow-darkBg/10 rounded-lg mx-auto my-5  lg:m-0 w-[90%] md:w-[70%] lg:w-[45%]"
                >
                  <div className="text-2xl text-white font-semibold">
                    Information
                  </div>
                  <div className="text-lg font-semibold text-white ">
                    Contact us and we'll get back to you within 24 hours.
                  </div>
                  <div className="flex flex-col mt-3 items-start gap-2">
                    <table cellPadding={10}>
                      <tr className="">
                        <td className="w-10 text-start">
                          <FaLocationDot className=" my-auto w-full text-white text-[20px]" />
                        </td>
                        <td className="text-lg md:text-xl  text-white">
                          No.15/1921, 12th Street, Paung Laung 2 Wardz,
                          Pyinmana, Naypyitaw
                        </td>
                      </tr>
                      <tr>
                        <td className="w-10 text-start">
                          <MdEmail className="my-auto w-full mr-auto text-white text-[30px]" />
                        </td>
                        <td className="text-lg lg:hidden md:text-xl  text-white">
                          {" "}
                          <a href="mailto:digitalengineeringtech.mm@gmail.com">
                            digitalengineeringtech .mm@gmail.com
                          </a>
                        </td>
                        <td className="text-lg md:text-xl hidden lg:flex text-white">
                          {" "}
                          <a href="mailto:digitalengineeringtech.mm@gmail.com">
                            digitalengineeringtech.mm@gmail.com
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="w-10 text-start">
                          <FaPhone className="my-auto w-full text-white text-[30px]" />
                        </td>
                        <td className="text-lg md:text-xl  text-white">
                          <a href="tel:+959988340001">+959-988-34-0001</a>
                        </td>
                      </tr>
                    </table>
                    {/* <div className="flex mt-3">
                      <div className="w-28 text-start bg-red-300">
                        <FaLocationDot className=" my-auto w-full text-white text-[30px]" />
                      </div>
                      <div className="text-lg md:text-xl md:font-semibold text-white">
                        No.15/1921, 12th Street, Paung Laung 2 Wardz, Pyinmana,
                        Naypyitaw
                      </div>
                    </div>
                    <div className="flex mt-3 ">
                      <div className="w-20 text-start bg-red-300">
                        <MdEmail className="my-auto w-full mr-auto text-white text-[30px]" />
                      </div>
                      <div className="text-lg md:text-xl md:font-semibold text-white">
                        <a href="mailto:digitalengineeringtech.mm@gmail.com">
                          digitalengineeringtech.mm@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex mt-3">
                      <div className="w-20 text-start bg-red-300">
                        <FaPhone className="my-auto w-full text-white text-[30px]" />
                      </div>
                      <div className="text-lg md:text-xl md:font-semibold text-white">
                        <a href="tel:+959988340001">+959-988-34-0001</a>
                      </div>
                    </div> */}
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
