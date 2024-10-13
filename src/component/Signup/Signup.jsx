import { Link, useNavigate } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import { Helmet } from "react-helmet";
import axios from "axios"; 
import Google from "./../../Unity Hospital/Signup/Social/Group 46.png";
import Facebook from "./../../Unity Hospital/Signup/Social/Group 45.png";
import Apple from "./../../Unity Hospital/Signup/Social/Group 44.png";
import img from "./../../Unity Hospital/Signup/cuate.png";
import { AppNavigationContext } from "../../context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signup = () => {
  const { setSidebarOpen } = useContext(AppNavigationContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setSidebarOpen(false);
  }, [setSidebarOpen]);

  async function registerUser(values) {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values
      );
      setLoading(false);
      navigate("/Login");
    } catch (error) {
      setLoading(false);
    }
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    rePassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "01028939240",
    },
    validationSchema,
    onSubmit: registerUser,
  });

  return (
    <>
      <Helmet>
        <title>Signup - Unity Hospital</title>
      </Helmet>

      <section className="flex flex-col lg:flex-row items-center gap-24 justify-center w-[80%] m-auto pt-10 my-16">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center gap-4 w-full lg:w-2/5 2xl:w-1/2 text-center"
        >
          <h1 className="text-5xl font-bold text-[#46C8BC]">Signup</h1>
          <p className="text-gray-600 font-semibold text-sm mb-2">
            Welcome to Unity Hospital, where we provide top-quality care
          </p>

          <div className="flex justify-between w-full gap-6">
            <div className="w-full">
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2"
                placeholder="First name"
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="text-red-500 text-sm text-start mt-1">
                  {formik.errors.name}
                </p>
              ) : null}
            </div>

            <div className="w-full">
              <input
                type="text"
                name="lastName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2"
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="w-full">
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2"
              placeholder="Email"
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-sm text-start mt-1">
                {formik.errors.email}
              </p>
            ) : null}
          </div>

          <div className="w-full">
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2"
              placeholder="Password"
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 text-sm text-start mt-1">
                {formik.errors.password}
              </p>
            ) : null}
          </div>

          <div className="w-full">
            <input
              type="password"
              name="rePassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rePassword}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2"
              placeholder="Confirm Password"
            />
            {formik.touched.rePassword && formik.errors.rePassword ? (
              <p className="text-red-500 text-sm text-start mt-1">
                {formik.errors.rePassword}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            className="flex items-center justify-center p-1.5 w-full text-2xl font-medium text-white rounded-lg bg-[#46C8BC] hover:bg-[#4F8E89] focus:ring-2 focus:ring-teal-500 focus:outline-none"
            disabled={formik.isSubmitting || loading}
          >
            {loading ? "Signing up..." : "Sign up"}
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
            Already have an account?
            <Link
              to="/Login"
              className="text-sm text-blue-700 hover:text-blue-700 cursor-pointer"
            >
              Login
            </Link>
          </p>
          <Link
            to="/Home"
            className="text-sm text-blue-700 hover:text-blue-700 cursor-pointer m-auto text-center"
          >
            Skip for later
          </Link>
        </form>

        <div className="hidden lg:flex justify-center items-center lg:w-3/5 2xl:w-1/2">
          <img src={img} alt="Illustration" className="w-full h-auto" />
        </div>
      </section>
    </>
  );
};

export default Signup;
