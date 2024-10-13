import { useContext, useEffect } from "react";
import { AppNavigationContext } from "../../context/GlobalContext";

import img from "./../../Unity Hospital/Contact Us/Group 79.png";
import img2 from "./../../Unity Hospital/HomePage/Vector.png";
import img3 from "./../../Unity Hospital/Contact Us/Group 72.png";

export default function Contact() {
  const { setSidebarOpen } = useContext(AppNavigationContext);
  useEffect(() => {
    setSidebarOpen(true);
  }, [setSidebarOpen]);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <section className="my-16">
        <div className="relative w-full ">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-3">
            <img
              src={img2}
              className="w-[5%] xl:block lg:block md:block  hidden"
              alt=""
            />

            <img src={img} alt="" className="md:hidden w-full   shadow-md " />
            {/* Contact Form */}
            <div className="w-[90%] md:w-1/2 mt-9 ">
              <h2 className="text-3xl font-bold mb-6 text-[#1E8ACB]">
                Contact us
              </h2>
              <form className="space-y-4 ">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="md:w-[80%] w-full px-4 py-2 border border-[#1E8ACB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E8ACB]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="md:w-[80%]  w-full px-4 py-2 border border-[#1E8ACB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E8ACB]"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="md:w-[80%] w-full px-4 py-2 border border-[#1E8ACB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E8ACB]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-[12%] w-full md:w-fit py-2 bg-[#1E8ACB] text-2xl text-white rounded-md font-semibold border-2 border-[#1E8ACB]  hover:border-sky-300 transition duration-300"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 md:w-2/3 ">
              <div className="">
                <img src={img3} alt="Doctor" className="md:block hidden" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
