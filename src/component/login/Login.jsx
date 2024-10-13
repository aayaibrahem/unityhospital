import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import { AiOutlineWarning } from "react-icons/ai";
import Google from "./../../Unity Hospital/Login/Social/Group 46.png";
import Facebook from "./../../Unity Hospital/Login/Social/Group 45.png";
import Apple from "./../../Unity Hospital/Login/Social/Group 44.png";
import img from "./../../Unity Hospital/Login/cuate.png";
import { Helmet } from "react-helmet";
import { AppNavigationContext } from "../../context/GlobalContext";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Authenticate } from "../../context/AutheContext";

const Login = () => {
  const { setSidebarOpen } = useContext(AppNavigationContext);
  const { setToken, setUserName } = useContext(Authenticate);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setSidebarOpen(false);
  }, [setSidebarOpen]);

  const registerUser = async (values) => {
    setLoading(true);
    setErrorMessage(null);
    try {
      const res = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        values
      );
      setLoading(false);

      setUserName(res.data.user.name);
      setToken(res?.data.token);
      localStorage.setItem("token", res.data.token);
      navigate("/Find-a-doctor");
    } catch (error) {
      setLoading(false);
      setErrorMessage("Failed to login. Please check your credentials.");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: registerUser,
  });

  return (
    <>
      <Helmet>
        <title>Login - Unity Hospital</title>
      </Helmet>
      <section className="flex flex-col lg:flex-row items-center gap-24 justify-center w-[80%] m-auto pt-10 my-16 ">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center gap-6 w-full lg:w-2/5 2xl:w-1/2 text-center"
          aria-label="Login Form"
        >
          <h1 className="text-5xl font-bold text-[#46C8BC]">Login</h1>
          <p className="text-gray-600 font-semibold text-sm mb-2">
            Top-quality care for our community
          </p>

          {errorMessage && (
            <div className="text-red-600 text-sm flex items-center gap-1 mt-1">
              <AiOutlineWarning /> {errorMessage}
            </div>
          )}

          <div className="w-full">
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email"
              aria-label="Email"
              className={`bg-gray-50 border ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              } text-gray-900 text-base rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3`}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-600 text-sm flex items-center gap-1 mt-1">
                <AiOutlineWarning /> {formik.errors.email}
              </div>
            )}
          </div>

          <div className="w-full">
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Password"
              aria-label="Password"
              className={`bg-gray-50 border ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              } text-gray-900 text-base rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-3`}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-600 text-sm flex items-center gap-1 mt-1">
                <AiOutlineWarning /> {formik.errors.password}
              </div>
            )}
          </div>

          <Link
            to="/Forgot-pass"
            className="text-start self-start text-blue-500 text-sm"
          >
            Forgot Password?
          </Link>

          <button
            type="submit"
            className="flex items-center justify-center p-1.5 w-full text-2xl font-medium text-white rounded-lg bg-[#46C8BC] hover:bg-[#4F8E89] focus:ring-2 focus:ring-teal-500 focus:outline-none"
            disabled={formik.isSubmitting || loading || !formik.isValid}
          >
            {loading ? "Logging in..." : "Login"}
            {!loading && <GoTriangleRight />}
          </button>

          <div className="flex items-center my-1 w-full">
            <div className="flex-grow border-t border-gray-900"></div>
            <p className="text-gray-500 font-bold mx-1">OR</p>
            <div className="flex-grow border-t border-gray-900"></div>
          </div>

          <div className="flex justify-between gap-5 w-[70%]">
            <img
              src={Google}
              alt="Google login"
              className="w-12 cursor-pointer hover:scale-105 transition-transform"
            />
            <img
              src={Facebook}
              alt="Facebook login"
              className="w-12 cursor-pointer hover:scale-105 transition-transform"
            />
            <img
              src={Apple}
              alt="Apple login"
              className="w-12 cursor-pointer hover:scale-105 transition-transform"
            />
          </div>

          <p className="text-gray-400">
            Don’t own an account?
            <Link
              to="/Sign-up"
              className="text-sm text-blue-700 hover:text-blue-700 cursor-pointer"
            >
              Signup
            </Link>
          </p>
          <Link
            to="/Home"
            className="text-sm text-blue-700 hover:text-blue-700 cursor-pointer m-auto text-center"
          >
            Skip For later
          </Link>
        </form>

        <div className="hidden lg:flex justify-center items-center lg:w-3/5 2xl:w-1/2">
          <img src={img} alt="Illustration" className="w-full h-auto" />
        </div>
      </section>
    </>
  );
};

export default Login;
