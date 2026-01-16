import React from 'react'
import { Link } from 'react-router-dom'

export default function Courses() {
  return (
         <section id="LatestCourse" className="flex flex-col rounded-[30px] p-[20px] md:p-[30px] gap-[15px] md:gap-[30px] bg-[#F8FAFB]">
                    <h2 className="font-extrabold text-lg md:text-[22px] leading-[27px] md:leading-[33px]">Latest Courses</h2>
                    <div className="card flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5">
                        <div className="flex shrink-0 w-full md:w-[100px] h-[150px] md:h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                            <img src="/assets/images/thumbnails/th-1.png" className="w-full h-full object-cover" alt="thumbnail"/>
                        </div>
                        <div className="w-full">
                            <Link to="#" className="font-bold text-base md:text-xl leading-[24px] md:leading-[30px] line-clamp-1">Responsive Design Triclorem Lorem, ipsum dolor.</Link>
                            <div className="flex items-center gap-[6px] mt-[6px]">
                                <img src="/assets/images/icons/crown-purple.svg" className="w-4 h-4 md:w-auto md:h-auto" alt="icon"/>
                                <p className="text-[#838C9D] text-sm md:text-base">Programming</p>
                            </div>
                        </div>
                    </div>
                    <div className="card flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5">
                        <div className="flex shrink-0 w-full md:w-[100px] h-[150px] md:h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                            <img src="/assets/images/thumbnails/th-2.png" className="w-full h-full object-cover" alt="thumbnail"/>
                        </div>
                        <div className="w-full">
                            <Link to="#" className="font-bold text-base md:text-xl leading-[24px] md:leading-[30px] line-clamp-1">HTMX JavaScript 2020</Link>
                            <div className="flex items-center gap-[6px] mt-[6px]">
                                <img src="/assets/images/icons/crown-purple.svg" className="w-4 h-4 md:w-auto md:h-auto" alt="icon"/>
                                <p className="text-[#838C9D] text-sm md:text-base">Marketing</p>
                            </div>
                        </div>
                    </div>
                    <div className="card flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5">
                        <div className="flex shrink-0 w-full md:w-[100px] h-[150px] md:h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                            <img src="/assets/images/thumbnails/th-3.png" className="w-full h-full object-cover" alt="thumbnail"/>
                        </div>
                        <div className="w-full">
                            <Link to="#" className="font-bold text-base md:text-xl leading-[24px] md:leading-[30px] line-clamp-1">Mastering React</Link>
                            <div className="flex items-center gap-[6px] mt-[6px]">
                                <img src="/assets/images/icons/crown-purple.svg" className="w-4 h-4 md:w-auto md:h-auto" alt="icon"/>
                                <p className="text-[#838C9D] text-sm md:text-base">Data Science</p>
                            </div>
                        </div>
                    </div>
                    <div className="card flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5">
                        <div className="flex shrink-0 w-full md:w-[100px] h-[150px] md:h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                            <img src="/assets/images/thumbnails/th-2.png" className="w-full h-full object-cover" alt="thumbnail"/>
                        </div>
                        <div className="w-full">
                            <Link to="#" className="font-bold text-base md:text-xl leading-[24px] md:leading-[30px] line-clamp-1">Responsive Design Triclorem Lorem, ipsum dolor.</Link>
                            <div className="flex items-center gap-[6px] mt-[6px]">
                                <img src="/assets/images/icons/crown-purple.svg" className="w-4 h-4 md:w-auto md:h-auto" alt="icon"/>
                                <p className="text-[#838C9D] text-sm md:text-base">Marketing</p>
                            </div>
                        </div>
                    </div>
                    <div className="card flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5">
                        <div className="flex shrink-0 w-full md:w-[100px] h-[150px] md:h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                            <img src="/assets/images/thumbnails/th-3.png" className="w-full h-full object-cover" alt="thumbnail"/>
                        </div>
                        <div className="w-full">
                            <Link to="#" className="font-bold text-base md:text-xl leading-[24px] md:leading-[30px] line-clamp-1">Company Profile Multilorem Lorem, ipsum dolor.</Link>
                            <div className="flex items-center gap-[6px] mt-[6px]">
                                <img src="/assets/images/icons/crown-purple.svg" className="w-4 h-4 md:w-auto md:h-auto" alt="icon"/>
                                <p className="text-[#838C9D] text-sm md:text-base">Data Science</p>
                            </div>
                        </div>
                    </div>
                </section>
  )
}
