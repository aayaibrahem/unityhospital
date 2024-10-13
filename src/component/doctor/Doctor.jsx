import { useContext, useEffect, useState } from "react";
import { AppNavigationContext } from "../../context/GlobalContext";
import { FaSearch, FaStar } from "react-icons/fa";
import img1 from "./../../Unity Hospital/Field/Doctors/Mask group-1.png";
import img2 from "./../../Unity Hospital/Field/Doctors/Mask group-2.png";
import img3 from "./../../Unity Hospital/Field/Doctors/Mask group-3.png";
import img from "./../../Unity Hospital/Field/Doctors/Mask group.png";
import Slider from "react-slick";
import "./Doctor.css";
import { Link } from "react-router-dom";

const Doctor = () => {
  const { setSidebarOpen } = useContext(AppNavigationContext);
  useEffect(() => {
    setSidebarOpen(true);
  }, [setSidebarOpen]);

  const [searchQuery, setSearchQuery] = useState("");
  const [tags, setTags] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim() && !tags.includes(searchQuery)) {
      let newTags = [...tags, searchQuery];

      if (newTags.length > 7) {
        newTags.shift();
      }

      setTags(newTags);
      setSearchQuery("");
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
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

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="my-16 lg:mt-0">
      <div className="w-[90%] mx-auto p-6">
        <div className="relative mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for doctors, specialties..."
            className="border border-gray-300 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white p-2 rounded-md shadow hover:bg-blue-600 transition flex items-center justify-center"
            >
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap mb-6 gap-3">
          {tags.map((tag, index) => (
            <button
              key={index}
              onClick={() => handleTagRemove(tag)}
              className="px-4 py-2 bg-gray-200 rounded-full hover:bg-blue-500 hover:text-white transition"
            >
              {tag}
            </button>
          ))}
        </div>
        {/*  */}
        <section>
          <h2 className="text-2xl text-[#1E8ACB] font-bold mb-4">
            Top Rated Doctors
          </h2>
          {searchQuery ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDoctors.map((doctor, index) => (
                <Link to="/Doctor-Info" key={index} className="p-4">
                  <div className="relative bg-white pb-6 overflow-hidden group">
                    <div className="border-b-2 border-[#1e8acb] relative overflow-hidden">
                      <div className="absolute bottom-0 top-0 left-0 right-0 group-hover:bg-gradient-to-t from-blue-700/100 via-gray-800/5 to-sky-100/5 transition-all duration-500 z-10"></div>
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
            </div>
          ) : (
            <Slider {...settings}>
              {doctors.map((doctor, index) => (
                <Link to="/Doctor-Info" key={index} className="p-4">
                  <div className="relative bg-white pb-6 overflow-hidden group">
                    <div className="border-b-2 border-[#1e8acb] relative overflow-hidden">
                      <div className="absolute bottom-0 top-0 left-0 right-0 group-hover:bg-gradient-to-t from-blue-700/100 via-gray-800/5 to-sky-100/5 transition-all duration-500 z-10"></div>
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
          )}
        </section>

        {/*  */}

        <section className="my-8">
          <h2 className="text-2xl text-[#1E8ACB] font-bold mb-4">
            Today's Available Doctors
          </h2>
          {searchQuery ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDoctors.map((doctor, index) => (
                <Link to="/Doctor-Info" key={index} className="p-4">
                  <div className="relative bg-white pb-6 overflow-hidden group">
                    <div className="border-b-2 border-[#1e8acb] relative overflow-hidden">
                      <div className="absolute bottom-0 top-0 left-0 right-0 group-hover:bg-gradient-to-t from-blue-700/100 via-gray-800/5 to-sky-100/5 transition-all duration-500 z-10"></div>
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
            </div>
          ) : (
            <Slider {...settings}>
              {doctors.map((doctor, index) => (
                <Link to="/Doctor-Info" key={index} className="p-4">
                  <div className="relative bg-white pb-6 overflow-hidden group">
                    <div className="border-b-2 border-[#1e8acb] relative overflow-hidden">
                      <div className="absolute bottom-0 top-0 left-0 right-0 group-hover:bg-gradient-to-t from-blue-700/100 via-gray-800/5 to-sky-100/5 transition-all duration-500 z-10"></div>
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
          )}
        </section>

        <section>
          <h2 className="text-2xl text-[#1E8ACB] font-bold mb-4">
            All Doctors
          </h2>

          {searchQuery ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDoctors.map((doctor, index) => (
                <Link to="/Doctor-Info" key={index} className="p-4">
                  <div className="relative bg-white pb-6 overflow-hidden group">
                    <div className="border-b-2 border-[#1e8acb] relative overflow-hidden">
                      <div className="absolute bottom-0 top-0 left-0 right-0 group-hover:bg-gradient-to-t from-blue-700/100 via-gray-800/5 to-sky-100/5 transition-all duration-500 z-10"></div>
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
            </div>
          ) : (
            <>
              <Slider {...settings}>
                {doctors.map((doctor, index) => (
                  <Link to="/Doctor-Info" key={index} className="p-4">
                    <div className="relative bg-white pb-6 overflow-hidden group">
                      <div className="border-b-2 border-[#1e8acb] relative overflow-hidden">
                        <div className="absolute bottom-0 top-0 left-0 right-0 group-hover:bg-gradient-to-t from-blue-700/100 via-gray-800/5 to-sky-100/5 transition-all duration-500 z-10"></div>
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
                          <p className="text-blue-600 mb-2">
                            {doctor.specialty}
                          </p>
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
              <Slider {...settings}>
                {doctors.map((doctor, index) => (
                  <Link to="/Doctor-Info" key={index} className="flex p-4">
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
                          <p className="text-blue-600 mb-2">
                            {doctor.specialty}
                          </p>
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
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default Doctor;
