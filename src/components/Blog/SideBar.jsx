import React, { useState } from "react";
import { TextInput } from "@mantine/core";

const SideBar = ({ setSearch, setCate }) => {
  const cate = [
    "All",
    "Technology",
    "Productivity",
    "Programming",
    "Marketing",
  ];
  //   const [search, setSearch] = useState();
  //   console.log("====================================");
  //   console.log();
  //   console.log("====================================");
  return (
    <div className="w-full">
      <div className="text-xl font-semibold py-4 text-center text-secondary bg-white">
        Blog Posts
      </div>
      <div className="mt-3 bg-white pb-3">
        <div className="text-xl text-secondary pt-5 ps-5 pb-3 font-semibold">
          Categories
        </div>
        {cate?.map((e) => (
          <div className="" onClick={() => setCate(e)}>
            <div className="text-xl py-2 ps-4 text-secondary hover:bg-[#eeee]">
              {e}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 bg-white pb-3">
        <div className="text-xl text-secondary pt-5 ps-5 pb-1 font-semibold">
          Search post
        </div>
        <div className="text-xl py-2 px-2">
          <TextInput
            onChange={(e) => setSearch(e.target.value)}
            variant="filled"
            size="md"
            radius="md"
            placeholder="Input placeholder"
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
