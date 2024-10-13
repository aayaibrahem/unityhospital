import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import img from "./../../Unity Hospital/Forgot.png";
import { Link, useNavigate } from "react-router-dom";
import { AppNavigationContext } from "../../context/GlobalContext";
import { GoTriangleRight } from "react-icons/go";
import axios from "axios";
import { useFormik } from "formik";

const Forgotten = () => {
  const { setSidebarOpen } = useContext(AppNavigationContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setSidebarOpen(false);
  }, [setSidebarOpen]);

  const resetPasswordForm = async (values) => {
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        values
      );

      console.log("Password reset link sent:", data);
      navigate("/Verify");
    } catch (error) {
      setError(error.response.data.message || "Something went wrong.");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      await resetPasswordForm(values);
      setSubmitting(false);
    },
  });

  return (
    <>
      <Helmet>
        <title>Forgot Password - Unity Hospital</title>
      </Helmet>

      <section className="flex flex-col items-center justify-center w-full my-16 px-4 lg:px-0">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col text-center lg:pb-5 p-6 lg:p-12 border-2 lg:border-0 order-2 lg:order-1 w-full max-w-lg lg:max-w-none bg-white rounded-lg shadow-lg lg:shadow-none"
        >
          <h1 className="text-3xl lg:text-5xl font-bold text-[#46C8BC] mb-4 lg:mb-6">
            Forgot your password?
          </h1>
          <p className="font-medium lg:text-lg mb-6">
            Enter your email address and you will receive a code to reset your
            password.
          </p>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="flex flex-col gap-4 mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm lg:text-md rounded-lg focus:ring-teal-500 focus:border-teal-500 w-full max-w-md mx-auto py-2 px-4"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-16 m-auto py-1 lg:w-fit text-lg font-medium text-white rounded-lg bg-[#46C8BC] hover:bg-[#38AFA6] transition duration-300 ease-in-out"
              disabled={formik.isSubmitting}
            >
              Submit <GoTriangleRight />
            </button>
          </div>

          <p className="text-gray-500">
            Already have an account?
            <Link
              to="/Login"
              className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
            >
              Login
            </Link>
          </p>
        </form>

        <div className="relative flex justify-center items-center order-1 lg:order-2 w-full lg:w-[40%] mb-8 lg:mb-0">
          <img
            src={img}
            alt="Forgot Password"
            className="relative top-16 lg:top-0 w-1/2 md:w-[40%] lg:w-[80%] xl:w-[60%]"
          />
        </div>
      </section>
    </>
  );
};

export default Forgotten;
