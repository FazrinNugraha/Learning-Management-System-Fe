import React from "react";
import CardCourse from "./CardCourse";
import { useLoaderData } from "react-router-dom";

export default function StudentPage() {
  const data = useLoaderData();
  console.log(data);
  return (
    <section
      id="LatestCourse"
      className="flex flex-col rounded-[30px] p-[20px] md:p-[30px] gap-[15px] md:gap-[30px] bg-[#F8FAFB]"
    >
      <h2 className="font-extrabold text-lg md:text-[22px] leading-[27px] md:leading-[33px]">
        Latest Courses
      </h2>
      {data?.map((item) => (
        <CardCourse
          key={item._id}
          imageUrl={item.thumbnail_url}
          title={item.name}
          id={item._id}
          category={item.category?.name}
        />
      ))}
    </section>
  );
}
