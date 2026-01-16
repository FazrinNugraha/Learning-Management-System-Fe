import React from 'react'

export default function Students() {
  return (
 <section id="LatestStudents" className="flex flex-col rounded-[30px] p-[20px] md:p-[30px] gap-[15px] md:gap-[30px] bg-[#F8FAFB]">
                    <h2 className="font-extrabold text-lg md:text-[22px] leading-[27px] md:leading-[33px]">Latest Students</h2>
                    <div className="card flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5">
                        <div className="flex shrink-0 w-full md:w-20 h-[150px] md:h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                            <img src="/assets/images/photos/photo-2.png" className="w-full h-full object-cover" alt="thumbnail"/>
                        </div>
                        <div className="w-full">
                            <h3 className="font-bold text-base md:text-xl leading-[24px] md:leading-[30px] line-clamp-1">Yulia Putri</h3>
                            <div className="flex items-center gap-[6px] mt-[6px]">
                                <img src="/assets/images/icons/crown-purple.svg" className="w-4 h-4 md:w-auto md:h-auto" alt="icon"/>
                                <p className="text-[#838C9D] text-sm md:text-base">183 Course Joined</p>
                            </div>
                        </div>
                    </div>
                    <div className="card flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5">
                        <div className="flex shrink-0 w-full md:w-20 h-[150px] md:h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                            <img src="/assets/images/photos/photo-3.png" className="w-full h-full object-cover" alt="thumbnail"/>
                        </div>
                        <div className="w-full">
                            <h3 className="font-bold text-base md:text-xl leading-[24px] md:leading-[30px] line-clamp-1">Angga Risky Setiawan</h3>
                            <div className="flex items-center gap-[6px] mt-[6px]">
                                <img src="/assets/images/icons/crown-purple.svg" className="w-4 h-4 md:w-auto md:h-auto" alt="icon"/>
                                <p className="text-[#838C9D] text-sm md:text-base">183 Course Joined</p>
                            </div>
                        </div>
                    </div>
                    <div className="card flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5">
                        <div className="flex shrink-0 w-full md:w-20 h-[150px] md:h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                            <img src="/assets/images/photos/photo-4.png" className="w-full h-full object-cover" alt="thumbnail"/>
                        </div>
                        <div className="w-full">
                            <h3 className="font-bold text-base md:text-xl leading-[24px] md:leading-[30px] line-clamp-1">Shayna Wo</h3>
                            <div className="flex items-center gap-[6px] mt-[6px]">
                                <img src="/assets/images/icons/crown-purple.svg" className="w-4 h-4 md:w-auto md:h-auto" alt="icon"/>
                                <p className="text-[#838C9D] text-sm md:text-base">183 Course Joined</p>
                            </div>
                        </div>
                    </div>
                    <div className="card flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5">
                        <div className="flex shrink-0 w-full md:w-20 h-[150px] md:h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                            <img src="/assets/images/photos/photo-5.png" className="w-full h-full object-cover" alt="thumbnail"/>
                        </div>
                        <div className="w-full">
                            <h3 className="font-bold text-base md:text-xl leading-[24px] md:leading-[30px] line-clamp-1">Imanual Kod</h3>
                            <div className="flex items-center gap-[6px] mt-[6px]">
                                <img src="/assets/images/icons/crown-purple.svg" className="w-4 h-4 md:w-auto md:h-auto" alt="icon"/>
                                <p className="text-[#838C9D] text-sm md:text-base">183 Course Joined</p>
                            </div>
                        </div>
                    </div>
                    <div className="card flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5">
                        <div className="flex shrink-0 w-full md:w-20 h-[150px] md:h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                            <img src="/assets/images/photos/photo-3.png" className="w-full h-full object-cover" alt="thumbnail"/>
                        </div>
                        <div className="w-full">
                            <h3 className="font-bold text-base md:text-xl leading-[24px] md:leading-[30px] line-clamp-1">Battita Gunber</h3>
                            <div className="flex items-center gap-[6px] mt-[6px]">
                                <img src="/assets/images/icons/crown-purple.svg" className="w-4 h-4 md:w-auto md:h-auto" alt="icon"/>
                                <p className="text-[#838C9D] text-sm md:text-base">183 Course Joined</p>
                            </div>
                        </div>
                    </div>
                </section>
  )
}
