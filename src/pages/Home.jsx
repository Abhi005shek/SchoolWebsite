import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  mobile: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};
function Home() {
  return (
    <div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        containerClass="h-[90vh] bg-slate-700"
        itemClass="text-white "
      >
        <div className="bg-cover flex items-center h-[90vh] bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.7)),url('https://doonpublicschoolpkl.com/wp-content/uploads/2024/01/img5.jpg')]">
          {/* <img src="https://doonpublicschoolpkl.com/wp-content/uploads/2024/01/img5.jpg" /> */}
          <h2 className="p-10 text-3xl mt-20 font-roboto font-bold">
            Annual Sports Day - Celebrating Excellence in Sports
          </h2>
        </div>

        <div className="bg-cover flex items-center h-[90vh] bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.7)),url('https://doonpublicschoolpkl.com/wp-content/uploads/2024/01/WB6B5502-scaled.jpg')]">
          <h2 className="p-10 text-3xl mt-20 font-roboto font-bold">
            Science Exhibition - Showcasing Student Innovations
          </h2>
        </div>

        <div className="bg-cover flex items-center h-[90vh] bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.7)),url('https://doonpublicschoolpkl.com/wp-content/uploads/2024/01/img6.jpg')]">
          <h2 className="p-10 text-3xl mt-20 font-roboto font-bold">
            Cultural Fest - Embracing Diversity and Creativity
          </h2>
        </div>
      </Carousel>

      <div className="mt-16 mx-6 md:mx-16">
        <h2 className="text-2xl md:text-4xl text-primary uppercase font-bold font-roboto text-center">
          Welcome to Springdale Public School
        </h2>

        <p className="mt-6 text-center">
          "Springdale Public School, aims at nurturing individuals with
          paramount values and multivalent competencies. This is accomplished by
          focusing not only towards academic excellence but also all round
          development of the child, his character and personality, aesthetic
          refinements, effective skills and the art of living." The worthiness
          of classroom teaching is significant. With this intention, we furnish
          the students with the paramount milieu and class-room teachers who
          incessantly strive to offer encouragement amongst students to form
          bonds and associations.
        </p>
      </div>

      <div className="mt-16 mx-6 md:mx-16">
        <h2 className="text-2xl md:text-4xl uppercase text-primary font-bold font-roboto text-center">
          Reasons to join Springdale Public School
        </h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          showDots={true}
          autoPlay={true}
          arrows={false}
          draggable={true}
          containerClass="h-[40vh] mb-10"
          itemClass="py-10 cursor-grab bg-[#f2f2f2] px-3 md:px-0"
          // renderDotsOutside={true}
        >
          <div>
            <h2 className="text-2xl md:text-4xl text-red-700 font-bold font-playwrite text-center">
              All round Development
            </h2>
            <p className="mt-6 text-center">
              The school focuses on all round development of students and ample
              opportunities
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl text-red-700 font-bold font-playwrite text-center">
              Experiential Learning
            </h2>
            <p className="mt-6 text-center">Learning by doing is emphasized</p>
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl text-red-700 font-bold font-playwrite text-center">
              Personalised Attention
            </h2>
            <p className="mt-6 text-center">
              Student teacher ratio is maintained to give personalised attention
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl text-red-700 font-bold font-playwrite text-center">
              Integrated Curriculum
            </h2>
            <p className="mt-6 text-center">
              Lays special focus on themantic units
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl text-red-700 font-bold font-playwrite text-center">
              Worldclass Infrastructure
            </h2>
            <p className="mt-6 text-center">Equipped with modern amenities</p>
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl text-red-700 font-bold font-playwrite text-center">
              Futuristic Education
            </h2>
            <p className="mt-6 text-center">
              Enterpreneurship is integrated for futuristic education
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
