import React, { useState } from 'react'

const BooksCat = ({ children, cat, isDarkTheme }) => {
  const [colorClass, setColorClass] = useState(isDarkTheme ? 'bg-[#0c131b]/95 text-gray-200' : 'bg-white text-slate-700')
  return (
    <div className={`p-4 flex flex-col max-w-full rounded-xl my-2 ${colorClass}`}>
        <h3 className='text-lg mb-2 '>{cat}</h3>
        <div className='p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
            {children}
        </div>
    </div>
  )
}

export default BooksCat