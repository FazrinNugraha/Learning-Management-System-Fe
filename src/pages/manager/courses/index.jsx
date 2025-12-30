import CardCourses from './card'
import { Link, useLoaderData } from 'react-router-dom'

export default function ManageCoursePage() {
  const { data: courses = [] } = useLoaderData()

  console.log('courses data in component:', courses)

  return (
    <>
      <header className="flex items-center justify-between gap-[30px]">
        <div>
          <h1 className="font-extrabold text-[28px] leading-[42px]">
            Manage Courses
          </h1>
          <p className="text-[#838C9D] mt-[1]">
            Give the best future for your great employees
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="#"
            className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
          >
            Import File
          </Link>

          <Link
            to="/manager/courses/create"
            className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
          >
            New Course
          </Link>
        </div>
      </header>

      <section
        id="CourseList"
        className="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
      >
        {courses.length === 0 ? (
          <p className="text-center text-gray-500">
            No courses available
          </p>
        ) : (
          courses.map((item) => (
            <CardCourses
              key={item._id}
              id={item._id}
              name={item.name}
              category={item.category?.name}
              imageUrl={item.thumbnailUrl}
              totalStudents={item.totalStudents}
            />

          ))
        )}
      </section>
    </>
  )
}
