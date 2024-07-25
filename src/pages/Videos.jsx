import { NavLink } from "react-router-dom";
import { videos } from "../data/videos";
import { useState } from "react";

function Photos() {
  const [type, setType] = useState("all");
  return (
    <div className="mx-6 md:mx-16">
      <h3 className="flex justify-between items-center my-4">
        <span className="text-xl md:text-2xl text-primary">Video Gallery</span>
        <span className="text-xs sm:text-sm">
          <NavLink to="/" className="text-textColor">
            Home
          </NavLink>{" "}
          / Gallery / Videos
        </span>
      </h3>

      <h2 className=" mt-10 font-roboto text-center text-2xl md:text-3xl font-semibold text-primary">
        Video Gallery Of Springdale Public School
      </h2>

      <div className="flex text-center text-xs md:text-sm gap-1 md:gap-3 my-4 justify-center">
        <p
          onClick={() => setType("all")}
          className="rounded-full border-2 border-sky-900 py-1 px-1 sm:px-4 hover:bg-sky-900 hover:text-white cursor-pointer"
        >
          All Videos
        </p>
        {videos.map((item) => (
          <p
            onClick={() => setType(item.type)}
            className="rounded-full border-2 border-sky-900 py-1 px-2 sm:px-4 hover:bg-sky-900 hover:text-white cursor-pointer"
          >
            {item.type} Videos
          </p>
        ))}
      </div>

      <div className="my-10 min-h-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((item) => {
          if (type === "all") {
            return (
              <iframe className="h-48 w-full rounded" src={item.link}></iframe>
            );
          }

          if (type != "all" && item.type === type)
            return (
              <iframe
                className="h-48 rounded w-full"
                // width="381"
                // height="249"
                src={item.link}
                title="Shattering The Stigma ( A Journey Through Depression)"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            );
        })}
      </div>
    </div>
  );
}

export default Photos;
