import { NavLink } from "react-router-dom";

function History() {
  return (
    <div className="mx-6 my-6 md:mx-16">
      <h3 className="flex justify-between items-center my-4">
        <span className="text-xl md:text-2xl text-primary">Our History</span>
        <span className="text-xs sm:text-sm">
          <NavLink to="/" className="text-textColor">
            Home
          </NavLink>{" "}
          / About / Our History
        </span>
      </h3>

      <div className="flex flex-col sm:flex-row justify-center items-start gap-10 p-5 bg-[#f2f2f2]">
        <div>
          <p className="flex-grow">
            Founded in 1985, Springdale Public School has been dedicated to
            providing quality education and holistic development to students.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            quaerat perspiciatis iusto beatae blanditiis ipsa recusandae. Vitae
            a doloremque iure nesciunt ut debitis nemo dolore accusamus!
          </p>
        </div>

        <div className="bg-red-500 border-8 border-slate-400">
          <img src="https://plus.unsplash.com/premium_photo-1676657954811-9409c4830467?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D" />
        </div>
      </div>
      {/*  */}
    </div>
  );
}

export default History;
