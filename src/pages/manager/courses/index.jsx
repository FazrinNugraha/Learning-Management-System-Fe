import React from 'react'
import CardCourses from './card'

export default function ManageCoursePage() {
  return (
    <>
      <header className="flex items-center justify-between gap-[30px]">
        <div>
          <h1 className="font-extrabold text-[28px] leading-[42px]">Manage Courses</h1>
          <p className="text-[#838C9D] mt-[1]">
            Give the best future for your great employees
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
          >
            Import File
          </a>
          <a
            href="create-new-course.html"
            className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
          >
            New Course
          </a>
        </div>
      </header>

      <section
        id="CourseList"
        className="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
      >
        <CardCourses 
          id={1}
          imageUrl="/assets/images/thumbnails/th-1.png"
          totalStudents={554}
          category="Programming"
          name="Responsive Web Design"
        />
        <CardCourses 
          id={2}
          imageUrl="/assets/images/thumbnails/th-2.png"
          totalStudents={320}
          category="UI/UX"
          name="Intro to User Experience"
        />
        <CardCourses 
          id={3}
          imageUrl="/assets/images/thumbnails/th-3.png"
          totalStudents={180}
          category="Data Science"
          name="Machine Learning Basics"
        />
        <CardCourses 
          id={4}
          imageUrl="/assets/images/thumbnails/th-4.png"
          totalStudents={750}
          category="Mobile Development"
          name="Flutter for Beginners"
        />
      </section>
    </>
  )
}
