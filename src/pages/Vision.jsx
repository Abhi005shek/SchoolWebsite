import SectionHeading from "../components/SectionHeading";

function Vision() {
  return (
    <div className="mx-6 mb-10 md:mx-16">
      <SectionHeading heading={"Vision&Mission"} link={"/ About / Vision"} />

      <div>
        <h2 className="text-center font-semibold font-roboto my-4">
          <span className="text-xl md:text-4xl text-primary">Vision</span>
        </h2>
        <p className="bg-[#f2f2f2] p-3">
          "To create a learning environment that fosters academic excellence,
          critical thinking, and ethical values."
          <br />
          Founded in 1985, Springdale Public School has been dedicated to
          providing quality education and holistic development to students.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          quaerat perspiciatis iusto beatae blanditiis ipsa recusandae. Vitae a
          doloremque iure nesciunt ut debitis nemo dolore accusamus!
        </p>
      </div>

      <div>
        <h2 className="text-center font-semibold font-roboto my-4">
          <span className="text-xl md:text-4xl text-primary">Mission</span>
        </h2>

        <p className="bg-[#f2f2f2] p-3">
          "To empower students with the knowledge, skills, and values needed to
          thrive in a dynamic world."
          <br />
          "To create a learning environment that fosters academic excellence,
          critical thinking, and ethical values."
        </p>
      </div>
    </div>
  );
}

export default Vision;
