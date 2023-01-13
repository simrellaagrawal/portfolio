import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from '@mui/icons-material/Home';
const Footer = () => {
  return (
    <>
      <hr className="border-x-0" />
      <div className="flex flex-row justify-center h-48 gap-16 mobileMd:gap-1 tablet:gap-10">

      <div className=" flex flex-col justify-center  items-center  gap-1 ">
          <HomeIcon className="icon"/>
          <p className="mobileMd:text-xs tablet:text-base desktopMd:text-lg  leading-7 font-normal">Raigarh, Chhattishgarh</p>
        </div>
        
        <div className=" flex flex-col justify-center  items-center  gap-1 ">
          <PhoneIcon className="icon"/>
          <p className="mobileMd:text-xs tablet:text-base desktopMd:text-lg  leading-7 font-normal">+917489211170</p>
        </div>

        <div className="flex flex-col justify-center  items-center  gap-1">
          <EmailIcon className="icon" />
          <p className=" mobileMd:text-xs tablet:text-base desktopMd:text-lg  leading-7  text-base font-normal">
            simsim44144@gmail.com
          </p>
        </div>
        <div className="flex flex-col justify-center  items-center  gap-1">
          <p className="mobileMd:text-xs tablet:text-base desktopMd:text-lg  leading-7  font-bold">Follow Me</p>
          <div className=" flex gap-1">
            <a href="https://github.com/simrellaagrawal">
              <GitHubIcon className="icon"/>
            </a>
            <a href="https://www.linkedin.com/in/simrella-agrawal-6a016522a/">
              <LinkedInIcon className="icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
