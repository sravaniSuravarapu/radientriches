import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";


const Footer = () => {
  return (
    <footer className="bg-[#212731] text-white px-[100px] text-[16px] py-10">
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span className="text-[15px]">© 2020 Appy. All rights reserved.</span>
        <span className="text-[15px]">Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  )
}

export default Footer