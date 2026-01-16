import { Link } from 'react-router-dom'
import React from 'react'
import StudentsItem from './student-item'

export default function ManageStudentsPage() {
  return (
    <>
          <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-[15px] md:gap-[30px]">
                <div>
                    <h1 className="font-extrabold text-xl md:text-[28px] leading-[32px] md:leading-[42px]">Manage Students</h1>
                    <p className="text-[#838C9D] mt-1 text-sm md:text-base">Keep your employee or student happy</p>
                </div>
                <div className="flex flex-wrap items-center gap-2 md:gap-3 w-full md:w-auto">
                    <Link to="#" className="flex-1 md:flex-none rounded-full border border-[#060A23] p-[12px_16px] md:p-[14px_20px] font-semibold text-sm md:text-base text-center md:text-nowrap">
                        Import File
                    </Link>
                    <Link to="#" className="flex-1 md:flex-none rounded-full p-[12px_16px] md:p-[14px_20px] font-semibold text-sm md:text-base text-[#FFFFFF] bg-[#662FFF] text-center md:text-nowrap">
                        Add Student
                    </Link>
                </div>
            </header>
            <section id="CourseList" className="flex flex-col w-full rounded-[30px] p-[20px] md:p-[30px] gap-[15px] md:gap-[30px] bg-[#F8FAFB]">
              
               <StudentsItem
               imageUrl={"/assets/images/photos/photo-3.png"}
               name={"Angga Setiawan"}
               TotalCourse={100}
               id={1}
               />

                  <StudentsItem
               imageUrl={"/assets/images/photos/photo-4.png"}
               name={"Yuliana"}
               TotalCourse={90}
               id={2}
               />

                  <StudentsItem
               imageUrl={"/assets/images/photos/photo-5.png"}
               name={"Bagus Baik"}
               TotalCourse={80}
               id={3}
               />
                {/* <div id="Pagination" class="flex items-center gap-3">
                    <button type="button" class="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 bg-[#662FFF] text-white">
                        <span class="font-semibold text-sm leading-[21px]">1</span>
                    </button>
                    <button type="button" class="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]">
                        <span class="font-semibold text-sm leading-[21px]">2</span>
                    </button>
                    <button type="button" class="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]">
                        <span class="font-semibold text-sm leading-[21px]">3</span>
                    </button>
                    <button type="button" class="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]">
                        <span class="font-semibold text-sm leading-[21px]">4</span>
                    </button>
                    <button type="button" class="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]">
                        <span class="font-semibold text-sm leading-[21px]">5</span>
                    </button>
                </div> */}
            </section>
    </>
  )
}
