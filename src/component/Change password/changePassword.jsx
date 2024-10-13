import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import img from "./../../Unity Hospital/Confirm.png";
import { AppNavigationContext } from "../../context/GlobalContext";
import { GoTriangleRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Change = () => {
  const { setSidebarOpen } = useContext(AppNavigationContext);
  const navigate = useNavigate();

  useEffect(() => {
    setSidebarOpen(false);
  }, [setSidebarOpen]);

  return (
    <>
      <Helmet>
        <title>Forgot Password - Unity Hospital</title>
      </Helmet>

      <section className="flex flex-col items-center justify-center w-full min-h-screen px-4 lg:px-0">
        <form className="flex flex-col text-center lg:pb-0 p-6 lg:p-12 border-2 lg:border-0 order-2 lg:order-1 w-full max-w-lg lg:max-w-none bg-white rounded-lg shadow-lg lg:shadow-none">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#46C8BC] mb-4 lg:mb-6">
            Change Your Password
          </h1>
          <h2 className="font-medium lg:text-lg mb-4 ">
            change every 90 days.
          </h2>
          <p className="font-medium lg:text-lg text-gray-600 mb-6">
            8+ characters with mix of upper/lowercase, numbers, specials.{" "}
          </p>

          <div className="flex flex-col gap-4 mb-4">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm lg:text-md rounded-lg focus:ring-teal-500 focus:border-teal-500 w-full max-w-md mx-auto py-2 px-4"
            />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm lg:text-md rounded-lg focus:ring-teal-500 focus:border-teal-500 w-full max-w-md mx-auto py-2 px-4"
            />
            <button
              type="submit"
              onClick={() => {
                navigate("/Login");
              }}
              className="flex items-center justify-center gap-2 px-16 m-auto py-1 lg:w-fit text-lg font-medium text-white rounded-lg bg-[#46C8BC] hover:bg-[#38AFA6] transition duration-300 ease-in-out"
            >
              Confirm <GoTriangleRight />
            </button>
          </div>
        </form>

        <div className="relative flex justify-center items-center order-1 lg:order-2 w-full lg:w-[40%] mb-8 lg:mb-0">
          <img
            src={img}
            alt="Forgot Password"
            className=" relative top-10 lg:top-0 w-[60%] md:w-[40%] lg:w-[80%] xl:w-[60%]"
          />
        </div>
      </section>
    </>
  );
};

export default Change;
