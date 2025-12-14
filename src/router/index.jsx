import { createBrowserRouter, redirect } from "react-router-dom";
import ManagerHomePage from "../pages/manager/home";
import SigninPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import LayoutDashboard from "../components/layout";
import ManageCoursePage from "../pages/manager/courses";
import ManageCreateCoursePage from "../pages/manager/create-course";
import ManageCourseDetailPage from "../pages/manager/course-detail";
import ManageContentCreatePage from "../pages/manager/course-content-create";
import ManageCoursePreviewPage from "../pages/manager/course-preview";
import ManageStudentsPage from "../pages/manager/students";
import StudentPage from "../pages/student/StudentOverview";
import SuccessCheckoutPage from "../pages/SuccessCheckout";
import { ROLE_MANAGER } from "../utils/const";
import secureLocalStorage from "react-secure-storage";
import{ getCourses } from "../services/getCourses";



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
    path: "/success-checkout",
    element: <SuccessCheckoutPage/>
  },
  {
    path: "/manager",
    id: ROLE_MANAGER,
    loader: async () => {
      const session = secureLocalStorage.getItem('STORAGE_KEY')

      console.log("session router:", session);

      if (!session || session.role !== 'manager') {
        throw redirect('/manager/sign-in')
      }

      return session
    },
    element: <LayoutDashboard/>,
    children: [
      {
        index:true,
        element:<ManagerHomePage/>
      },
      {
        path:'/manager/courses',
        loader: async () => {
          const data = await getCourses

          console.log("courses data loader:", data);
          return data
        },
        element:<ManageCoursePage/>
      },
      {
        path:'/manager/courses/create',
        element:<ManageCreateCoursePage/>
      },
      {
        path:'/manager/courses/:id',
        element:<ManageCourseDetailPage/>
      },
      {
        path:'/manager/courses/:id/create',
        element:<ManageContentCreatePage/>
      },
      {
        path:'/manager/courses/:id/preview',
        element:<ManageCoursePreviewPage/>
      },
      {
        path:'/manager/students',
        element:<ManageStudentsPage/>
      }
    ]
  },
  {
    path:"/student",
    element: <LayoutDashboard isAdmin = {false}/>,
    children : [
      {
        index: true,
        element: <StudentPage/>
      },
      {
        path:'/student/detail-courses/:id',
        element: <ManageCoursePreviewPage/>
      }
    ]
  }
])
export default router
