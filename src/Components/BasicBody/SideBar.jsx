import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Header_Sidebar.css";
import {
  FaKeyboard,
  FaPlus,
  FaMinus,
  FaChartBar,
} from "react-icons/fa";
import { BsSpeedometer2, BsFillCalendarCheckFill } from "react-icons/bs";
import { FiEdit, FiSettings } from "react-icons/fi";
import { ImDrive, ImAttachment } from "react-icons/im";
import { CgMicrosoft } from "react-icons/cg";
import { BiTransferAlt } from "react-icons/bi";
import { RiScissorsFill } from "react-icons/ri";
import { GoCheck } from "react-icons/go";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const routes = [
  {
    path: "/",
    name: "AssetMax",
    icon: <BsSpeedometer2 />,
  },
  {
    path: "/Additional",
    name: "Additional",
    icon: <ImDrive />,
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    icon: <FaKeyboard />,
  },
  {
    path: "/Migrat",
    name: "Migrat",
    icon: <FiEdit />,
  },
  {
    path: "/",
    name: "AssetMax",
    icon: <BsFillCalendarCheckFill />,
  },
  {
    path: "/",
    name: "AssetMax",
    icon: <ImAttachment />,
  },
  {
    path: "/",
    name: "AssetMax",
    icon: <FiSettings />,
  },
  {
    path: "/",
    name: "AssetMax",
    icon: <FaPlus />,
  },
  {
    path: "/",
    name: "AssetMax",
    icon: <FaMinus />,
  },
  {
    path: "/",
    name: "AssetMax",
    icon: <RiScissorsFill />,
  },
  {
    path: "/",
    name: "AssetMax",
    icon: <GoCheck />,
  },
  {
    path: "/",
    name: "AssetMax",
    icon: <FaChartBar />,
  },
  {
    path: "/",
    name: "AssetMax",
    icon: <BiTransferAlt />,
  },
];

const SideBar = ({ children }) => {
  const [isClose, setIsClose] = useState(false);
  const BtnClick = () => setIsClose(!isClose);
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <>
      <div className="side_Container">
        <motion.div
          animate={{
            width: isClose ? "18rem" : "3.5rem",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className="sidebar"
        >
          <div className="Hamburger">
            <CgMicrosoft onClick={BtnClick} className="hamBtn" />
          </div>
          <section className="Routes">
            {routes.map((route) => (
              <NavLink
                activeclassname="active"
                to={route.path}
                key={route.name}
                className="Link"
              >
                <div className="Icon">{route.icon}</div>
                <AnimatePresence>
                  {isClose && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="menuList"
                    >
                      {route.name}
                    </motion.div>
                  )}{" "}
                </AnimatePresence>
              </NavLink>
            ))}
          </section>
        </motion.div>
        <main>
          <Header /> <div className="Main">{children}</div> 
        </main>
      </div>
    </>
  );
};

export default SideBar;
