import { createBrowserRouter } from "react-router-dom";
import ManagerHome from "../pages/ManagerHome";
import SigninPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import SuccsesCheckoutPage from "../pages/SuccsesCheckout";
import LayoutDashboard from "../components/layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerHome/>
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
        element:<ManagerHome/>
      }
    ]
  }, 
])
export default router
