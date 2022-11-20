import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <hr className="border-x-0" />
      <div className="flex flex-row justify-center gap-16 pt-5">
        <div className="flex flex-row justify-center  items-center  gap-0">
          <PhoneIcon />
          <p className="leading-7  font-thin">+91748921170</p>
        </div>
        
        <div className="flex flex-row justify-center  items-center  gap-0">
          <EmailIcon />
          <p className="leading-7  text-base font-thin">simsim44144@gmail.com</p>
        </div>

        <div className="flex flex-row justify-center  items-center  gap-1">
          <p className="leading-7  font-thin">Social</p>
          <div className=" flex gap-1">
            <Link to="#" >
          <GitHubIcon />
            </Link>
            <Link to="#">
          <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
