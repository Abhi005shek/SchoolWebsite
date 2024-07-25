import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-secondary  py-4 px-2 text-white">
      <div className=" text-xl md:text-2xl flex justify-center gap-3 my-3">
        <span>
          <FaFacebook />
        </span>
        <span>
          <FaInstagram />
        </span>
        <span>
          <FaXTwitter />
        </span>
      </div>
      <p className="text-center text-xs text-textColor">Made By Abhishek</p>
      <p className="text-center text-xs md:text-sm">
        © Copyright 2024{" "}
        <span className="font-bold">Springdale Public School</span>. All Rights
        Reserved
      </p>
    </footer>
  );
}

export default Footer;
