import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
            <div className="flex flex-col md:flex-row items-center md:gap-[60px] gap-[20px] px-[20px] md:px-0">
                <img src="/assets/images/logos/logo.svg" className="flex shrink-0 w-[140px] md:w-auto" alt="logo"/>
                <ul className="flex flex-wrap items-center justify-center md:justify-start gap-5 md:gap-10">
                    <li className="font-semibold text-sm md:text-base transition-all duration-300 hover:text-[#662FFF] text-white">
                        <Link to ="#">Home</Link>
                    </li>
                    <li className="font-semibold text-sm md:text-base transition-all duration-300 hover:text-[#662FFF] text-white">
                        <Link to ="pricing.hLinkml">Pricing</Link>
                    </li>
                    <li className="font-semibold text-sm md:text-base transition-all duration-300 hover:text-[#662FFF] text-white">
                        <Link to ="#">FeaturLinks</Link>
                    </li>
                    <li className="font-semibold text-sm md:text-base transition-all duration-300 hover:text-[#662FFF] text-white">
                        <Link to ="#">TestimLinknials</Link>
                    </li>
                </ul>
            </div>
  )
}
