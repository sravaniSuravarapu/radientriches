import React, { useState } from "react";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, ScrollLink } from "react-scroll";
import searchbar from '../assests/IMAGE.png'

const Navbar = () => {
    let Links = [
        { name: "Categories", link: "categories" },
        { name: "Website Builders", link: "websitebuilders" },
        { name: "Today's deals", link: "today's deals" },
      ];
      let [open, setOpen] = useState(false);
  return (
    <>
    <div className="w-[100vw] bg-[#212731]">
      <div className="md:flex items-center justify-center py-4 md:px-10 px-10">
        <div className="relative flex bg-white rounded-md p-1 w-[300px] ">
      <img src={searchbar} alt="searchbar" className="p-1"></img>
      <input
        type="text"
        className="pl-10 rounded-md focus:outline-none focus:none  px-3"
        placeholder="Search"
      />
    </div>
        
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-white"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static  md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-[#212731] sm:bg-transparent transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.name}>
              <Link
                to={link.link}
                activeClass="active"
                smooth={true}
                spy={true}
                className="text-white hover:text-primary duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar