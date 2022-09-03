import React, { useState } from "react";
import { sidebarLinks } from "./sidebarLinks";
import { SiShopware } from "react-icons/si";
import { useAppContext } from "../../hooks/useAppContext";

const Sidebar = () => {
  const { sidebarOpen } = useAppContext();

  return (
    <div
      className={`bg-white h-screen shadow ${
        sidebarOpen ? "w-60" : "w-16"
      } duration-300`}
    >
      <div className="flex items-center space-x-2 text-2xl py-5 pl-5 shadow">
        <span>
          <SiShopware />
        </span>
        <span
          className={`${
            sidebarOpen ? "scale-100" : "scale-0 pl-20"
          } duration-300`}
        >
          Biggins
        </span>
      </div>
      <div className={`${sidebarOpen ? "px-5" : "px-3"} py-5 space-y-3`}>
        {sidebarLinks.map((sidebarLink, index) => (
          <div key={index}>
            {/* Section */}
            <h4
              className={`${
                sidebarOpen ? "scale-100" : "scale-0 -ml-20"
              } uppercase font-semibold  duration-300`}
            >
              {sidebarLink.sectionHeader}
            </h4>

            {/* Section Links */}
            {sidebarLink.links.map((link, index) => (
              <div
                key={index}
                className={
                  "flex gap-2 items-center py-2 text-gray-700 rounded hover:bg-teal-500 hover:text-white cursor-pointer hover:font-bold"
                }
              >
                <span
                  className={`${
                    sidebarOpen ? "pl-5" : "pl-2.5 text-xl"
                  } duration-300`}
                >
                  {React.createElement(link.icon)}
                </span>
                <span
                  className={`${
                    sidebarOpen ? "scale-100" : "scale-0 ml-10"
                  } duration-300`}
                >
                  {link.label}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
