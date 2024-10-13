import { useContext, useEffect } from "react";
import img from "./../../Unity Hospital/Field/Doctors/Mask group-1.png";
import Ellipse1 from "./../../Unity Hospital/Doctor Info/Ellipse.png";
import Ellipse2 from "./../../Unity Hospital/Doctor Info/Ellipse-1.png";
import Ellipse3 from "./../../Unity Hospital/Doctor Info/Ellipse-2.png";
import Ellipse4 from "./../../Unity Hospital/Doctor Info/Ellipse-3.png";
import Ellipse5 from "./../../Unity Hospital/Doctor Info/Ellipse-4.png";
import Ellipse6 from "./../../Unity Hospital/Doctor Info/Ellipse-5.png";

import { AppNavigationContext } from "../../context/GlobalContext";

import { FaStarHalfAlt, FaStar } from "react-icons/fa";
export default function Doctorinfo() {
  const { setSidebarOpen } = useContext(AppNavigationContext);
  useEffect(() => {
    setSidebarOpen(true);
  }, [setSidebarOpen]);
  return (
    <>
      <section className="mx-auto my-24 lg:mt-8 h-auto">
        <div className="lg:max-w-[70%] md:max-w-[90%] max-w-[90%] mx-auto bg-background-gradient rounded-lg  xl:flex lg:flex md:flex overflow-hidden">
          {/* Left Section - Image */}
          <div className="lg:w-2/5 md:p-0  px-2 py-5  relative flex flex-col justify-center items-center">
            <img
              src={img}
              alt="Doctor"
              className="w-full object-cover   h-full rounded-md"
            />{" "}
            <FaStar className="absolute indent-0 left-2 md:bottom-2 bottom-5 text-[5rem] text-[#46C8BC]" />
            <p className="absolute indent-0 md:bottom-8 bottom-11 text-2xl left-8 font-bold text-white ">
              4.9
            </p>
          </div>

          <div className="md:w-2/3  md:bg-background-gradient p-6 text-white">
            <p className="font-light">Name</p>
            <h2 className="text-2xl font-bold ">Dr. Morgan Schmidt</h2>
            <p className="text-lg font-light mt-2">Specialty</p>
            <span className="font-bold text-xl">Cardiology</span>

            {/* Education Section */}
            <div className="mt-4">
              <h3 className="font-light ">Education</h3>
              <ul className="list-disc list-inside mt-2 text-xs">
                <li className="font-semibold">
                  Medical School: Harvard Medical School
                </li>
                <li className="font-semibold">
                  Residency: Johns Hopkins Hospital, Internal Medicine
                </li>
                <li className="font-semibold">
                  Fellowship: Mayo Clinic, Cardiology
                </li>
              </ul>
            </div>

            {/* Certifications Section */}
            <div className="mt-4">
              <h3 className="font-light ">Certifications</h3>
              <ul className="list-disc list-inside mt-2 text-xs">
                <li className="font-semibold">
                  American Board of Internal Medicine (ABIM) – Cardiovascular
                  Disease
                </li>
                <li className="font-semibold">
                  American Board of Internal Medicine (ABIM) – Internal Medicine
                </li>
              </ul>
            </div>

            {/* Awards Section */}
            <div className="mt-4">
              <h3 className="font-light ">Awards and Recognitions</h3>
              <ul className="list-disc list-inside mt-2 text-xs">
                <li className="font-semibold">
                  Top Doctor Award, Cardiology Today (2022)
                </li>
                <li className="font-semibold">
                  Patient’s Choice Award (2021, 2023)
                </li>
                <li className="font-semibold">
                  Excellence in Cardiac Care, American Heart Association (2020)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:w-[80%] w-[90%] mx-auto my-20">
        <div>
          <h1 className="font-semibold mb-9  text-c2 text-2xl">Top Rating:</h1>
        </div>
        <div className="grid md:grid-cols-3 gap-y-9 gap-x-8">
          <div>
            <div className="flex align-middle items-center">
              <div className="mr-3">
                <img src={Ellipse1} alt="" />
              </div>
              <div>
                <p className="font-semibold mb-1 text-[#797979]">
                  Sebastian Taylor
                </p>
                <div className="flex">
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStarHalfAlt className="text-[#46C8BC] mr-1" />
                </div>
              </div>
            </div>
            <article className="text-sm w-[90%] mt-3">
              Dr. Schmidt, your exceptional care and expertise have greatly
              improved my health. Thank you for your dedication and compassion.
            </article>
          </div>
          <div>
            <div className="flex align-middle items-center">
              <div className="mr-3">
                <img src={Ellipse2} alt="" />
              </div>
              <div>
                <p className="font-semibold mb-1 text-[#797979]">
                  Chloe Washington
                </p>
                <div className="flex">
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStar className="text-[#46C8BC] mr-1" />
                </div>
              </div>
            </div>
            <article className="text-sm w-[90%] mt-3">
              Dr. Schmidt, your thoroughness and kindness during my treatment
              were truly remarkable. Thank you for being such a wonderful
              doctor!
            </article>
          </div>
          <div>
            <div className="flex align-middle items-center">
              <div className="mr-3">
                <img src={Ellipse3} alt="" />
              </div>
              <div>
                <p className="font-semibold mb-1 text-[#797979]">
                  Sawyer Baker{" "}
                </p>
                <div className="flex">
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStarHalfAlt className="text-[#46C8BC] mr-1" />
                </div>
              </div>
            </div>
            <article className="text-sm w-[95%] mt-3">
              Your professionalism and attention to detail have made a
              significant difference in my heart health, Dr. Schmidt. I'm
              grateful for your outstanding care.{" "}
            </article>
          </div>
          <div>
            <div className="flex align-middle items-center">
              <div className="mr-3">
                <img src={Ellipse4} alt="" />
              </div>
              <div>
                <p className="font-semibold mb-1 text-[#797979]">Axel Brooks</p>
                <div className="flex">
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStarHalfAlt className="text-[#46C8BC] mr-1" />
                </div>
              </div>
            </div>
            <article className="text-sm w-[90%] mt-3">
              Dr. Schmidt, thank you for always taking the time to listen and
              for your excellent care. Your expertise has been a great comfort
              to me.
            </article>
          </div>
          <div>
            <div className="flex align-middle items-center">
              <div className="mr-3">
                <img src={Ellipse5} alt="" />
              </div>
              <div>
                <p className="font-semibold mb-1 text-[#797979]">
                  Roman Hayes{" "}
                </p>
                <div className="flex">
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStar className="text-[#46C8BC] mr-1" />
                </div>
              </div>
            </div>
            <article className="text-sm w-[90%] mt-3">
              I appreciate your dedication and the personal touch you bring to
              each visit, Dr. Schmidt. Your care has been life-changing.{" "}
            </article>
          </div>
          <div>
            <div className="flex align-middle items-center">
              <div className="mr-3">
                <img src={Ellipse6} alt="" />
              </div>
              <div>
                <p className="font-semibold mb-1 text-[#797979]">
                  Silas Foster
                </p>
                <div className="flex">
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStar className="text-[#46C8BC] mr-1" />
                  <FaStarHalfAlt className="text-[#46C8BC] mr-1" />
                </div>
              </div>
            </div>
            <article className="text-sm w-[90%] mt-3">
              Your exceptional care and compassionate approach have been
              instrumental in my recovery. Thank you for being such an
              incredible doctor.
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
