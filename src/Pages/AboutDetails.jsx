import React from "react";
import { useTranslation } from "react-i18next";
const AboutDetails = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="  pb-[100px]">
      <section className=" mb-[50px] xl:mb-[100px]">
        <div className=" w-full pt-[100px] xl:pt-[170px]">
          <div className=" w-[90%] bg-[#151E2F] text-gray-200 border-text border-2 mx-auto p-10 rounded-lg mt-16">
            <h3 className=" text-center mb-3 md:mb-5 xl:mb-[3rem] text-2xl md:text-3xl xl:text-5xl font-semibold xl:font-bold">
              {t("HEAD.TITLE")}
            </h3>
            <span className=" text-justify text-lg md:text-xl leading-7 md:leading-8 xl:leading-10 xl:text-2xl">
              {t("HEAD.SPAN")}
            </span>
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
      </section>
      <section className=" mb-[200px] xl:mb-[270px]">
        <div className=" w-[90%] flex-col flex 2xl:flex-row gap-[3rem] xl:gap-[5rem] mx-auto">
          <div className=" w-full p-10 border-2 border-text rounded-lg bg-[#151E2F] text-gray-200">
            <h1 className=" text-3xl md:text-4xl xl:text-5xl text-center font-bold">
              {t("OUR_VISION.TITLE")}
            </h1>
            <ul className=" ml-[50px] mt-5 md:mt-8 xl:mt-10 text-xl xl:text-2xl list-disc xl:leading-10">
              <li className=" mb-3 md:mb-5 xl:mb-8">{t("OUR_VISION.OV_V1")}</li>
              <li className=" mb-3 md:mb-5 xl:mb-8">{t("OUR_VISION.OV_V2")}</li>
              <li className=" mb-3 md:mb-5 xl:mb-8">{t("OUR_VISION.OV_V3")}</li>
            </ul>
          </div>
          <div className=" w-full p-10 border-2 border-text rounded-lg bg-[#151E2F] text-gray-200">
            <h1 className=" text-3xl md:text-4xl xl:text-5xl text-center font-bold">
              {t("OUR_MISSION.TITLE")}
            </h1>
            <ul className=" ml-[50px] mt-5 md:mt-8 xl:mt-10 text-xl xl:text-2xl list-disc xl:leading-10">
              <li>{t("OUR_MISSION.OM_M1")}</li>
              <li>{t("OUR_MISSION.OM_M2")}</li>
              <li>{t("OUR_MISSION.OM_M3")}</li>
            </ul>
          </div>
        </div>
      </section>
      <section className=" mb-[120px]">
        <div className=" scrollbar w-[90%] h-[688px] bg-[#151E2F] mx-auto border-2 border-text rounded-lg overflow-y-scroll  text-gray-200 p-10 mt-[-10rem]">
          <h1 className=" text-3xl md:text-4xl xl:text-5xl font-bold">
            {t("OUR_PROJECT.TITLE")}
          </h1>
          <h3 className=" text-2xl xl:text-3xl mt-7 xl:mt-10 ml-10 xl:ml-16">
            {t("OUR_PROJECT.S_TITLE")}
          </h3>
          <div>
            <h4 className=" text-2xl md:text-3xl xl:text-4xl mt-7 xl:mt-10 ml-10 xl:ml-16 underline underline-offset-8 mb-6 md:mb-8 xl:mb-10 font-bold">
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
            <h4 className=" text-2xl md:text-3xl xl:text-4xl font-bold mt-6 md:mt-8 xl:mt-10 ml-10 xl:ml-16 underline underline-offset-8 mb-8 xl:mb-10">
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
            <h4 className=" text-2xl md:text-3xl xl:text-4xl font-bold mt-6 md:mt-8 xl:mt-10 ml-10 xl:ml-16 underline underline-offset-8 mb-8 xl:mb-10">
              {t("P_3.TITLE")}
            </h4>
            <span className=" text-lg md:text-2xl block   leading-8 xl:leading-10">
              {t("P_3.SPAN")}
            </span>
          </div>
          <div>
            <h4 className=" text-2xl md:text-3xl xl:text-4xl font-bold mt-6 md:mt-8 xl:mt-10 ml-10 xl:ml-16 underline underline-offset-8 mb-8 xl:mb-10">
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
            <h4 className=" text-2xl md:text-3xl xl:text-4xl font-bold mt-6 md:mt-8 xl:mt-10 ml-10 xl:ml-16 underline underline-offset-8 mb-8 xl:mb-10">
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
      </section>
      <section className=" mb-[100px]">
        <div className=" w-[90%] h-[788px] bg-[#151E2F] border-2 border-text mx-auto rounded-lg"></div>
      </section>
      <section className=" mb-[270px]">
        <div className=" w-[90%] flex flex-col xl:flex-row gap-[5rem] mx-auto">
          <div className=" w-full xl:w-1/2 p-10 border-2 border-text rounded-lg bg-[#151E2F] text-gray-200 h-[40rem] overflow-y-scroll">
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
          <div className=" w-full xl:w-1/2 p-10 border-2 border-text rounded-lg bg-[#151E2F] text-gray-200 h-[40rem] overflow-y-scroll">
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
        <div className=" w-[90%] h-[688px] bg-[#151E2F] mx-auto border-2 border-text rounded-lg overflow-y-scroll text-gray-200 p-10 mt-[-10rem]">
          <h1 className=" text-center text-3xl md:text-4xl xl:text-5xl p-3 xl:p-5 font-bold leading-[45px]">
            {t("TO_INVEST.HEAD_1")}
          </h1>
          <span className=" block mt-7 xl:mt-[3rem] text-lg xl:text-2xl leading-8 xl:leading-10">
            {t("TO_INVEST.SPAN_1")}
          </span>
          <span className="block mt-5 xl:mt-[2rem] text-xl xl:text-3xl font-semibold xl:font-bold">
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
  );
};

export default AboutDetails;
