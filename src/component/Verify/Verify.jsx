import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import img from "./../../Unity Hospital/Verify.png";
import { AppNavigationContext } from "../../context/GlobalContext";
import { GoTriangleRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";

const Verify = () => {
  const { setSidebarOpen } = useContext(AppNavigationContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setSidebarOpen(false);
  }, [setSidebarOpen]);

  const resetPasswordForm = async (values) => {
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
        { resetCode: values.digits.join("") }
      );

      console.log("Password reset link sent:", data);
      navigate("/Change-pass");
    } catch (error) {
      setError(error.response?.data.message || "Something went wrong.");
    }
  };

  const formik = useFormik({
    initialValues: {
      digits: Array(6).fill(""),
    },
    onSubmit: async (values, { setSubmitting }) => {
      await resetPasswordForm(values);
      setSubmitting(false);
    },
  });

  const handleChange = (index, value) => {
    const newDigits = [...formik.values.digits];
    newDigits[index] = value;
    formik.setFieldValue("digits", newDigits);
    if (value && index < 5) {
      document.getElementsByName(`digit${index + 2}`)[0].focus();
    }
  };

  return (
    <>
      <Helmet>
        <title>Forgot Password - Unity Hospital</title>
      </Helmet>

      <section className="flex flex-col items-center justify-center w-full my-16 px-4 lg:px-0">
        <form onSubmit={formik.handleSubmit} className="flex flex-col text-center lg:pb-0 p-6 lg:p-12 border-2 lg:border-0 order-2 lg:order-1 w-full max-w-lg lg:max-w-none bg-white rounded-lg shadow-lg lg:shadow-none">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#46C8BC] mb-4 lg:mb-6">
            Verify your Email address
          </h1>
          <p className="font-medium lg:text-lg mb-6 lg:w-[50%] m-auto">
            We sent you a 6-digit code to example@gmail.com. Enter the code below to confirm your email address.
          </p>

          <div className="flex flex-col gap-4 m-auto">
            <div className="flex space-x-2">
              {formik.values.digits.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  name={`digit${index + 1}`}
                  maxLength="1"
                  required
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-12 h-14 border-2 border rounded-lg text-center focus:outline-none focus:border-green-500"
                />
              ))}
            </div>
            <p className="text-gray-500">
              Did not receive it?
              <button className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out">
                Resend
              </button>
            </p>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-16 m-auto py-1 lg:w-fit text-lg font-medium text-white rounded-lg bg-[#46C8BC] hover:bg-[#38AFA6] transition duration-300 ease-in-out"
            >
              Submit <GoTriangleRight />
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </form>

        <div className="relative flex justify-center items-center order-1 lg:order-2 w-full lg:w-[40%] mb-8 lg:mb-0">
          <img
            src={img}
            alt="Forgot Password"
            className="relative top-16 lg:top-0 w-[80%] md:w-[50%] lg:w-[90%]"
          />
        </div>
      </section>
    </>
  );
};

export default Verify;
