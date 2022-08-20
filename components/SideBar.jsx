import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, MdOutlineSpaceDashboard, MdSpaceDashboard, FiTrendingUp, FiLogOut, AiFillStar, AiOutlineStar, BsPeople, BsPeopleFill, RiSettingsFill, RiSettingsLine  } from './Icons';
const SideBar = ({ openedPage, isDarkTheme }) => {
    const decodedOpenedPage = decodeURI(openedPage)
    const [sideBar, setSideBar] = useState(false);
    const handleSideBar = () => setSideBar(!sideBar);
    const [hoverClass, setHoverClass] = useState(isDarkTheme ? 'hover:bg-[#003049] text-gray-200' : 'hover:bg-[#eee] text-slate-700')

    const handleActivePage = () => {
        const pages = document.querySelectorAll('li');
        pages.forEach(page => page.classList.remove('active-page'))
        if(decodedOpenedPage) {
            pages.forEach(page => page.classList.contains(decodedOpenedPage) ? page.classList.add('active-page') : '')
        } else {
            pages.forEach(page => page.classList.contains('dashboard') ? page.classList.add('active-page') : '')
        }
    }
    useEffect(() => setHoverClass(isDarkTheme ? 'hover:bg-[#003049] text-gray-200' : 'hover:bg-[#eee] text-slate-700'), [isDarkTheme])
    useEffect(() => handleActivePage(), [decodedOpenedPage])
  return (
    <aside 
    className='p-4 flex flex-col duration-300 ease-in-out h-screen'
    style={{width: !sideBar ? '90px' : '200px', backgroundColor: isDarkTheme ? '#0c131b' : 'white'}}
    >
        <div 
        onClick={handleSideBar}
        className={`sidebar-toggle cursor-pointer w-[60px] h-[50px] rounded grid place-content-center duration-200 ease-out ${hoverClass}`}>
            <AiOutlineMenu  size={25} />
        </div>
        <div className='pages flex-1 py-4'>
            <ul className='w-full flex-col justify-start items-center gap-2 list-none'>
                <Link href={'/'}>
                    <li className={`px-4 py-2 cursor-pointer flex items-center gap-4 overflow-hidden w-full duration-300 ease-in-out dashboard ${hoverClass}`}>
                        <div className='icon'>
                            {decodedOpenedPage && <MdOutlineSpaceDashboard size={'25px'}/>}
                            {!decodedOpenedPage && <MdSpaceDashboard size={'25px'}/>}
                            {/* Depends on teh theme */}

                        </div>
                        {sideBar && <p className=''>Dashboard</p>}
                    </li>
                </Link>
                <Link href={'/popular'}>
                    <li className={`px-4 py-2 cursor-pointer flex items-center gap-4 overflow-hidden w-full duration-300 ease-in-out ${hoverClass} popular`}>
                        <div className='icon'>
                            <FiTrendingUp size={'25px'}/>
                        </div>
                        {sideBar && <p className=''>Popular</p>}
                    </li>
                </Link>
                <Link href={'/stared'}>
                     <li className={`px-4 py-2 cursor-pointer flex items-center gap-4 overflow-hidden w-full duration-300 ease-in-out ${hoverClass} stared`}>
                        <div className='icon'>
                            {decodedOpenedPage !== 'stared' && <AiOutlineStar size={'25px'}/>}
                            {decodedOpenedPage == 'stared' && <AiFillStar size={'25px'}/>}
                        </div>
                        {sideBar && <p className='whitespace-nowrap'>Stared Books</p>}
                    </li>
                </Link>
                <Link href={'/authors'}>
                     <li className={`px-4 py-2 cursor-pointer flex items-center gap-4 overflow-hidden w-full duration-300 ease-in-out ${hoverClass} authors`}>
                        <div className='icon'>
                            {decodedOpenedPage !== 'authors' && <BsPeople size={'25px'}/>}
                            {decodedOpenedPage === 'authors' && <BsPeopleFill size={'25px'}/>}
                        </div>
                        {sideBar && <p className=''>Authors</p>}
                    </li>
                </Link>
                <Link href={'/settings'}>
                    <li className={`px-4 py-2 cursor-pointer flex items-center gap-4 overflow-hidden w-full duration-300 ease-in-out ${hoverClass} settings`}>
                        <div className='icon'>
                            {decodedOpenedPage !== 'settings' && <RiSettingsLine size={'25px'}/>}
                            {decodedOpenedPage == 'settings' && <RiSettingsFill size={'25px'}/>}
                        </div>
                        {sideBar && <p className=''>Settings</p>}
                    </li>
                </Link>
            </ul>   
        </div>
        <div className={`text-slate-700 px-4 py-2 cursor-pointer flex items-center gap-4 overflow-hidden w-full duration-300 ease-in-out ${hoverClass}`}>
            <div className='icon'><FiLogOut size={25} /></div>
            {sideBar && <p className=''>Logout</p>}
        </div>
    </aside>
  )
}

export default SideBar