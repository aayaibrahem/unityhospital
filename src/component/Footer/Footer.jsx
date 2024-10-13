import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <section className=" bg-gray-200 border-t border-gray-300 xl:text-start lg:text-start  text-center">
        <footer className="w-[90%] mx-auto pt-7 ">
          <div className="  grid grid-cols-1 md:grid-cols-4 gap-7">
            {/* Contact Us */}
            <div>
              <h3 className="font-semibold xl:text-2xl lg:text-xl md:text-xl text-xl mb-3">
                Contact Us
              </h3>
              <p className="font-light">Unity Hospital</p>
              <p className="font-light">
                123 Health St., Wellness City, State, 45678
              </p>
              <p className="font-light">Phone: (123) 456-7890</p>
              <p className="font-light">Email: contact@unityhospital.com</p>
            </div>
            <hr className="border-black md:hidden" />
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold xl:text-2xl lg:text-xl md:text-xl text-xl  mb-3">
                Quick Links
              </h3>
              <ul className="grid grid-cols-2 ">
                <li className="mb-2">
                  <Link
                    to="/Home"
                    className="text-black font-semibold hover:text-c2"
                  >
                    Home
                  </Link>
                </li>

                <li className="mb-2">
                  <Link
                    to="/Find-a-doctor"
                    className="text-black  font-semibold hover:text-c2"
                  >
                    Doctors
                  </Link>
                </li>

                <li className="mb-2">
                  <Link
                    to="/Contact-us"
                    className="text-black font-semibold  hover:text-c2"
                  >
                    Contact us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/About-us"
                    className="text-black font-semibold  hover:text-c2"
                  >
                    About us
                  </Link>
                </li>
              </ul>
            </div>
            <hr className="border-black md:hidden" />
            {/* Hours of Operation */}
            <div>
              <h3 className="font-semibold xl:text-2xl lg:text-xl md:text-xl text-xl  mb-3">
                Hours of Operation
              </h3>
              <p className="font-light">Mon-Fri: 8:00 AM - 5:00 PM</p>
              <p className="font-light">Sat: 9:00 AM - 1:00 PM</p>
              <p className="font-light">Sun: Closed</p>
              <p className="mt-3">Emergency Services: Available 24/7</p>
            </div>
            <hr className="border-black md:hidden" />
            {/* Follow us */}
            <div className="xl:ml-12 lg:ml-12  ml-0">
              <h3 className="font-semibold xl:text-2xl lg:text-xl md:text-xl text-xl  mb-3 ">
                Follow us
              </h3>
              <div className="flex space-x-4 mt-5 xl:justify-normal  lg:justify-normal justify-center">
                <FaFacebook className="text-3xl hover:text-cgray cursor-pointer" />
                <BsTwitterX className="text-3xl  hover:text-cgray cursor-pointer" />
                <FaLinkedinIn className="text-3xl  hover:text-cgray cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 pt-4 xl:flex lg:flex md:flex justify-between">
            <p className="mb-2">Copyright 2024 © UnityHospital</p>
            <p>
              <a href="#" className="text-black hover:underline">
                Privacy Policy
              </a>
              |
              <a href="#" className="text-black hover:underline">
                Terms of Use
              </a>
            </p>
          </div>
        </footer>
      </section>
    </>
  );
}
