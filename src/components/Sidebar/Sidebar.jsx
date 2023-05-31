import React from "react";
import { FaShopify } from "react-icons/fa";
import {
  MdSpaceDashboard,
  MdAnalytics,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSetting,
} from "react-icons/ai";
import { BsFillBagCheckFill, BsFillBasket2Fill } from "react-icons/bs";
import { BiAnalyse, BiHelpCircle } from "react-icons/bi";
import { CiDiscount1 } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const menuItems = [
    {
      route: "Dashboard",
      path: "/",
      icon: <MdSpaceDashboard />,
    },
    {
      route: "Orders",
      path: "/orders",
      icon: <AiOutlineShoppingCart />,
    },
    {
      route: "Products",
      path: "/products",
      icon: <BsFillBagCheckFill />,
    },
    {
      route: "Customers",
      path: "/customers",
      icon: <AiOutlineUser />,
    },
    {
      route: "Analytics",
      path: "/analytics",
      icon: <MdAnalytics />,
    },
    {
      route: "Marketing",
      path: "/marketing",
      icon: <BiAnalyse />,
    },
  ];

  const menuItems2 = [
    {
      route: "Integration",
      path: "/integration",
      icon: <MdOutlineDashboardCustomize />,
    },
    {
      route: "My Store",
      path: "/mystore",
      icon: <BsFillBasket2Fill />,
    },
    {
      route: "Discount",
      path: "/discount",
      icon: <CiDiscount1 />,
    },
  ];

  const menuItems3 = [
    {
      route: "Settings",
      path: "/settings",
      icon: <AiOutlineSetting />,
    },
    {
      route: "Get Help",
      path: "/help",
      icon: <BiHelpCircle />,
    },
  ];

  return (
    <div className="min-h-screen w-60 bg-white">
      <div className="p-10">
        <div className="flex items-center">
          <FaShopify className="text-primary text-3xl" />
          <h1 className="font-bold text-xl">Shopify</h1>
        </div>
        <h1 className="mt-10 mb-5">Menu</h1>
        <ul className="flex flex-col gap-7">
          {menuItems.map((item) => {
            return (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary flex gap-3 font-bold items-center"
                    : "flex hover:text-primary hover:font-bold gap-3 items-center transition-all duration-300"
                }
              >
                <div className="text-2xl">{item.icon}</div>
                <h1 className="text-lg">{item.route}</h1>
              </NavLink>
            );
          })}
        </ul>
      </div>
      <hr />
      <div className="px-10 py-5">
        <h1 className="mb-5">Saled Chanel</h1>
        <ul className="flex flex-col gap-7">
          {menuItems2.map((item) => {
            return (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary flex gap-3 font-bold items-center"
                    : "flex hover:text-primary hover:font-bold gap-3 items-center transition-all duration-300"
                }
              >
                <div className="text-2xl">{item.icon}</div>
                <h1 className="text-lg">{item.route}</h1>
              </NavLink>
            );
          })}
        </ul>
      </div>
      <hr />
      <div className="p-10">
        <ul className="flex flex-col gap-8">
          {menuItems3.map((item) => {
            return (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary flex gap-3 font-bold items-center"
                    : "flex hover:text-primary hover:font-bold gap-3 items-center transition-all duration-300"
                }
              >
                <div className="text-2xl">{item.icon}</div>
                <h1 className="text-lg">{item.route}</h1>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
