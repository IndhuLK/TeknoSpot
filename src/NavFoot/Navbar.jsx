import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Images/Ts-Logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import { HiX } from "react-icons/hi";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  PresentationChartBarIcon,
  UserGroupIcon,
  PaintBrushIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";



const services = [
  {name: "Web Design", path: "/Web-Design", icon: GlobeAltIcon },
  { name: "Web Development", path: "/Web-Development", icon: GlobeAltIcon },
  { name: "App Development", path: "/App-Development", icon: DevicePhoneMobileIcon },
  { name: "SEO Services", path: "/SEO-Services", icon: PresentationChartBarIcon },
  { name: "Social Media Marketing", path: "/Social-Media-Marketing", icon: UserGroupIcon },
  { name: "Graphics Design", path: "/Graphics-Design", icon: PaintBrushIcon },
  { name: "Video Editing", path: "/Video-Editing", icon: VideoCameraIcon },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
    <nav className="relative w-full flex items-center justify-between px-6 py-2 z-10">
      <div className="w-32">
        <img src={Logo} alt="Tekno Spot" className="w-full h-full" />
      </div>

      <div className="hidden md:flex items-center space-x-10">
        {menuOptions.map((item, index) => (
          item.name === "Services" ? (
            <Popover key={index} className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-gray-700 hover:text-purple-800 font-semibold">
                Services
                <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
              </PopoverButton>
              <PopoverPanel className="absolute top-full left-0 mt-2 w-64 rounded-lg shadow-lg bg-white z-20">
                <div className="p-2">
                  {services.map((service, idx) => (
                    <Link
                      key={idx}
                      to={service.path}
                      className="flex items-center p-2 rounded-md hover:bg-purple-100 transition text-gray-700"
                    >
                      <service.icon className="w-5 h-5 mr-2 text-purple-800" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          ) : (
            <Link
              key={index}
              to={item.path}
              className="relative text-gray-700 hover:text-purple-800 font-semibold group"
            >
              {item.name}
              <span
                className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-800 transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
          )
        ))}
      </div>

      <div className="hidden md:flex">
        <button className="bg-gradient-to-r from-purple-800 to-indigo-500 text-white px-6 py-2 rounded-md shadow-md hover:scale-105 transition">
          Enquire Now
        </button>
      </div>

      <div className="md:hidden flex items-center">
        {openMenu ? (
          <HiX size={30} className="cursor-pointer" onClick={() => setOpenMenu(false)} />
        ) : (
          <HiOutlineBars3 size={30} className="cursor-pointer" onClick={() => setOpenMenu(true)} />
        )}
      </div>
    </nav>

    {openMenu && (
      <div className="md:hidden fixed top-10 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-6 py-6 z-40">
        {menuOptions.map((item, index) => (
          <div key={index} className="text-center">
            <Link
              to={item.path}
              className="text-gray-700 text-lg hover:text-purple-800 transition"
              onClick={() => setOpenMenu(false)}
            >
              {item.name}
            </Link>
            {item.name === "Services" && (
              <div className="mt-2 space-y-1">
                {services.map((sub, subIndex) => (
                  <Link
                    key={subIndex}
                    to={sub.path}
                    className="block text-sm text-gray-600 hover:text-purple-700"
                    onClick={() => setOpenMenu(false)}
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        <button className="bg-gradient-to-r from-purple-800 to-indigo-500 text-white px-6 py-2 rounded-md shadow-md hover:scale-105 transition">
          Enquire Now
        </button>
      </div>
    )}
  </>
  );
};

export default Navbar;
