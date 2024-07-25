import SectionHeading from "../components/SectionHeading";
import { curriculum } from "../data/curriculum";

function Curriculum() {
  return (
    <div className="mx-6 md:mx-16">
      <SectionHeading
        heading={"Curriculum"}
        link={"/ Academics / curriculum"}
      />

      <div className="text-sm grid frid-cols-1 md:grid-cols-2 gap-6 my-10 md:mx-6">
        {curriculum.map((item, index) => (
          <table className="border" key={index}>
            <tbody className="text-center">
              <tr className="bg-[#f2f2f2]">
                <th className="py-2 px-4 capitalize">{item.education}</th>
                <th>Subjects</th>
              </tr>
              <tr>
                <td className="py-2 px-4 capitalize">Grades {item.grades}</td>
                <td className="py-2 px-4 capitalize">{item.subjects}</td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
}

export default Curriculum;
