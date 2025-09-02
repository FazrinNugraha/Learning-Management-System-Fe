import React from 'react'
import Sidebar from "./sidebar"
import Header from './header'
import Courses from '../pages/manager/home'
import Students from '../pages/manager/home'
import { Outlet, useMatch } from 'react-router-dom'

export default function LayoutDashboard({isAdmin = true}) {
   const isManagerPreviewPage = useMatch('/manager/courses/:id/preview')
   const isStudentPreviewPage = useMatch('/student/detail-courses/:id')

  return (
    <>
    {isManagerPreviewPage !== null  || isStudentPreviewPage !==null ? (
      <Outlet/>
    ): (
      <div className="flex min-h-screen">
        <Sidebar is isAdmin= {isAdmin}/>
        <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
            <Header/>
            <Outlet/>
        </main>
    </div>
  )}
    </>
  )  
}
