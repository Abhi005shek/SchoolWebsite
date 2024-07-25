import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="mx-6 md:mx-16">
      <p className="flex justify-between items-center my-4">
        <span className="text-xl md:text-2xl text-primary">About Us</span>
        <span className="text-xs sm:text-sm">
          <NavLink to="/" className="text-textColor">
            Home
          </NavLink>{" "}
          / About
        </span>
      </p>
    </div>
  );
}

export default About;
