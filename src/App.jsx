import { createHashRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./component/Layout/Layout";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import Forgotten from "./component/Forgotten/Forgotten";
import Verify from "./component/Verify/Verify";
import About from "./component/About/About";
import Change from "./component/Change password/changePassword";
import Doctor from "./component/Doctor/Doctor";
import AppGlobalProvider from "./context/GlobalContext";
import AuthenticateProvider from "./context/AutheContext";
import HomePage from "./component/HomePage/HomePage";
import Contact from "./component/Contact/Contact";
import Doctorinfo from "./component/Doctorinfo/Doctorinfo";
import ScrollToTop from "./context/ScrollToTop/ScrollToTop";
import Field from "./component/Field/Field";

export default function App() {
  const queryClient = new QueryClient();

  const myRouter = createHashRouter([
    {
      path: "/",
      element: (
        <>
          <ScrollToTop />
          <Layout />
        </>
      ),
      children: [
        { path: "/", element: <Login /> },
        { path: "/Login", element: <Login /> },
        { path: "/Sign-up", element: <Signup /> },
        { path: "/Forgot-pass", element: <Forgotten /> },
        { path: "/Verify", element: <Verify /> },
        { path: "/Change-pass", element: <Change /> },
        { path: "/About-us", element: <About /> },
        { path: "/Find-a-doctor", element: <Doctor /> },
        { path: "/Home", element: <HomePage /> },
        { path: "/Contact-us", element: <Contact /> },
        { path: "/Doctor-Info", element: <Doctorinfo /> },
        { path: "/Field", element: <Field /> },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthenticateProvider>
        <AppGlobalProvider>
          <RouterProvider router={myRouter}></RouterProvider>
        </AppGlobalProvider>
      </AuthenticateProvider>
    </QueryClientProvider>
  );
}
