import { useContext, useEffect } from "react";
import img from "./../../Unity Hospital/About us/Main.png";
import { AppNavigationContext } from "../../context/GlobalContext";
import { Helmet } from "react-helmet";

const About = () => {
  const { setSidebarOpen } = useContext(AppNavigationContext);
  useEffect(() => {
    setSidebarOpen(true);
  }, [setSidebarOpen]);

  return (
    <>
      <Helmet>
        <title>About - Unity Hospital</title>
      </Helmet>
      <section className="w-[90%] mx-auto my-24 lg:mt-8 h-auto">
        <img
          src={img}
          className="w-full object-cover"
          alt="About Unity Hospital"
        />
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1E8ACB] my-5">
          About us
        </h1>
        <div className="my-5">
          <h2 className="text-2xl mb-2 text-[#1E8ACB]">
            Welcome to Unity Hospital
          </h2>
          <p className="text-xl">
            At Unity Hospital, we are committed to delivering exceptional
            healthcare services with a focus on compassion, innovation, and
            patient-centered care. Our mission is to enhance the health and
            well-being of our community through comprehensive and personalized
            medical care.
          </p>
        </div>
        <div className="my-5">
          <h2 className="text-2xl mb-2 text-[#1E8ACB]">Our Mission</h2>
          <p className="text-xl">
            Our mission at Unity Hospital is to provide outstanding healthcare
            services that meet the needs of our diverse community. We strive to
            offer the highest standard of care through continuous improvement,
            advanced medical practices, and a dedication to patient
            satisfaction.
          </p>
        </div>
        <div className="my-5">
          <h2 className="text-2xl mb-2 text-[#1E8ACB]">Who We Are</h2>
          <p className="text-xl">
            Unity Hospital is a state-of-the-art healthcare facility dedicated
            to providing high-quality medical care to patients of all ages. Our
            multidisciplinary team of experienced physicians, nurses, and
            healthcare professionals work collaboratively to ensure the best
            possible outcomes for our patients.
          </p>
        </div>
        <div className="my-5">
          <h2 className="text-2xl mb-2 text-[#1E8ACB]">Our Values</h2>
          <ul className="list-disc list-inside">
            <li className="decoration-dotted">
              Compassion: We treat each patient with empathy, dignity, and
              respect.
            </li>
            <li>
              Excellence: We strive for continuous improvement and the highest
              standards in patient care.
            </li>
            <li>
              Integrity: We uphold ethical practices in all our interactions and
              decisions.
            </li>
            <li>
              Innovation: We embrace the latest technologies and treatment
              methods to provide cutting-edge care.
            </li>
            <li>
              Community: We are dedicated to making a positive impact on the
              health and well-being of our community.
            </li>
          </ul>
        </div>
        <div className="my-5">
          <h2 className="text-2xl mb-2 text-[#1E8ACB]">Our Team</h2>
          <p className="text-xl">
            Our dedicated team of healthcare professionals at Unity Hospital
            includes board-certified physicians, skilled nurses, and
            compassionate support staff. Each member of our team is committed to
            providing personalized care tailored to meet the unique needs of our
            patients.
          </p>
        </div>
        <div className="my-5">
          <h2 className="text-2xl mb-2 text-[#1E8ACB]">Location</h2>
          <div className="w-full">
            <iframe
              width="100%"
              height="450"
              frameBorder={0}
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=100%25&height=450&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
