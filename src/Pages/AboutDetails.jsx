import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import left from "../assets/left.png";
import right from "../assets/rightbutton.png";
import coding from "../assets/coding.png";
import design from "../assets/logo-design.png";
import ServiceCard from "../components/Card/ServiceCard";
import lamp from "../assets/lamp.png";

const AboutDetails = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { t } = useTranslation();

  return (
    <div className="">
      <section className="">
        <div className=" heroBg flex items-center overflow-hidden justify-center w-full h-[600px]  md:h-[520px] xl:h-[600px] md:pb-14 bg-cover bg-top">
          {/* <div className="  flex items-center overflow-hidden justify-center w-full h-[350px]  md:h-[560px] xl:h-[730px] bg-cover bg-top"> */}
          <div className="border border-text/20 bg-[#19072B20] backdrop-blur-lg text-gray-200 w-[80%] 3xl:w-[75%] xl:mt-[30px] flex-col gap-3 justify-center items-center py-10 rounded-xl   2xl:mt-[90px] flex">
            <div className="text-center w-[90%] flex justify-center items-center text-2xl mb-3 md:text-3xl xl:text-5xl font-semibold xl:font-bold">
              {t("HEAD.TITLE")}
            </div>
            <div className="text-center w-[90%] text-lg md:text-xl leading-7 md:leading-8 xl:leading-10 xl:text-2xl">
              {t("HEAD.SPAN")}
            </div>
          </div>
        </div>
      </section>

      <section id="service">
        <div className="  bg-[#151E2F] beeBg pt-8 md:pt-12 bg-cover ">
          {" "}
          <div className="mt-[-90px] lg:mt-[-125px] w-full gap-2 md:gap-10 flex justify-center">
            <ServiceCard img={lamp} text={t("SERVICE.3_CARD.INNO")} />
            <ServiceCard img={design} text={t("SERVICE.3_CARD.DESIGN")} />
            <ServiceCard img={coding} text={t("SERVICE.3_CARD.DEV")} />
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
          <div className="w-[95%] 3xl:w-[75%] xl:w-[90%]  mx-auto pb-20 pt-5">
            <div className=" w-full">
              <div className=" w-[90%] text-gray-200 mx-auto  rounded-lg mt-6 md:mt-16">
                {/* <h3 className=" text-center mb-3 md:mb-5 xl:mb-[3rem] text-2xl md:text-3xl xl:text-5xl font-semibold xl:font-bold">
                  {t("HEAD.TITLE")}
                </h3>
                <span className=" text-justify text-lg md:text-xl leading-7 md:leading-8 xl:leading-10 xl:text-2xl">
                  {t("HEAD.SPAN")}
                </span> */}
                <p className=" mt-3 md:mt-5 xl:mt-[2rem] text-xl md:text-2xl font-semibold xl:text-3xl xl:font-bold">
                  {t("HEAD.SUB_TITLE")}
                </p>
                <ul className=" ml-[30px] mt-3 md:ml-[50px] md:mt-5 text-lg md:text-xl xl:text-2xl list-disc leading-7 md:leading-8 xl:leading-10">
                  <li>{t("HEAD.M_1")}</li>
                  <li>{t("HEAD.M_2")}</li>
                  <li>{t("HEAD.M_3")}</li>
                  <li>{t("HEAD.M_4")}</li>
                </ul>
                <p className=" text-lg md:text-xl mt-2 md:mt-3 xl:text-2xl xl:mt-5">
                  {t("HEAD.CONCLUSION")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-12 mb-16">
        <div className=" w-[90%] flex-row gap-[3rem] xl:gap-[5rem] mx-auto">
          <div className=" w-full p-10 border border-text rounded-lg bg-[#151E2F] text-gray-200">
            <h1 className=" text-3xl md:text-4xl xl:text-5xl text-center font-bold">
              {t("OUR_VISION.TITLE")}
            </h1>
            <ul className=" md:ml-[50px] mt-5 md:mt-8 xl:mt-10 text-xl xl:text-2xl list-disc xl:leading-10">
              <li className=" mb-3 md:mb-5 xl:mb-8">{t("OUR_VISION.OV_V1")}</li>
              <li className=" mb-3 md:mb-5 xl:mb-8">{t("OUR_VISION.OV_V2")}</li>
              <li className=" mb-3 md:mb-5 xl:mb-8">{t("OUR_VISION.OV_V3")}</li>
            </ul>
          </div>
        </div>
        <div className=" w-[90%] mt-16 flex-row gap-[3rem] xl:gap-[5rem] mx-auto">
          <div className=" w-full p-10 border-2 border-text rounded-lg bg-[#151E2F] text-gray-200">
            <h1 className=" text-3xl md:text-4xl xl:text-5xl text-center font-bold">
              {t("OUR_MISSION.TITLE")}
            </h1>
            <ul className=" md:ml-[50px] mt-5 md:mt-8 xl:mt-10 text-xl xl:text-2xl list-disc xl:leading-10">
              <li>{t("OUR_MISSION.OM_M1")}</li>
              <li>{t("OUR_MISSION.OM_M2")}</li>
              <li>{t("OUR_MISSION.OM_M3")}</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className=" bg-[#151E2F] beeBg pt-8 md:pt-12 bg-cover mb-20">
          <div className="mb-5 text-gray-200 pt-4">
            <h1 className="text-2xl text-center md:text-4xl xl:text-5xl font-bold">
              {t("OUR_PROJECT.TITLE")}
            </h1>
            <h3 className=" text-2xl text-center xl:text-3xl xl:mt-6 md:pb-5">
              {t("OUR_PROJECT.S_TITLE")}
            </h3>
          </div>
          <div className="w-[90%] 3xl:w-[75%] xl:w-[90%]  mx-auto pb-6 md:pb-20">
            <div className=" scrollbar h-[688px] mx-auto  rounded-lg overflow-y-scroll  text-gray-200 p-10 pt-0 ">
              <div>
                <h4 className=" text-2xl md:text-3xl xl:text-4xl mt-3 xl:mt-10  underline underline-offset-8 mb-6 md:mb-8 xl:mb-10 font-bold">
                  {t("P_1.TITLE")}
                </h4>
                <span className=" text-lg md:text-xl xl:text-2xl block leading-8 xl:leading-10">
                  {t("P_1.SPAN")}
                </span>
                <span className=" text-xl xl:text-2xl block mt-2 xl:mt-3 leading-8 xl:leading-10">
                  {t("P_1.SPAN_2")}
                </span>
              </div>
              <div>
                <h4 className=" text-2xl md:text-3xl xl:text-4xl font-bold mt-6 md:mt-8 xl:mt-10 underline underline-offset-8 mb-8 xl:mb-10">
                  {t("P_2.TITLE")}
                </h4>
                <span className=" text-lg md:text-2xl block leading-8 xl:leading-10">
                  {t("P_2.SPAN")}
                </span>
                <span className=" text-lg md:text-2xl block mt-3 leading-8 xl:leading-10">
                  {t("P_2.SPAN_2")}
                </span>
              </div>
              <div>
                <h4 className=" text-2xl md:text-3xl xl:text-4xl font-bold mt-6 md:mt-8 xl:mt-10  underline underline-offset-8 mb-8 xl:mb-10">
                  {t("P_3.TITLE")}
                </h4>
                <span className=" text-lg md:text-2xl block   leading-8 xl:leading-10">
                  {t("P_3.SPAN")}
                </span>
              </div>
              <div>
                <h4 className=" text-2xl md:text-3xl xl:text-4xl font-bold mt-6 md:mt-8 xl:mt-10  underline underline-offset-8 mb-8 xl:mb-10">
                  {t("P_4.TITLE")}
                </h4>
                <span className=" text-lg md:text-2xl block leading-8 xl:leading-10">
                  {t("P_4.SPAN")}
                </span>
                <span className=" text-lg md:text-2xl block mt-3 leading-8 xl:leading-10">
                  {t("P_4.SPAN_2")}
                </span>
              </div>
              <div>
                <h4 className=" text-2xl md:text-3xl xl:text-4xl font-bold mt-6 md:mt-8 xl:mt-10  underline underline-offset-8 mb-8 xl:mb-10">
                  {t("P_5.TITLE")}
                </h4>
                <span className=" text-lg md:text-2xl block leading-8 xl:leading-10">
                  {t("P_5.SPAN")}
                </span>
                <span className=" text-lg md:text-2xl block mt-3 leading-8 xl:leading-10">
                  {t("P_5.SPAN_2")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" mb-[80px]">
        <div className=" w-[90%] flex flex-col xl:flex-row gap-[5rem] mx-auto">
          <div className=" w-full p-10 border-2 border-text rounded-lg bg-[#151E2F] text-gray-200 h-[40rem] overflow-y-scroll">
            <h1 className=" text-3xl md:4xl xl:text-5xl font-bold text-center">
              {t("IOT_SERVICE.TITLE")}
            </h1>
            <ul className=" list-square">
              <li>
                <div className=" mt-8 xl:mt-10">
                  <h3 className=" text-2xl xl:text-4xl font-bold underline underline-offset-[12px] mb-8 xl:mb-10 ml-7">
                    {t("IOT_S_1.TITLE")}
                  </h3>
                  <span className=" text-lg xl:text-2xl leading-8 xl:leading-10">
                    {t("IOT_S_1.SPAN")}
                  </span>
                </div>
              </li>
              <li>
                <div className=" mt-8 xl:mt-10">
                  <h3 className=" text-2xl xl:text-4xl font-bold underline underline-offset-[12px] mb-8 xl:mb-10 ml-7">
                    {t("IOT_S_2.TITLE")}
                  </h3>
                  <span className=" text-xl xl:text-2xl leading-8 xl:leading-10">
                    {t("IOT_S_2.SPAN")}
                  </span>
                </div>
              </li>
              <li>
                <div className=" mt-8 xl:mt-10">
                  <h3 className=" text-2xl xl:text-4xl font-bold underline underline-offset-[12px] mb-8 xl:mb-10 ml-7">
                    {t("IOT_S_3.TITLE")}
                  </h3>
                  <span className=" text-lg xl:text-2xl leading-8 xl:leading-10">
                    {t("IOT_S_3.SPAN")}
                  </span>
                </div>
              </li>
              <li>
                <div className=" mt-8 xl:mt-10">
                  <h3 className=" text-2xl xl:text-4xl font-bold underline underline-offset-[12px] mb-8 xl:mb-10 ml-7">
                    {t("IOT_S_4.TITLE")}
                  </h3>
                  <span className=" text-lg xl:text-2xl leading-8 xl:leading-10">
                    {t("IOT_S_4.SPAN")}
                  </span>
                </div>
              </li>
              <li>
                <div className=" mt-8 xl:mt-10">
                  <h3 className=" text-2xl xl:text-4xl font-bold underline underline-offset-[12px] mb-8 xl:mb-10 ml-7">
                    {t("IOT_S_5.TITLE")}
                  </h3>
                  <span className=" text-lg xl:text-2xl leading-8 xl:leading-10">
                    {t("IOT_S_5.SPAN")}
                  </span>
                </div>
              </li>
              <li>
                <div className=" mt-8 xl:mt-10">
                  <h3 className=" text-2xl xl:text-4xl font-bold underline underline-offset-[12px] mb-8 xl:mb-10 ml-7">
                    {t("IOT_S_6.TITLE")}
                  </h3>
                  <span className=" text-lg xl:text-2xl leading-8 xl:leading-10">
                    {t("IOT_S_6.SPAN")}
                  </span>
                </div>
              </li>
              <li>
                <div className=" mt-8 xl:mt-10">
                  <h3 className=" text-2xl xl:text-4xl font-bold underline underline-offset-[12px] mb-8 xl:mb-10 ml-7">
                    {t("IOT_S_7.TITLE")}
                  </h3>
                  <span className=" text-lg xl:text-2xl leading-8 xl:leading-10">
                    {t("IOT_S_7.SPAN")}
                  </span>
                  <span className=" text-xl xl:text-2xl leading-8 xl:leading-10 block">
                    {t("IOT_S_7.SPAN_2")}
                  </span>
                  <span className=" text-xl xl:text-2xl leading-8 xl:leading-10 block">
                    {t("IOT_S_7.SPAN_3")}
                  </span>
                  <span className=" text-xl xl:text-2xl leading-8 xl:leading-10 block">
                    {t("IOT_S_7.SPAN_4")}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className=" mb-[80px]">
        <div className=" w-[90%] flex flex-col xl:flex-row gap-[5rem] mx-auto">
          <div className=" w-full  p-10 border-2 border-text rounded-lg bg-[#151E2F] text-gray-200 h-[40rem] overflow-y-scroll">
            <h1 className=" text-3xl md:text-4xl xl:text-5xl font-bold text-center">
              {t("OTHER_IT_S.TITLE")}
            </h1>
            <div className=" text-2xl xl:text-3xl mt-10 ml-6 leading-10 xl:leading-[3rem]">
              <ul className=" list-square">
                <li>{t("OTHER_IT_S.IT_S_T_1")}</li>
                <li>{t("OTHER_IT_S.IT_S_T_2")}</li>
                <li>{t("OTHER_IT_S.IT_S_T_3")}</li>
                <li>{t("OTHER_IT_S.IT_S_T_4")}</li>
                <li>{t("OTHER_IT_S.IT_S_T_5")}</li>
              </ul>
            </div>
            <div className=" mt-8 xl:mt-10 text-2xl xl:text-3xl font-bold text-center leading-10 xl:leading-[3rem]">
              <h3>{t("BENEFITS_IOT.TITLE")}</h3>
              {/* <h3>{t("BENEFITS_IOT.TITLE_2")}</h3> */}
            </div>
            <div className=" mt-8 xl:mt-10 text-xl xl:text-2xl leading-8 xl:leading-10">
              <span>{t("BENEFITS_IOT.SPAN")}</span>
              <ul className=" mt-8 xl:mt-10 ml-6 list-square">
                <li className=" mb-2 xl:mb-3">{t("BENEFITS_IOT.B_1")}</li>
                <li className=" mb-2 xl:mb-3">{t("BENEFITS_IOT.B_2")}</li>
                <li className=" mb-2 xl:mb-3">{t("BENEFITS_IOT.B_3")}</li>
                <li className=" mb-2 xl:mb-3">{t("BENEFITS_IOT.B_4")}</li>
              </ul>
              <span>{t("BENEFITS_IOT.SPAN_2")}</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" bg-[#151E2F] beeBg pt-8 md:pt-12 bg-cover pb-10">
          <h1 className="text-gray-200 pb-6 text-center text-3xl md:text-4xl xl:text-4xl p-3 xl:p-5 font-bold leading-[45px]">
            {t("TO_INVEST.HEAD_1")}
          </h1>
          <section>
            <div className=" w-[90%] h-[688px] mx-auto  rounded-lg overflow-y-scroll text-gray-200 md:p-10">
              <span className=" block text-lg xl:text-2xl leading-8 xl:leading-10">
                {t("TO_INVEST.SPAN_1")}
              </span>
              <span className="block text-xl xl:mt-[2rem] xl:text-3xl font-semibold xl:font-bold">
                {t("TO_INVEST.SPAN_2")}
              </span>
              <ul className=" list-square ml-[4rem] xl:ml-[7rem] mt-5 xl:mt-[2rem] text-lg xl:text-2xl leading-8 xl:leading-[3rem]">
                <li>{t("TO_INVEST.SPAN2_LI1")}</li>
                <li>{t("TO_INVEST.SPAN2_LI2")}</li>
                <li>{t("TO_INVEST.SPAN2_LI3")}</li>
              </ul>
              <span className=" block mt-5 xl:mt-[2rem] text-xl xl:text-3xl font-semibold xl:font-bold">
                {t("TO_INVEST.SPAN_3")}
              </span>
              <ul className=" list-square ml-[4rem] xl:ml-[7rem] mt-5 xl:mt-[2rem] text-lg xl:text-2xl leading-8 xl:leading-[3rem]">
                <li>{t("TO_INVEST.SPAN3_LI1")}</li>
                <li>{t("TO_INVEST.SPAN3_LI2")}</li>
                <li>{t("TO_INVEST.SPAN3_LI3")}</li>
                <li>{t("TO_INVEST.SPAN3_LI4")}</li>
                <li>{t("TO_INVEST.SPAN3_LI5")}</li>
              </ul>
              <span className="block mt-5 xl:mt-[2rem] text-lg xl:text-2xl leading-8 xl:leading-10">
                {t("TO_INVEST.SPAN_4")}
              </span>
              <span className="block mt-5 xl:mt-[2rem] text-lg xl:text-2xl leading-8 xl:leading-10">
                {t("TO_INVEST.SPAN_5")}
              </span>
              <span className="block mt-5 ml:mt-[2rem] text-lg xl:text-2xl leading-8 xl:leading-10">
                {t("TO_INVEST.SPAN_6")}
              </span>
              <h1 className=" text-center text-2xl xl:text-4xl font-bold mt-[2rem] xl:mt-[5rem] leading-10">
                {t("TO_INVEST.HEAD_2")}
              </h1>
              <span className=" block mt-8 xl:mt-[3rem] text-lg xl:text-2xl leading-8 xl:leading-10">
                {t("TO_INVEST.H2_SPAN")}
              </span>
              <h1 className=" text-center text-2xl xl:text-4xl font-bold mt-[2rem] xl:mt-[5rem]">
                {t("TO_INVEST.HEAD_3")}
              </h1>
              <span className=" block mt-8 xl:mt-[3rem] text-lg xl:text-2xl leading-8 xl:leading-10">
                {t("TO_INVEST.H3_SPAN_1")}
              </span>
              <span className=" block mt-8 xl:mt-[3rem] text-xl xl:text-2xl leading-8 xl:leading-10">
                {t("TO_INVEST.H3_SPAN_2")}
              </span>
              <ul className=" list-square ml-[4rem] xl:ml-[7rem] mt-5 xl:mt-[2rem] text-lg xl:text-2xl leading-9 xl:leading-[3rem]">
                <li>{t("TO_INVEST.H3_LI1")}</li>
                <li>{t("TO_INVEST.H3_LI2")}</li>
                <li>{t("TO_INVEST.H3_LI3")}</li>
                <li>{t("TO_INVEST.H3_LI4")}</li>
                <li>{t("TO_INVEST.H3_LI5")}</li>
                <li>{t("TO_INVEST.H3_LI6")}</li>
                <li>{t("TO_INVEST.H3_LI7")}</li>
              </ul>
              <span className=" block mt-9 xl:mt-[3rem] text-lg xl:text-2xl leading-8 xl:leading-10">
                {t("TO_INVEST.H3_SPAN_3")}
              </span>
              <span className=" block mt-9 xl:mt-[3rem] text-lg xl:text-2xl leading-8 xl:leading-10">
                {t("TO_INVEST.H3_SPAN_4")}
              </span>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default AboutDetails;
