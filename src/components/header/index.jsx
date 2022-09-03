import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";
import { BiComment } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import avatar from "../../assets/avatar.jpg";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-16 pl-5 pr-10 relative">
      <div className="flex text-2xl space-x-5">
        <HiMenuAlt2 className="cursor-pointer" />
        <FiSearch className="cursor-pointer" />
      </div>
      <div className="flex items-center space-x-5">
        <div className="text-2xl flex gap-5">
          <BiComment className="cursor-pointer" />
          <GrNotification className="cursor-pointer" />
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <Image src={avatar} className="rounded-full" width={30} height={30} />
          Hi, <span className="font-bold">Prince</span>
          <IoMdArrowDropdown
            className={`${open ? "rotate-180" : "rotate-0"} duration-300`}
          />
          <div
            className={`bg-white absolute right-5 top-16 w-40 rounded-md divide-y py-2 ${
              open ? "block" : "hidden"
            }`}
          >
            <ul className="">
              <li className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">
                Profile
              </li>
              <li className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">
                Settings
              </li>
            </ul>
            <div className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">
              Log out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
