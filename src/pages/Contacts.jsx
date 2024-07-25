import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  function onSubmit(data) {}

  return (
    <div className="mx-3 md:mx-16">
      <p className="flex justify-between items-center my-4">
        <span className="text-xl md:text-2xl text-primary">Contact Us</span>
        <span className="text-xs sm:text-sm">
          <NavLink to="/" className="text-textColor">
            Home
          </NavLink>{" "}
          / Contacts
        </span>
      </p>

      <div className="text-xs md:text-sm mt-10 gap-2 grid grid-cols-1 sm:grid-cols-2 md:gap-6 justify-evenly">
        <div className="flex gap-3 flex-col">
          <div className="flex-1 shadow-md border-2 p-2 flex items-center justify-center flex-col">
            <span className="flex justify-center text-3xl">
              <FaLocationDot />
            </span>
            <h4 className="text-center font-bold text-sm">Our Address</h4>
            <p className="text-center mt-2">
              Springdale Public School, 123 Education Lane, Cityville, State,
              ZIP Code
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-2 py-2">
            <div className="shadow-md border-2 flex-grow py-2 flex flex-col items-center justify-center">
              <span className="flex justify-center text-3xl">
                <MdEmail />
              </span>
              <h4 className="text-center font-bold text-sm">Email</h4>
              <p className="text-center mt-2">info@springdale.edu</p>
            </div>

            <div className="shadow-md border-2 flex-grow py-2 flex flex-col items-center justify-center">
              <span className="flex justify-center text-3xl">
                <MdCall />
              </span>
              <h4 className="text-center font-bold text-sm">Contact No.</h4>
              <p className="text-center mt-2">+1 (123) 456-7890</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 mb-3 px-6 md:px-4 border-2 shadow-md p-4"
        >
          <h2 className="text-primary text-center text-2xl mb-3">
            Get In Touch
          </h2>

          <div className="flex flex-col mb-3 mx-2 md:mx-6 space-y-2">
            <label className="" htmlFor="name">
              Full Name
            </label>
            <input
              className="rounded border p-2 bg-color3"
              id="name"
              type="text"
              placeholder=""
              {...register("name", { required: "this field is required" })}
            />
            {errors?.name && (
              <p className="text-xs text-right text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className=" flex flex-col mb-3 mx-2 md:mx-6 space-y-2">
            <label className="" htmlFor="email">
              Email
            </label>
            <input
              className="rounded border p-2 bg-color3"
              id="email"
              type="email"
              placeholder=""
              {...register("email", { required: "this field is required" })}
            />
            {errors?.email && (
              <p className="text-xs text-right text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-col mb-3 mx-2 md:mx-6 space-y-2">
            <label className="" htmlFor="phone">
              Contact No.
            </label>
            <input
              className=" rounded border p-2  bg-color3"
              id="phone"
              type="number"
              placeholder=""
              {...register("phone", {
                required: "this field is required",
                validate: (value) =>
                  value.length === 10 || "Phone no. should contain 10 digits",
              })}
            />
            {errors?.phone && (
              <p className="text-xs text-right text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="flex flex-col mb-3 mx-2 md:mx-6 space-y-2">
            <label className="" htmlFor="message">
              Message
            </label>
            <textarea
              className=" rounded border p-2 bg-color3"
              id="message"
              rows="5"
              col="10"
              type="text"
              placeholder=""
              {...register("message", { required: "this field is required" })}
            />
            {errors?.message && (
              <p className="text-xs text-right text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="bg-secondary text-white px-3 sm:px-6 py-2 mt-5"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4965.2465353671205!2d77.09401063571751!3d28.67154828158177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d047723f3c54f%3A0x458573c36e3401c0!2sSt.%20Sophia&#39;s%20Sr.%20Sec.%20School!5e0!3m2!1sen!2sin!4v1721810588580!5m2!1sen!2sin"
          style={{ border: 0 }}
          className="w-full"
          height="300"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
