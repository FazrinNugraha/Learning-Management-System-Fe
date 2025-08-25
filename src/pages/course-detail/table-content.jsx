import React from 'react'
import ContentItem from './content-item'

export default function TableContent() {
  return (
<>
            <section id="CourseList" className="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
                <div className="header flex items-center justify-between">
                    <h2 className="font-bold text-[22px] leading-[33px]">Course Content</h2>
                    <a href="add-course-content.html" className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap">
                        Add Content
                    </a>
                </div>
                <ContentItem
                id={1}
                index={1}
                type={"text"}
                title={"Install VsCode"}
                coursesId={2}
                />

                    <ContentItem
                id={2}
                index={2}
                type={"video"}
                title={"Tutorial React Pemula"}
                coursesId={3}
                />

                    <ContentItem
                id={3}
                index={3}
                type={"video"}
                title={"Cara install Sql Server"}
                coursesId={4}
                />

                    <ContentItem
                id={4}
                index={4}
                type={"text"}
                title={"Panduan Slicing Front End"}
                coursesId={5}
                />

                <div id="Pagination" className="flex items-center gap-3">
                    <button type="button" className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 bg-[#662FFF] text-white">
                        <span className="font-semibold text-sm leading-[21px]">1</span>
                    </button>
                    <button type="button" className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]">
                        <span className="font-semibold text-sm leading-[21px]">2</span>
                    </button>
                    <button type="button" className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]">
                        <span className="font-semibold text-sm leading-[21px]">3</span>
                    </button>
                    <button type="button" className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]">
                        <span className="font-semibold text-sm leading-[21px]">4</span>
                    </button>
                    <button type="button" className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]">
                        <span className="font-semibold text-sm leading-[21px]">5</span>
                    </button>
                </div>
            </section>
</>
  )
}
