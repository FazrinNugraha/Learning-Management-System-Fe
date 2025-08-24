import { createBrowserRouter } from "react-router-dom";
import ManagerHomePage from "../pages/manager/home";
import SigninPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import SuccsesCheckoutPage from "../pages/SuccsesCheckout";
import LayoutDashboard from "../components/layout";
import ManageCoursePage from "../pages/manager/courses";


const router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerHomePage/>
  },
  {
     path: "/manager/sign-in",
     element: <SigninPage/>
  },
  {
    path: "/manager/sign-up",
    element:<SignUpPage/>
  },
  {
    path: "/succses-checkout",
    element: <SuccsesCheckoutPage/>
  },
  {
    path: "/manager",
    element: <LayoutDashboard/>,
    children: [
      {
        index:true,
        element:<ManagerHomePage/>
      },
      {
        path:'/manager/courses',
        element:<ManageCoursePage/>
      }
    ]
  }, 
])
export default router
