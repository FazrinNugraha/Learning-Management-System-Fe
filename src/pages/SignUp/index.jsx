import React, { useState } from "react";
import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signUpSchema } from "../../utils/zodSchema.js";
import { zodResolver } from "@hookform/resolvers/zod";
import Pricing from "./pricing.jsx";

export default function SignUpPage() {

  const [dataSignUp, setDataSignUp] = useState(null)
  const [mode, setMode] =useState("AUTH")


  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(signUpSchema),
    mode: "onChange"
  })
  const onSubmit = (data) => {
    console.log(data);
    setDataSignUp(data)
    setMode("PRICING")
  };

  return (
    <>
    {mode === "AUTH" ? (
          <div className="relative flex flex-col flex-1 p-[10px]">
      <div className="absolute w-[calc(100%-20px)] min-h-[calc(100vh-20px)] h-[calc(100%-20px)] bg-[#060A23] -z-10 rounded-[20px]">
        <img
          src="/assets/images/backgrounds/background-glow.png"
          className="absolute bottom-0 transform -translate-x-1/2 left-1/2"
          alt=""
        />
      </div>

      {/* NAVBAR */}
      <nav className="flex flex-col md:flex-row items-start md:items-center justify-between p-[20px] md:p-[30px] gap-[20px] md:gap-0">
        <Navbar />
        <div className="flex flex-wrap items-center gap-2 md:gap-3 w-full md:w-auto">
          <Link to="/manager/sign-in">
            <div className="flex-1 md:flex-none flex items-center justify-center gap-3 w-full md:w-fit rounded-full border p-[12px_16px] md:p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
              <span className="font-semibold text-white text-sm md:text-base">My Dashboard</span>
            </div>
          </Link>
          <Link to="#">
            <div className="flex-1 md:flex-none flex items-center justify-center gap-3 w-full md:w-fit rounded-full border p-[12px_16px] md:p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]">
              <span className="font-semibold text-white text-sm md:text-base">Sign Up</span>
            </div>
          </Link>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-[109px] my-auto px-[20px]">
        {/* FORM FIXED */}
        <form onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full md:w-[400px] h-fit rounded-[20px] border border-[#262A56] p-[20px] md:p-[30px] gap-[20px] md:gap-[30px] bg-[#080A2A]"
        >
          <div>
            <h2 className="font-bold text-xl md:text-[26px] leading-[32px] md:leading-[39px] text-white">
              Sign Up
            </h2>
            <p className="text-[#6B6C7F] text-sm md:text-base">Manage your employees easily</p>
          </div>

          <hr className="border-[#262A56]" />

          {/* Name */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 w-full rounded-full border p-[12px_16px] md:p-[14px_20px] transition-all duration-300 focus-within:border-[#8661EE] focus-within:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
              <img
                src="/assets/images/icons/user-octagon-white.svg"
                className="w-5 h-5 md:w-6 md:h-6 flex shrink-0"
                alt="icon"
              />
              <input
                type="text"
                name="name"
                id="name"
                className="appearance-none outline-none !bg-transparent w-full font-semibold text-white text-sm md:text-base placeholder:font-normal placeholder:text-[#6B6C7F]"
                placeholder="Write your complete name"
                {...register('name')}
              />
            </div>
            {errors.name?.message && ( <p className='text-red-500 text-xs px-4 md:px-5'> {errors.name?.message} </p> )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 w-full rounded-full border p-[12px_16px] md:p-[14px_20px] transition-all duration-300 focus-within:border-[#8661EE] focus-within:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
              <img
                src="/assets/images/icons/sms-white.svg"
                className="w-5 h-5 md:w-6 md:h-6 flex shrink-0"
                alt="icon"
              />
              <input
                type="email"
                name="email"
                id="email"
                className="appearance-none outline-none !bg-transparent w-full font-semibold text-white text-sm md:text-base placeholder:font-normal placeholder:text-[#6B6C7F]"
                placeholder="Write your email address"
                {...register('email')}
              />
            </div>
            {errors.email?.message && ( <p className='text-red-500 text-xs px-4 md:px-5'> {errors.email?.message} </p> )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 w-full rounded-full border p-[12px_16px] md:p-[14px_20px] transition-all duration-300 focus-within:border-[#8661EE] focus-within:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
              <img
                src="/assets/images/icons/key-white.svg"
                className="w-5 h-5 md:w-6 md:h-6 flex shrink-0"
                alt="icon"
              />
              <input
                type="password"
                name="password"
                id="password"
                className="appearance-none outline-none !bg-transparent w-full font-semibold text-white text-sm md:text-base placeholder:font-normal placeholder:text-[#6B6C7F]"
                placeholder="Type your secure password"
                {...register('password')}
              />
            </div>
            {errors.password?.message && ( <p className='text-red-500 text-xs px-4 md:px-5'> {errors.password?.message}</p> )}
          </div>

          <hr className="border-[#262A56]" />

          <button
            type="submit"
            className="w-full rounded-full border p-[12px_16px] md:p-[14px_20px] text-center font-semibold text-sm md:text-base text-white bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]"
          >
            Sign Up Now
          </button>
        </form>

        {/* TEXT SECTION */}
        <div className="flex flex-col gap-[20px] md:gap-[30px] mt-[30px] lg:mt-0">
          <h1 className="font-extrabold text-2xl md:text-[46px] leading-[36px] md:leading-[69px] text-white text-center lg:text-left">
            Sign Up & Enhance <br /> Employees Skills
          </h1>
          <p className="text-base md:text-lg leading-[24px] md:leading-[32px] text-white text-center lg:text-left">
            We deliver robust features to anyone <br /> unconditionally so they
            can grow bigger.
          </p>
        </div>
      </div>
    </div>
    ): (
      <Pricing data={dataSignUp}/>
    )}
    </>
  )
}


