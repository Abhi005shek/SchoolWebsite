import { NavLink } from "react-router-dom";
import { images } from "../data/imageGallery";

function Photos() {
  return (
    <div className="mx-6 md:mx-16">
      <h3 className="flex justify-between items-center my-4">
        <span className="text-xl md:text-2xl text-primary">Photos</span>
        <span className="text-xs sm:text-sm">
          <NavLink to="/" className="text-textColor">
            Home
          </NavLink>{" "}
          / Gallery / Photos
        </span>
      </h3>

      <h2 className=" mt-10 font-roboto text-center text-2xl md:text-3xl font-semibold text-primary">
        Photo Gallery Of Springdale Public School
      </h2>

      <div className="my-10 min-h-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {images.map((item) => {
          return <img className="rounded w-full min-h-60" src={item.img} />;
        })}
      </div>
    </div>
  );
}

export default Photos;
