import React, { useEffect, useState } from "react";
import blogData from "../content/blog";
import Card from "../components/Blog/Card";
import SideBar from "../components/Blog/SideBar";

const BlogPage = () => {
  const [search, setSearch] = useState();
  const [cate, setCate] = useState();
  useEffect(() => {
    setCate("");
  }, [search]);

  console.log("====================================");
  console.log(cate);
  console.log("====================================");

  return (
    <div className="bg-[#eee] h-screen flex justify-center pt-20">
      <div className="flex w-[90%] justify-center">
        <div className=" mt-5 flex justify-center w-[20%]">
          <SideBar setCate={setCate} setSearch={setSearch} />
        </div>
        <div className="overflow-y-scroll no-scrollbar pb-40 flex justify-center  w-[80%] xl:w-[67%]">
          <div className=" ps-10 pt-5 flex-wrap flex gap-10">
            {blogData
              ?.filter((item) => {
                if (!search) {
                  return item;
                } else {
                  //   setCate(null);
                  return item.title
                    ?.toLowerCase()
                    .includes(search?.toLowerCase());
                }
              })
              ?.filter((item) => {
                if (!cate) {
                  return item;
                } else if (cate == "All") {
                  return item;
                } else {
                  return item.category == cate;
                }
              })
              .map((data, index) => (
                <Card key={index} {...data} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
