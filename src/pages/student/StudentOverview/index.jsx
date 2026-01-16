import React from 'react'
import CardCourse from './CardCourse'

export default function StudentPage() {
  return (  
         <section id="LatestCourse" className="flex flex-col rounded-[30px] p-[20px] md:p-[30px] gap-[15px] md:gap-[30px] bg-[#F8FAFB]">
                <h2 className="font-extrabold text-lg md:text-[22px] leading-[27px] md:leading-[33px]">Latest Courses</h2>
                <CardCourse
                imageUrl={"/assets/images/thumbnails/th-1.png"}
                title={"Mastering React"}
                id={1}
                category={"Data Sceince"}
                />

                <CardCourse
                imageUrl={"/assets/images/thumbnails/th-2.png"}
                title={"Mastering React"}
                id={1}
                category={"Data Sceince"}
                />

                <CardCourse
                imageUrl={"/assets/images/thumbnails/th-3.png"}
                title={"Mastering React"}
                id={1}
                category={"Data Sceince"}
                />

                <CardCourse
                imageUrl={"/assets/images/thumbnails/th-2.png"}
                title={"Mastering React"}
                id={1}
                category={"Data Sceince"}
                />

                <CardCourse
                imageUrl={"/assets/images/thumbnails/th-1.png"}
                title={"Mastering React"}
                id={1}
                category={"Data Sceince"}
                />
                </section>
  )
}

