import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import DropDownItems from "./DropDownItems";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { VscGlobe } from "react-icons/vsc";

function Header() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAcademicOpen, setIsAcademicOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth > 768) setIsMenuOpen(true);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <header className="font-light font-poppins px-3 md:px-16 bg-secondary text-white flex items-center  justify-between md:py-3">
      <div className="">
        <img
          className="w-36 h-10 py-2 sm:py-0"
          src="https://placehold.co/150x40"
          alt="logo"
        />
      </div>
      <div className="relative">
        {!isMenuOpen && (
          <p className="text-2xl text-white block md:hidden mr-2">
            <span onClick={() => setIsMenuOpen(true)}>
              <GiHamburgerMenu />
            </span>
          </p>
        )}

        {isMenuOpen && (
          <ul className="flex flex-col md:flex-row items-center bg-secondary w-[30vh] md:w-auto h-screen md:h-auto z-[100] px-4 py-3 md:px-0 md:py-0 top-0 right-0  fixed md:relative gap-6">
            <p
              className="w-full md:hidden flex justify-end text-3xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>
                {" "}
                <AiOutlineClose />
              </span>
            </p>

            <li>
              <NavLink
                to="/"
                className={" hover:text-textColor active:text-textColor"}
              >
                Home
              </NavLink>
            </li>
            <DropDownItems
              isOpen={isAboutOpen}
              setIsOpen={setIsAboutOpen}
              text="About Us"
            >
              <NavLink
                to="/about/history"
                className={"hover:text-primary py-1 px-2"}
              >
                Our History
              </NavLink>
              <NavLink
                to="/about/vision"
                className={"hover:text-primary py-1 px-2"}
              >
                Vision & Mission
              </NavLink>
              <NavLink
                to="/about/principal-message"
                className={"hover:text-primary py-1 px-2"}
              >
                Principal's Message
              </NavLink>
              <NavLink
                to="/about/vision"
                className={"hover:text-primary py-1 px-2"}
              >
                Infrastructure and Facilities
              </NavLink>
              <NavLink
                to="/about/student-council"
                className={"hover:text-primary py-1 px-2"}
              >
                Student Council
              </NavLink>
            </DropDownItems>

            <li>
              <NavLink
                to="/admissions"
                className={" hover:text-textColor active:text-textColor"}
              >
                Admissions
              </NavLink>
            </li>

            <DropDownItems
              isOpen={isAcademicOpen}
              setIsOpen={setIsAcademicOpen}
              text="Academics"
            >
              <NavLink
                to="/academics/curriculum"
                className={"hover:text-primary py-1 px-2"}
              >
                Curriculum
              </NavLink>
              <NavLink
                to="/gallery/videos"
                className={"hover:text-primary py-1 px-2"}
              >
                Teaching Methodologies
              </NavLink>
              <NavLink
                to="/gallery/videos"
                className={"hover:text-primary py-1 px-2"}
              >
                Educational Resources
              </NavLink>
            </DropDownItems>

            <DropDownItems
              isOpen={isGalleryOpen}
              setIsOpen={setIsGalleryOpen}
              text="Gallery"
            >
              <NavLink
                to="/gallery/images"
                className={"hover:text-primary py-1 px-2"}
              >
                Images
              </NavLink>
              <NavLink
                to="/gallery/videos"
                className={"hover:text-primary py-1 px-2"}
              >
                Videos
              </NavLink>
            </DropDownItems>

            <li>
              <NavLink
                to="/contacts"
                className={" hover:text-textColor active:text-textColor"}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
