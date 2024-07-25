import { NavLink } from "react-router-dom";

function SectionHeading({ heading, link }) {
  return (
    <>
      <h2 className="flex justify-between items-center my-4">
        <span className="text-xl md:text-2xl text-primary">{heading}</span>
        <span className="text-xs sm:text-sm">
          <NavLink to="/" className="text-textColor">
            Home
          </NavLink>{" "}
          {link}
        </span>
      </h2>
    </>
  );
}

export default SectionHeading;
