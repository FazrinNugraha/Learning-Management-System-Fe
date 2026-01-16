import React from 'react'
import secureLocalStorage from 'react-secure-storage'

export default function Header() {

    const handleLogout = () => {
        secureLocalStorage.removeItem('STORAGE_KEY')
        window.location.replace('/manager/sign-in')   
    }
  return (
          <div id="TopBar" className="flex flex-col md:flex-row items-center justify-between gap-[15px] md:gap-[30px]">
                <form action="" className="flex items-center w-full md:max-w-[450px] rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                    <input type="text" name="search" id="search" className="appearance-none outline-none w-full py-2 md:py-3 font-semibold text-sm md:text-base placeholder:font-normal placeholder:text-[#838C9D]" placeholder="Search course, student..."/>
                    <img src="/assets/images/icons/search-normal.svg" className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" alt="icon"/>
                </form>
                <div className="relative flex items-center justify-end gap-[14px] group flex-shrink-0">
                    <div className="text-right hidden sm:block">
                        <p className="font-semibold text-sm md:text-base">Shayna Angga</p>
                        <p className="text-xs md:text-sm leading-[21px] text-[#838C9D]">Manager</p>
                    </div>
                    <button type="button" id="profileButton" className="flex shrink-0 w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full overflow-hidden">
                        <img src="/assets/images/photos/photo-1.png" className="w-full h-full object-cover" alt="profile photos"/>
                    </button>
                    <div id="ProfileDropdown" className="absolute top-full hidden group-hover:block z-50">
                        <ul className="flex flex-col w-[180px] md:w-[200px] rounded-[20px] border border-[#CFDBEF] p-4 md:p-5 gap-4 bg-white mt-4">
                            <li className="font-semibold text-sm md:text-base">
                                <a href="#">My Account</a>
                            </li>
                            <li className="font-semibold text-sm md:text-base">
                                <a href="#">Subscriptions</a>
                            </li>
                            <li className="font-semibold text-sm md:text-base">
                                <a href="#">Settings</a>
                            </li>
                            <li className="font-semibold text-sm md:text-base">
                                <button onClick={handleLogout}type='button'>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
  )
}
