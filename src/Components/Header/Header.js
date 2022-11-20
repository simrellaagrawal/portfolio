import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => { 
  return (
    <>
      <div className="flex flex-row justify-end mobileMd:gap-2 pr-3 pt-3">
        <NavLink
          to="#"
          className="mobileMd:text-xs tablet:text-base laptopMd:text-lg desktopMd:text-lg "
        >
          Home
        </NavLink>
        <hr className="border-y-0 w-[1px] h-4 bg-black" />
        <NavLink
          className="mobileMd:text-xs tablet:text-base laptopMd:text-lg desktopMd:text-lg"
          to="#"
        >
          About
        </NavLink>
        <hr className="border-y-0 w-[1px] h-4 bg-black" />

        <NavLink
          className="mobileMd:text-xs tablet:text-base laptopMd:text-lg desktopMd:text-lg"
          to="#"
        >
          Projects{" "}
        </NavLink>
        {/* <NavLink
                  className=""
                  to="#"
                  style={({ isActive }) => isActive ? activeStyle :{}}
                >
                  CERTIFICATE
                </NavLink> */}
      </div>
    </>
  );
};

export default Header;
