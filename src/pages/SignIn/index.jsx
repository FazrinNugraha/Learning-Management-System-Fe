import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { signInSchema } from '../../utils/zodSchema'
import { useMutation } from '@tanstack/react-query'
import { postSignIn } from '../../services/authService'
import secureLocalStorage from 'react-secure-storage'
import { STORAGE_KEY } from '../../utils/const'

export default function SigninPage() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signInSchema),
    mode: "onChange"
  })

  const {isLoading, mutateAsync} = useMutation({
    mutationFn: (data) => postSignIn(data)
  })

  const navigate = useNavigate()
  
  const onSubmit = async (data) => {

    try {
      const response = await mutateAsync(data)
      secureLocalStorage.setItem(STORAGE_KEY, response.data)

      if (response.data.role === "manager") {
        navigate('/manager')        
      } else {
        navigate("/student")
      }

    } catch (error) {

      console.log(error);
      
    }
    console.log(data);
  }

  return (
    <div className="relative flex flex-col flex-1 p-[10px]">
      <div className="absolute w-[calc(100%-20px)] min-h-[calc(100vh-20px)] h-[calc(100%-20px)] bg-[#060A23] -z-10 rounded-[20px]">
        <img src="/assets/images/backgrounds/background-glow.png" className="absolute bottom-0 transform -translate-x-1/2 left-1/2" alt="background" />
      </div>

      <nav className="flex flex-col md:flex-row items-start md:items-center justify-between p-[20px] md:p-[30px] gap-[20px] md:gap-0">
        <div className="flex flex-col md:flex-row items-start md:items-center md:gap-[60px] gap-[20px] w-full md:w-auto">
          <img src="/assets/images/logos/logo.svg" className="flex shrink-0 w-[140px] md:w-auto" alt="logo" />
          <ul className="flex flex-wrap items-center gap-4 md:gap-10 text-sm md:text-base">
            <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
              <Link to="#">Home</Link>
            </li>
            <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
              <Link to="pricing.html">Pricing</Link>
            </li>
            <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
              <Link to="#">Features</Link>
            </li>
            <li className="font-semibold transition-all duration-300 hover:text-[#662FFF] text-white">
              <Link to="#">Testimonials</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-2 md:gap-3 w-full md:w-auto">
          <Link to="#">
            <div className="flex-1 md:flex-none flex items-center justify-center gap-3 w-full md:w-fit rounded-full border p-[12px_16px] md:p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
              <span className="font-semibold text-white text-sm md:text-base">My Dashboard</span>
            </div>
          </Link>
          <Link to="/manager/sign-up">
            <div className="flex-1 md:flex-none flex items-center justify-center gap-3 w-full md:w-fit rounded-full border p-[12px_16px] md:p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]">
              <span className="font-semibold text-white text-sm md:text-base">Sign Up</span>
            </div>
          </Link>
        </div>
      </nav>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full md:w-[400px] h-fit rounded-[20px] border border-[#262A56] p-[20px] md:p-[30px] gap-[20px] md:gap-[30px] bg-[#080A2A] m-auto"
      >
        <div>
          <h1 className="font-bold text-xl md:text-[26px] leading-[32px] md:leading-[39px] text-white">Welcome Back!</h1>
          <p className="text-[#6B6C7F] text-sm md:text-base">Manage your employees easily</p>
        </div>

        <hr className="border-[#262A56]" />

        <div className="flex items-center gap-3 w-full rounded-full border p-[12px_16px] md:p-[14px_20px] transition-all duration-300 focus-within:border-[#8661EE] focus-within:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
          <img src="/assets/images/icons/sms-white.svg" className="w-5 h-5 md:w-6 md:h-6 flex shrink-0" alt="icon" />
          <input
            type="email"
            id="email"
            className="appearance-none outline-none !bg-transparent w-full font-semibold text-white text-sm md:text-base placeholder:font-normal placeholder:text-[#6B6C7F]"
            placeholder="Write your email address"
            {...register('email')}
          />
        </div>
          {errors.email?.message && ( <p className='text-red-500 text-xs px-4 md:px-5'> {errors.email?.message} </p> )}

        <div>
          <div className="flex items-center gap-3 w-full rounded-full border p-[12px_16px] md:p-[14px_20px] transition-all duration-300 focus-within:border-[#8661EE] focus-within:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
            <img src="/assets/images/icons/key-white.svg" className="w-5 h-5 md:w-6 md:h-6 flex shrink-0" alt="icon" />
            <input
              type="password"
              id="password"
              className="appearance-none outline-none !bg-transparent w-full font-semibold text-white text-sm md:text-base placeholder:font-normal placeholder:text-[#6B6C7F]"
              placeholder="Type your secure password"
              {...register('password')}
            />
          </div>
           {errors.password?.message && ( <p className='text-red-500 text-xs px-4 md:px-5'> {errors.password?.message} </p> )}

          <div className="flex justify-end mt-[10px]">
            <Link to="#" className="text-xs md:text-sm leading-[18px] md:leading-[21px] text-[#662FFF] hover:underline">
              Forgot Password
            </Link>
          </div>
        </div>

        <hr className="border-[#262A56]" />

        <button
          type="submit"
          className="w-full rounded-full border p-[12px_16px] md:p-[14px_20px] text-center font-semibold text-white text-sm md:text-base bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]"
        >
          Sign In to Manage
        </button>
      </form>
    </div>
  )
}
