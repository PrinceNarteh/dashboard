import { FiShoppingBag } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

export const sidebarLinks = [
  {
    sectionHeader: "Dashboard",
    links: [
      {
        label: "Ecommerce",
        icon: FiShoppingBag,
      },
    ],
  },
  {
    sectionHeader: "Pages",
    links: [
      {
        label: "Customers",
        icon: FaUsers,
      },
      {
        label: "Employees",
        icon: FiShoppingBag,
      },
      {
        label: "Orders",
        icon: MdOutlineShoppingCart,
      },
    ],
  },
];
