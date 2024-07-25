import React from "react";
import SectionHeading from "../components/SectionHeading";

function StudentCouncil() {
  return (
    <div className="mx-6 md:mx-16">
      <SectionHeading
        heading="Student Council"
        link="/ About / Student Council"
      />

      <h2 className=" mt-10 font-roboto text-center text-2xl md:text-3xl font-semibold text-primary">
        Student Council Of Springdale Public School
      </h2>

      <div className="text-center justify-center my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
        <div className="">
          <div className="h-96 sm:h-80 flex justify-center flex-col">
            <img
              className="border-2 h-full"
              src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww"
            />
          </div>

          <h3 className="mt-3 font-semibold text-xl sm:text-2xl text-primary">
            President
          </h3>
          <p>Amy Parker, Grade 12</p>
        </div>

        <div className="">
          <div className="h-96 sm:h-80 flex justify-center flex-col">
            <img
              className="border-2 h-full"
              src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxwZXJzb258ZW58MHx8MHx8fDA%3D"
            />
          </div>

          <h3 className="mt-3 font-semibold text-xl sm:text-2xl text-primary">
            Vice President
          </h3>
          <p>Rajiv Mehta, Grade 11</p>
        </div>

        <div className="">
          <div className="h-96 sm:h-80 flex justify-center flex-col">
            <img
              className="border-2 h-full"
              src="https://plus.unsplash.com/premium_photo-1668896123985-edc26d57cab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
            />
          </div>

          <h3 className="mt-3 font-semibold text-xl sm:text-2xl text-primary">
            Secretary
          </h3>
          <p>Lisa Wong, Grade 10</p>
        </div>
      </div>
    </div>
  );
}

export default StudentCouncil;
