import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function StudentsItem({imageUrl,name,TotalCourse,id}) {
  return (
        <div class="card flex items-center gap-5">
                    <div class="relative flex shrink-0 w-20 h-20">
                        <div class="rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                            <img src={imageUrl} class="w-full h-full object-cover" alt="photo" />
                        </div>
                    </div>
                    <div class="w-full">
                        <h3 class="font-bold text-xl leading-[30px] line-clamp-1">{name}</h3>
                        <div class="flex items-center gap-5">
                            <div class="flex items-center gap-[6px] mt-[6px]">
                                <img src="/assets/images/icons/note-favorite-purple.svg" class="w-5 h-5" alt="icon" />
                                <p class="text-[#838C9D]">{TotalCourse} Course Joined</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end items-center gap-3">
                        <Link to={`/manager/students/edit/${id}`} class="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap">
                            Edit Profile
                        </Link>
                        <button type="button" class="w-fit rounded-full p-[14px_20px] bg-[#FF435A] font-semibold text-white text-nowrap">Delete</button>
                    </div>
                </div> 
  )
}

StudentsItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  TotalCourse: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
}
