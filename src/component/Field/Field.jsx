import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppNavigationContext } from "../../context/GlobalContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import img1 from "./../../Unity Hospital/Field/Doctors/Mask group-1.png";
import img2 from "./../../Unity Hospital/Field/Doctors/Mask group-2.png";
import img3 from "./../../Unity Hospital/Field/Doctors/Mask group-3.png";
import img from "./../../Unity Hospital/Field/Doctors/Mask group.png";

export default function Field() {
  const { setSidebarOpen } = useContext(AppNavigationContext);
  useEffect(() => {
    setSidebarOpen(true);
  }, [setSidebarOpen]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: null,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const doctors = [
    {
      img: img,
      name: "Dr. Morgan Schmidt",
      specialty: "Cardiology",
      rating: "4.9/5",
    },
    {
      img: img1,
      name: "Dr. David Garcia",
      specialty: "Psychiatry",
      rating: "4.7/5",
    },
    {
      img: img2,
      name: "Dr. Michael Lee",
      specialty: "Orthopedics",
      rating: "4.8/5",
    },
    {
      img: img3,
      name: "Dr. Emily Wang",
      specialty: "Neurology",
      rating: "4.8/5",
    },
  ];
  return (
    <>
      <section className="overflow-hidden mt-5">
        <div className="flex ">
          <div>
            <img
              src="Unity Hospital\HomePage\Vector.png"
              className="w-24 xl:mt-11 xl:block lg:block md:block  hidden"
              alt=""
            />
          </div>
          <div className="md:w-full w-[90%] mx-auto  lg:grid md:grid-cols-2 flex flex-col-reverse justify-between align-middle items-center">
            <div className="md:ml-7">
              <h1 className="text-[#1E8ACB] font-bold xl:text-3xl md:text-2xl text-xl  mb-3">
                What is Emergency Medicine ?!
              </h1>
              <p className="mb-9 xl:w-[88%] w-[100%] md:text-base text-sm">
                Emergency Medicine is a medical specialty focused on the
                immediate decision-making and action necessary to prevent death
                or any further disability both in the pre-hospital setting by
                directing emergency medical technicians and in the emergency
                department. Here are some key aspects of Emergency Medicine:
              </p>

              <h3 className="text-[#1E8ACB] font-semibold md:text-2xl text-lg mb-6">
                Key aspects include:
              </h3>
              <ul className="list-disc grid gap-2 md:ml-9  ml-6">
                <li className="md:text-lg text-base leading-5">
                  <span className="font-semibold">Scope:</span> Acute care for
                  diverse conditions in a fast-paced environment.
                </li>
                <li className="md:text-lg text-base leading-5">
                  <span className="font-semibold">Skills:</span> Rapid
                  assessment, life-saving procedures, and patient stabilization.
                </li>
                <li className="md:text-lg text-base leading-5">
                  <span className="font-semibold">Training:</span> Residency in
                  Emergency Medicine, followed by board certification.
                </li>
                <li className="md:text-lg text-base leading-5">
                  <span className="font-semibold">Collaboration:</span>
                  Coordination with other specialists and healthcare staff.
                </li>
              </ul>
            </div>
            <div>
              <img
                src="Unity Hospital\Field\Main\doctors.png"
                alt=""
                className="   max-w-[125%] lg:block hidden "
              />
              <img
                src="Unity Hospital\Field\Main\Mobdoctor.png"
                alt=""
                className="mb-5 w-[30rem] lg:hidden block "
              />
            </div>
          </div>
          <div>
            <img
              src="Unity Hospital\Field\Main\Vectorright.png"
              alt=""
              className="xl:w-28 md:w-20 xl:mt-44 md:mt-40 md:block hidden "
            />
          </div>
        </div>
      </section>
      <section className="w-[90%] bg-[url('/Unity%20Hospital/Field/Main/image%2016.png')] bg-cover mx-auto my-9">
        <p className="font-bold p-7  md:text-3xl text-lg text-white text-center">
          “You will always be Safe with us”
        </p>
      </section>
      <section className="w-[90%] mx-auto my-11">
        <h1 className="text-2xl text-[#1E8ACB] font-bold my-8">
          Doctors working in that field
        </h1>
        <Slider {...settings}>
          {doctors.map((doctor, index) => (
            <Link to="/Doctor-Info" key={index} className="p-4">
              <div className="relative bg-white pb-6 overflow-hidden group">
                <div className="border-b-2 border-[#1e8acb] relative overflow-hidden">
                  <div className="absolute bottom-0 top-0 left-0 right-0 group-hover:bg-gradient-to-t from-blue-700/100 via-gray-800/5 to-sky-100/5 transition-all duration-500 z-10"></div>
                  <img
                    src={doctor.img}
                    alt={doctor.name}
                    className="ransition-transform duration-300 transform group-hover:scale-105 mx-auto"
                  />
                </div>
                <div className="px-5">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {doctor.name}
                  </h3>
                  <div className="flex justify-between mt-2 items-center">
                    <p className="text-blue-600 mb-2">{doctor.specialty}</p>
                    <p className="flex justify-center items-center">
                      {doctor.rating}
                      <FaStar className="text-[#46C8BC] ml-1" />
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </section>
    </>
  );
}
