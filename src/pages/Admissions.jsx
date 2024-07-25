import SectionHeading from "../components/SectionHeading";

function Admissions() {
  return (
    <div className="mx-6 md:mx-16">
      <SectionHeading heading={"Admissions"} link={"/ Admissions"} />

      <div className="my-10">
        <p className="font-semibold">
          Admission forms are available for download. Submit the completed form
          along with required documents at the school office.
        </p>

        <ul className="list-['✔️'] mt-5">
          <li>A copy of Aadhar Card of Child, Mother & Father (Optional).</li>
          <li>A copy of Birth Certificate of child.</li>
          <li>
            Two Passport-size photographs of the Child and one each of the
            Mother and father.
          </li>
          <li>Original Transfer Certificate of the previous school.</li>
          <li>
            Any other document depending upon the specific nature of the
            admission case.
          </li>
          <li>A copy of Progress Report of the last class attended/passed.</li>
        </ul>

        <button className="my-6 text-white bg-secondary py-2 px-3 rounded">
          Download Admission Form
        </button>

        <p>
          <span className="font-semibold">Criteria : </span>
          <span className="italic">
            Admission is based on merit and availability of seats. Entrance
            tests may be conducted for certain grades."
          </span>
        </p>

        <h3 className="mt-10 mb-5 text-4xl font-roboto font-semibold">
          Important Dates
        </h3>

        <div className="text-sm flex flex-col lg:flex-row gap-8 lg:gap-4">
          <p>
            <span className=" py-2 px-3 bg-secondary text-white">
              "Admission Form Availability"
            </span>
            <span className="bg-[#f2f2f2] py-2 px-4">March 1st</span>
          </p>

          <p>
            <span className=" py-2 px-3 bg-secondary text-white">
              "Last Date for Submission"
            </span>
            <span className="bg-[#f2f2f2] py-2 px-4"> March 31st</span>
          </p>

          <p>
            <span className=" py-2 px-3 bg-secondary text-white">
              "Announcement of Results"
            </span>
            <span className="bg-[#f2f2f2] py-2 px-4">April 30th</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Admissions;
