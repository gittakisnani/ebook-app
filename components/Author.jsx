import React, { useState } from 'react'
import { BsChevronRight } from './Icons'
const Author = ({ image, name, country, link='/', isDarkTheme}) => {
  const [colorClass, setColorClass] = useState(isDarkTheme ? 'bg-[#0c131b] text-gray-200': 'bg-white text-slate-700')
  return (
    <div className={`cursor-pointer rounded-lg border ${colorClass} border-[#eee]/80 duration-200 hover:border-[#3b3bff] p-2 flex items-center justify-between gap-2 w-full`}>
        <div className='profile-img rounded-[50%] w-[50px] h-[50px] overflow-hidden'>
            <img src={image} alt={name} />
        </div>
        <div className='name-country flex flex-col gap-1'>
            <p className='name font-semibold '>{name}</p>
            <p className='country font-light '>{country}</p>
        </div>
        <div className='more'>
            <BsChevronRight />
        </div>
    </div>
  )
}


export default Author