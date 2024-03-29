import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => { 
  return (
    <>
      <div className="flex flex-row justify-end mobileMd:gap-2 pr-3 pt-3  bg-yellow-500 mobileMd:h-10 tablet:h-14 laptopMd:h-14 desktopMd:h-14">
        <NavLink
          to="#home"
          className="font-bold mobileMd:text-xs tablet:text-base laptopMd:text-lg desktopMd:text-lg "
        >
          Home
        </NavLink>
        <hr className="border-y-0 mobileMd:w-[1px] mobileMd:h-4 tablet:w-[1px] tablet:h-6 desktopMd:w-[2px] desktopMd:h-7  bg-black" />
        <NavLink
          className="font-bold mobileMd:text-xs tablet:text-base laptopMd:text-lg desktopMd:text-lg"
          to="#about"
        >
          About
        </NavLink>
        <hr className="border-y-0 mobileMd:w-[1px] mobileMd:h-4 tablet:w-[1px] tablet:h-6 desktopMd:w-[2px] desktopMd:h-7  bg-black" />

        <NavLink
          className=" font-bold mobileMd:text-xs tablet:text-base laptopMd:text-lg desktopMd:text-lg"
          to="#"
        >
          Projects{" "}
        </NavLink>
        {/* <hr className="border-y-0  mobileMd:w-[1px] mobileMd:h-4 desktopMd:w-[2px] desktopMd:h-7 bg-black" /> */}

        {/* <NavLink
                  className=""
                  to="#"
                >
                  CERTIFICATE
                </NavLink> */}
      </div>
    </>
  );
};

export default Header;
