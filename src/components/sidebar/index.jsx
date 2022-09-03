import React from "react";
import { sidebarLinks } from "./sidebarLinks";
import { SiShopware } from "react-icons/si";

const Sidebar = () => {
  return (
    <div className="bg-white w-60  h-screen shadow">
      <div className="flex items-center space-x-2 text-2xl py-5 pl-5 shadow">
        <span>
          <SiShopware />
        </span>
        <span>Biggins</span>
      </div>
      <div className="p-5 space-y-3">
        {sidebarLinks.map((sidebarLink, index) => (
          <div key={index}>
            {/* Section */}
            <h4 className="uppercase font-semibold">
              {sidebarLink.sectionHeader}
            </h4>

            {/* Section Links */}
            {sidebarLink.links.map((link, index) => (
              <div
                key={index}
                className="flex gap-2 items-center pl-5 py-2 text-gray-700 rounded hover:bg-teal-500 hover:text-white cursor-pointer hover:font-bold duration-200"
              >
                <span>{React.createElement(link.icon)}</span>
                <span>{link.label}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
