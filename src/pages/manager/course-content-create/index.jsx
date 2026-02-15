import React, { useState } from 'react'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { mutateContentSchema } from '../../../utils/zodSchema'

export default function ManageContentCreatePage() {

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(mutateContentSchema)
  })

  const onSubmit = (values) => {
    console.log('submit content form:', values)
  }

  return (
    <>
      <div id="Breadcrumb" className="flex items-center gap-5 *:after:content-['/'] *:after:ml-5">
        <span className="last-of-type:after:content-[''] last-of-type:font-semibold">Manage Course</span>
        <span className="last-of-type:after:content-[''] last-of-type:font-semibold">Course</span>
        <span className="last-of-type:after:content-[''] last-of-type:font-semibold">Add Content</span>
      </div>

      <header className="flex items-center justify-between gap-[30px]">
        <div className="flex items-center gap-[30px]">
          <div className="flex shrink-0 w-[150px] h-[100px] rounded-[20px] overflow-hidden bg-[#D9D9D9]">
            <img
              src="/assets/images/thumbnails/th-1.png"
              className="w-full h-full object-cover"
              alt="thumbnail"
            />
          </div>
          <div>
            <h1 className="font-extrabold text-[28px] leading-[42px]">Add Content</h1>
            <p className="text-[#838C9D] mt-[1]">
              Give a best content for the course
            </p>
          </div>
        </div>
      </header>

      <form
        className="flex flex-col w-[930px] rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
        onSubmit={handleSubmit(onSubmit)}
      >

        {/* TITLE */}
        <div className="flex flex-col gap-[10px]">
          <label className="font-semibold">Content Title</label>

          <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5">

            <img
              src="/assets/images/icons/note-favorite-black.svg"
              className="w-6 h-6"
              alt="icon"
            />

            <input
              {...register('title')}
              type="text"
              className="appearance-none outline-none w-full py-3 font-semibold !bg-transparent"
              placeholder="Write better name for your course"
            />
          </div>
          <span className="error-message text-[#FF435A]">
            {errors?.title?.message}
          </span>
        </div>

        {/* TYPE */}
        <div className="flex flex-col gap-[10px]">
          <label className="font-semibold">Select Type</label>

          <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5">

            <img
              src="/assets/images/icons/crown-black.svg"
              className="w-6 h-6"
              alt="icon"
            />

            <select
              {...register('type')}
              className="appearance-none outline-none w-full py-3 px-2 -mx-2 font-semibold !bg-transparent"
            >
              <option value="">Select content type</option>
              <option value="video">Video</option>
              <option value="text">Text</option>
            </select>

            <img
              src="/assets/images/icons/arrow-down.svg"
              className="w-6 h-6"
              alt="icon"
            />
          </div>
          <span className="error-message text-[#FF435A]">
            {errors?.type?.message}
          </span>
        </div>

        {/* YOUTUBE */}
        <div className="flex flex-col gap-[10px]">
          <label className="font-semibold">Youtube Video ID</label>

          <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5">

            <img
              src="/assets/images/icons/bill-black.svg"
              className="w-6 h-6"
              alt="icon"
            />

            <input
              {...register('youtubeId')}
              type="text"
              className="appearance-none outline-none w-full py-3 font-semibold !bg-transparent"
              placeholder="Write tagline for better copy"
            />
          </div>
          <span className="error-message text-[#FF435A]">
            {errors?.youtubeId?.message}
          </span>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-[10px]">
          <label className="font-semibold">Content Text</label>

          <ReactQuill
            theme="snow"
            placeholder="Tulis konten materi di sini..."
            modules={{
              toolbar: [
                [{ 'header': [1, 2, 3, false] }],
                ['bold', 'italic'],
                ['link'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                ['clean']
              ]
            }}
            onChange={(value) => {
              setValue('text', value)
            }}
          />
          <span className="error-message text-[#FF435A]">
            {errors?.text?.message}
          </span>
        </div>

        {/* BUTTON */}
        <div className="flex items-center gap-[14px]">

          <button
            type="button"
            className="w-full rounded-full border p-[14px_20px] font-semibold"
          >
            Save as Draft
          </button>

          <button
            type="submit"
            className="w-full rounded-full p-[14px_20px] font-semibold text-white bg-[#662FFF]"
          >
            Add Content Now
          </button>

        </div>

      </form>
    </>
  )
}
