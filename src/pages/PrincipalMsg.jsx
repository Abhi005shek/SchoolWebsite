import React from "react";
import SectionHeading from "../components/SectionHeading";

function PrincipalMsg() {
  return (
    <div className="mx-6 my-6 md:mx-16">
      <h2 className="text-center font-semibold font-roboto my-6">
        <span className="text-xl  md:text-4xl text-primary">
          Principal's Message
        </span>
      </h2>

      <p className="text-center p-3 bg-[#f2f2f2]">
        "At Springdale, we believe in nurturing the potential of every student
        and guiding them towards a successful future." Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Illo rem reprehenderit neque mollitia
        enim omnis ex nisi voluptatem, quo in praesentium totam quam voluptatum
        inventore cupiditate accusantium iusto aperiam fugiat.
        <br />
        <br />I extend a warm welcome to you to join our exceptional learning
        community, where excellence is not just a goal but a way of life.
      </p>
      <p className="mt-4 text-right text-sm font-semibold">Rajiv Mehta</p>
      <p className="text-right text-sm font-semibold">Principal</p>
    </div>
  );
}

export default PrincipalMsg;
