import React, { useState } from 'react'

const Stats = ({ color, icon, allNumber, text, plusNumber, isDarkTheme}) => {
  const [colorClass, setColorClass] = useState(isDarkTheme ? 'bg-[#0c131b]/95 text-gray-200' : 'bg-white text-slate-700')
  return (
    <div className={`stat rounded-xl p-3 flex items-center justify-between w-full ${colorClass}`}>
        <div 
        style={{backgroundColor: color}}
        className='w-[50px] h-[50px] rounded-[50%] grid place-content-center text-white text-xl'>
            {icon}
        </div>
        <div className='numbers flex flex-col gap-2'>
            <p className='text-lg font-semibold'>{allNumber}</p>
            <p className='capitalize'>{text}</p>
        </div>
        <div 
        style={{color: color}}
        className='plus-number font-semibold text-lg'>+{plusNumber}</div>
    </div>
  )
}

export default Stats