import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import Slider from "react-slick";
import { AppNavigationContext } from "../../context/GlobalContext";
import VectorImg from "./../../Unity Hospital/HomePage/Vector.png";
import FrameImg1 from "./../../Unity Hospital/HomePage/Frame 36.png";
import FrameImg2 from "./../../Unity Hospital/HomePage/Frame 37.png";
import FrameImg3 from "./../../Unity Hospital/HomePage/Frame 38.png";
import FrameImg4 from "./../../Unity Hospital/HomePage/Frame 39.png";
import FrameImg5 from "./../../Unity Hospital/HomePage/Frame 40.png";
import HeroSection from "./../../Unity Hospital/HomePage/HeroSection.png";
import Group9 from "./../../Unity Hospital/HomePage/Group9.png";
import Service1 from "./../../Unity Hospital/HomePage/Our Services/Group 54.png";
import Service2 from "./../../Unity Hospital/HomePage/Our Services/Group 54-1.png";
import Service3 from "./../../Unity Hospital/HomePage/Our Services/Group 54-2.png";
import Service4 from "./../../Unity Hospital/HomePage/Our Services/Group 54-3.png";
import Service5 from "./../../Unity Hospital/HomePage/Our Services/Group 54-4.png";
import Service6 from "./../../Unity Hospital/HomePage/Our Services/Group 54-5.png";
import Mask1 from "./../../Unity Hospital/HomePage/Our fields/Mask group.png";
import Mask2 from "./../../Unity Hospital/HomePage/Our fields/Mask group-1.png";
import Mask3 from "./../../Unity Hospital/HomePage/Our fields/Mask group-2.png";
import Mask4 from "./../../Unity Hospital/HomePage/Our fields/Mask group-3.png";
import Mask5 from "./../../Unity Hospital/HomePage/Our fields/Mask group-4.png";
import Mask6 from "./../../Unity Hospital/HomePage/Our fields/Mask group-5.png";
import Mask7 from "./../../Unity Hospital/HomePage/Our fields/Mask group-6.png";
import Mask8 from "./../../Unity Hospital/HomePage/Our fields/Mask group-7.png";
import Logo3 from "./../../Unity Hospital/Logo/Logo3.png";
import img1 from "./../../Unity Hospital/Field/Doctors/Mask group-1.png";
import img2 from "./../../Unity Hospital/Field/Doctors/Mask group-2.png";
import img3 from "./../../Unity Hospital/Field/Doctors/Mask group-3.png";
import img from "./../../Unity Hospital/Field/Doctors/Mask group.png";
export default function HomePage() {
  const { setSidebarOpen } = useContext(AppNavigationContext);

  useEffect(() => {
    setSidebarOpen(true);
  }, [setSidebarOpen]);

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
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <section>
        <div className="xl:grid grid-cols-2 lg:grid md:grid  mb-7 flex flex-col-reverse items-center mt-28 lg:mt-0   ">
          <div>
            <div className="flex gap-5 items-center align-middle">
              <img
                src={VectorImg}
                className="w-[11%] xl:block lg:block md:block  hidden"
                alt=""
              />
              <div className="mt-11 w-[80%]  mx-auto">
                <p className="text-[#1E8ACB] text-xl font-bold">Welcome to</p>
                <div>
                  <h1 className="xl:text-5xl lg:text-4xl md:text-4xl text-3xl font-bold ">
                    Unity Hospital
                    <p className="text-[#1E8ACB] mt-2 font-bold md:text-4xl text-[1.7rem] xl:text-[2.7rem] lg:text-[2rem]">
                      Top Quality care
                    </p>
                  </h1>
                </div>

                <article className="text-cgray font-light text-xl xl:max-w-[66%] md:w-[80%] lg:w-[70%] w-72 mt-7 mb-7">
                  we unite advanced medical expertise with compassionate care to
                  ensure the health and well-being of our community.
                </article>
                <div className=" items-center md:flex gap-2 mb-6">
                  <Link to="/Find-a-doctor">
                    <button className="bg-[#1E8ACB] xl:w-56 lg:w-[11.6rem] w-full font-bold xl:text-xl lg:text-lg md:text-base text-lg xl:px-14 lg:px-11  text-white px-7 rounded-md py-4 md:px-9  hover:shadow-inner hover:shadow-sky-300">
                      Get Started
                    </button>
                  </Link>
                  <Link to="/Contact-us">
                    <button className="bg-transparent xl:w-52 lg:w-[10.9rem] w-full xl:mt-0 lg:mt-0 md:mt-0 mt-2  rounded-md text-black lg:px-10  xl:text-xl lg:text-lg text-lg  font-bold border border-black md:px-5 xl:px-12  px-7 py-3 hover:shadow-md">
                      Contact Us
                    </button>
                  </Link>
                </div>
                <div className="">
                  <ul className="xl:flex-nowrap lg:flex-nowrap md:flex-nowrap  sm:flex-nowrap flex flex-wrap opacity-70  justify-center items-center  align-middle lg:max-w-[95%] xl:max-w-[85%] md:w-[90%]">
                    <li>
                      <img src={FrameImg1} alt="" />
                    </li>
                    <li>
                      <img src={FrameImg2} className="w-[90%] mt-2" alt="" />
                    </li>
                    <li>
                      <img src={FrameImg3} alt="" />
                    </li>
                    <li>
                      <img src={FrameImg4} alt="" />
                    </li>
                    <li>
                      <img src={FrameImg5} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src={HeroSection}
              alt=""
              className="hidden xl:block lg:block md:block"
            />
            <img
              src={Group9}
              alt=""
              className="xl:hidden lg:hidden md:hidden  w-[200%] shadow-md  shadow-[#1E8ACB] "
            />
          </div>
        </div>
      </section>
      <section className=" bg-[url('Unity%20Hospital/HomePage/Our%20Services/Group%2058.png')] bg-opacity-0 bg-center bg-cover md:mt-11 relative xl:pb-52 lg:pb-52 pb-9 m">
        <div className="flex items-center justify-between align-middle  pt-7">
          <hr className="xl:max-w-[41%] lg:w-[42%] md:w-[40%] sm:w-[37%] w-[34%] border-2 rounded-md " />

          <h1 className="mx-2 font-bold  text-white xl:text-4xl lg:text-2xl sm:text-xl  text-lg md:text-[1.3rem]">
            Our Services
          </h1>
          <hr className="xl:max-w-[42%] lg:w-[42.5%] md:w-[40%] sm:w-[37%] w-[33%] border-2 rounded-md " />
        </div>

        <div className="grid gap-x-5 gap-y-14 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-[80%] mx-auto mt-20">
          <div className="text-center">
            <img
              src={Service1}
              alt=""
              className="inline-block w-24 sm:w-24 lg:w-32 xl:w-40"
            />

            <h3 className="text-white   xl:text-[1.7rem] md:text-nowrap lg:text-[1.3rem]  md:text-xl sm:text-lg  my-2 font-bold ">
              Emergency and Trauma Care
            </h3>
            <p className="text-white xl:text-base lg:text-base md:text-base sm:text-sm text-[11px] font-thin md:w-[80%] mx-auto">
              Providing 24/7 emergency services with rapid response teams and
              advanced trauma care units.
            </p>
          </div>
          <div className="text-center">
            <img
              src={Service2}
              alt=""
              className="inline-block w-24 sm:w-24 lg:w-32  xl:w-40"
            />

            <h3 className="text-white  xl:text-3xl  lg:text-[1.3rem]  md:text-xl sm:text-lg   my-2 font-bold">
              Surgical Services
            </h3>
            <p className="text-white xl:text-base lg:text-base md:text-base sm:text-sm text-[11px] font-thin md:w-[80%] mx-auto">
              Offering a wide range of surgical procedures, including minimally
              invasive and robotic surgeries, performed by skilled surgeons.
            </p>
          </div>
          <div className="text-center">
            <img
              src={Service3}
              alt=""
              className="inline-block w-24 sm:w-24 lg:w-32  xl:w-40"
            />

            <h3 className="text-white  xl:text-[1.7rem] md:text-nowrap  lg:text-[1.3rem]  md:text-xl sm:text-lg  my-2 font-bold">
              Maternity and Neonatal Care
            </h3>
            <p className="text-white xl:text-base lg:text-base md:text-base sm:text-sm text-[11px] font-thin md:w-[80%] mx-auto">
              Comprehensive care throughout pregnancy, childbirth, and postnatal
              periods, with advanced NICUs for newborns.
            </p>
          </div>
          <div className="text-center">
            <img
              src={Service4}
              alt=""
              className="inline-block  w-24 sm:w-24 lg:w-32  xl:w-40"
            />

            <h3 className="text-white  xl:text-3xl md:text-nowrap lg:text-[1.3rem]  md:text-xl sm:text-lg   my-2 font-bold">
              Cardiology Services Care
            </h3>
            <p className="text-white xl:text-base lg:text-base md:text-base sm:text-sm text-[11px] font-thin md:w-[80%] mx-auto">
              Advanced cardiac care including diagnostics, treatment, and
              rehabilitation for heart-related conditions.
            </p>
          </div>
          <div className="text-center">
            <img
              src={Service5}
              alt=""
              className="inline-block w-24 sm:w-24 lg:w-32  xl:w-40"
            />

            <h3 className="text-white  xl:text-3xl  lg:text-[1.3rem]  md:text-xl sm:text-lg  my-2 font-bold">
              Oncology Services
            </h3>
            <p className="text-white xl:text-base lg:text-base md:text-base sm:text-sm text-[11px] font-thin md:w-[80%] mx-auto">
              Specialized cancer treatment services, including chemotherapy,
              radiation therapy, and support programs.
            </p>
          </div>
          <div className="text-center">
            <img
              src={Service6}
              alt=""
              className="inline-block w-24 sm:w-24 lg:w-32  xl:w-40"
            />

            <h3 className="text-white xl:text-3xl  lg:text-[1.3rem]  md:text-xl sm:text-lg  my-2 font-bold">
              Orthopedic Services
            </h3>
            <p className="text-white xl:text-base lg:text-base md:text-base sm:text-sm text-[11px] font-thin md:w-[80%] mx-auto ">
              Expert care for bone, joint, and muscle conditions, including
              joint replacement, sports medicine, and rehabilitation.
            </p>
          </div>
        </div>
        <div className="absolute  mt-16 flex justify-center inset-x-0  ">
          <iframe
            className="drop-shadow-backshadow xl:w-[880px] lg:w-[740px] md:w-[640px] sm:w-[440px] w-[400px]"
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/fXmAurh012s"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            poster="Unity Hospital/HomePage/image 6.png"
          ></iframe>
        </div>
      </section>

      <section className="w-[90%] xl:w-[80%] lg:w-[85%] md:mt-[28rem]  mt-[19rem]  mx-auto">
        <div className="container mx-auto py-8">
          {/* Section Title */}
          <h2 className="xl:text-4xl text-2xl font-bold text-[#1E8ACB] mb-11">
            Our Fields
          </h2>

          {/* Grid Container */}
          <div className=" grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 gap-6">
            {/* Emergency Medicine */}
            <Link to="/field">
              <div className="relative group overflow-hidden shadow-lg">
                <img
                  src={Mask1}
                  alt="Emergency Medicine"
                  className="object-center h-64 w-full  transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0  transition-opacity duration-300 group-hover:bg-blue-500/70 "></div>
                <div class="absolute inset-0  bg-gradient-to-t from-gray-800/100 via-gray-800/5 to-gray-900/30 group-hover:opacity-0 transition-opacity duration-500"></div>
                <div class="absolute inset-0 hover:bg-blue-300 bg-gradient-to-b from-gray-800/100 via-gray-800/5 to-gray-900/30 group-hover:opacity-0 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-center mx-auto  text-3xl font-bold">
                    Emergency Medicine
                  </h3>
                </div>
              </div>
            </Link>

            {/* Cardiology */}
            <div className="relative group  overflow-hidden shadow-lg">
              <img
                src={Mask2}
                alt="Cardiology"
                className="object-center h-64  w-full  transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0  transition-opacity duration-300 group-hover:bg-blue-500/70 "></div>
              <div class="absolute inset-0  bg-gradient-to-t from-gray-800/100 via-gray-800/5 to-gray-900/30 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div class="absolute inset-0 hover:bg-blue-300 bg-gradient-to-b from-gray-800/100 via-gray-800/5 to-gray-900/30 group-hover:opacity-0 transition-opacity duration-500"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-center mx-auto  text-3xl font-bold">
                  Cardiology
                </h3>
              </div>
            </div>

            {/* Oncology */}
            <div className="relative group  overflow-hidden shadow-lg">
              <img
                src={Mask3}
                alt="Oncology"
                className="object-center h-64  w-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0  transition-opacity duration-300 group-hover:bg-blue-500/70 "></div>
              <div class="absolute inset-0  bg-gradient-to-t from-gray-800/100 via-gray-800/5 to-gray-900/30 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div class="absolute inset-0 hover:bg-blue-300 bg-gradient-to-b from-gray-800/100 via-gray-800/5 to-gray-900/30 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-center mx-auto  text-3xl font-bold">
                  Oncology
                </h3>
              </div>
            </div>

            {/* Orthopedics */}
            <div className="relative group  overflow-hidden shadow-lg">
              <img
                src={Mask4}
                alt="Orthopedics"
                className="object-center h-64  w-full  transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0  transition-opacity duration-300 group-hover:bg-blue-500/70 "></div>
              <div class="absolute inset-0  bg-gradient-to-t from-gray-800/100 via-gray-800/5 to-gray-900/30 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div class="absolute inset-0 hover:bg-blue-300 bg-gradient-to-b from-gray-800/100 via-gray-800/5 to-gray-900/30 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-center mx-auto  text-3xl font-bold">
                  Orthopedics
                </h3>
              </div>
            </div>

            {/* Pediatrics */}
            <div className="relative group  overflow-hidden shadow-lg">
              <img
                src={Mask5}
                alt="Pediatrics"
                className="object-center h-64  w-full  transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0  transition-opacity duration-300 group-hover:bg-blue-500/70 "></div>
              <div class="absolute inset-0  bg-gradient-to-t from-gray-800/100 via-gray-800/5 to-gray-900/30 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div class="absolute inset-0 hover:bg-blue-300 bg-gradient-to-b from-gray-800/100 via-gray-800/5 to-gray-900/30 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-center mx-auto  text-3xl font-bold">
                  Pediatrics
                </h3>
              </div>
            </div>

            {/* Gynecology and Obstetrics */}
            <div className="relative group  overflow-hidden shadow-lg">
              <img
                src={Mask6}
                alt="Gynecology and Obstetrics"
                className="object-center h-64 w-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0  transition-opacity duration-300 group-hover:bg-blue-500/70 "></div>
              <div class="absolute inset-0  bg-gradient-to-t from-gray-800/100 via-gray-800/5 to-gray-900/30 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div class="absolute inset-0 hover:bg-blue-300 bg-gradient-to-b from-gray-800/100 via-gray-800/5 to-gray-900/30 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-center mx-auto   text-3xl font-bold">
                  Gynecology and Obstetrics
                </h3>
              </div>
            </div>

            {/* Neurology */}
            <div className="relative group  overflow-hidden shadow-lg">
              <img
                src={Mask7}
                alt="Neurology"
                className="object-center h-64  w-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0  transition-opacity duration-300 group-hover:bg-blue-500/70 "></div>
              <div class="absolute inset-0  bg-gradient-to-t from-gray-800/100 via-gray-800/5 to-gray-900/30 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div class="absolute inset-0 hover:bg-blue-300 bg-gradient-to-b from-gray-800/100 via-gray-800/5 to-gray-900/30 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-center mx-auto  text-3xl font-bold">
                  Neurology
                </h3>
              </div>
            </div>

            {/* Gastroenterology */}
            <div className="relative group  overflow-hidden shadow-lg">
              <img
                src={Mask8}
                alt="Gastroenterology"
                className="object-center h-64  w-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0  transition-opacity duration-300 group-hover:bg-blue-500/70 "></div>
              <div class="absolute inset-0  bg-gradient-to-t from-gray-800/100 via-gray-800/5 to-gray-900/30 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div class="absolute inset-0 hover:bg-blue-300 bg-gradient-to-b from-gray-800/100 via-gray-800/5 to-gray-900/30 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-center mx-auto md:text-[1.7rem]  text-[1.3rem] font-bold">
                  Gastroenterology
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-14 xl:w-[80%] lg:w-[80%] md:w-[80%] w-[90%] mx-auto">
        <div className="flex justify-between">
          <h1 className="xl:text-3xl text-2xl font-bold text-[#1E8ACB] mb-9">
            Top Rated Doctors
          </h1>
          <Link
            to="/Find-a-doctor"
            className="text-xl hidden xl:inline-block lg:inline-block md:inline-block font-semibold text-[#1E8ACB] mb-11"
          >
            Find more
          </Link>
        </div>
        <Slider {...settings}>
          {doctors.map((doctor, index) => (
            <Link to="/Doctor-Info" key={index} className="p-4">
              <div className="relative bg-white pb-6 overflow-hidden group">
                <div className="border-b-2 border-[#1e8acb] relative overflow-hidden">
                  <div className="absolute inset-0 group-hover:bg-gradient-to-t from-blue-700/100 via-gray-800/5 to-sky-100/5 transition-all duration-500 z-10"></div>
                  <img
                    src={doctor.img}
                    alt={doctor.name}
                    className="transition-transform duration-300 transform group-hover:scale-105 mx-auto"
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
        <button className="w-[100%] font-semibold text-white text-xl md:hidden py-4 mt-5 rounded-md bg-[#1E8ACB]">
          Find more Doctors
        </button>
      </section>
      <section className="mt-36">
        <div className="relative bg-background-gradient py-8">
          <div className="container mx-auto grid  grid-cols-1 md:grid-cols-2 gap-6 px-4 relative z-10">
            {/* Left side: Form */}
            <div className="flex items-center justify-center xl:text-left lg:text-left  text-center ">
              <form>
                <label
                  htmlFor="email"
                  className="block text-white text-lg mb-2"
                >
                  For more information or updates:
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="xl:w-96 lg:w-96 md:w-80 w-80  px-4 py-2 rounded-lg mb-4 bg-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="xl:w-96 lg:w-96 md:w-80 w-80 py-2 border border-white text-white rounded-lg hover:bg-background-gradient  transition duration-300 text-lg font-bold"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Right side: Quote */}
            <div className="flex items-center justify-center">
              <div className="text-center text-white relative">
                <FaQuoteLeft className="text-3xl" />
                <blockquote className="text-xl font-bold">
                  Your health is your wealth
                </blockquote>
                <p className="text-base">
                  Choose the best care with the best <strong>doctors</strong>.
                </p>
                <FaQuoteRight className="text-3xl absolute lg:left-80 md:left-80 xl:left-80 left-72 overflow-hidden" />
              </div>
            </div>
          </div>

          {/* Background logo on the right */}
          <div className="absolute inset-y-0 right-20 opacity-20 md:opacity-40 lg:opacity-60">
            <img src={Logo3} alt="Background logo" className="h-full" />
          </div>
        </div>
      </section>
    </>
  );
}
