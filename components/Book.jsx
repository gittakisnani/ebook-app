import React, { useState } from 'react'
import { useColorContext } from '../context/colorPaletteContext'
import { AiFillStar, AiOutlineStar } from './Icons'


const Book = ({ image, title, author, isDarkTheme, stared=false }) => {
  const { currentColor } = useColorContext()
  const colorClass = useState(isDarkTheme ? 'bg-[#0c131b] text-gray-200' : 'bg-white text-slate-700')[0]
  return (
    <div className={`w-full flex flex-col gap-1 ${colorClass} cursor-pointer`}>
        <div className='img-wrapper w-full max-h-[180px] flex-1 rounded-lg overflow-hidden'>
            <img src={image} alt={title} />
        </div>
        <div className='flex justify-between items-center py-2'>
          <div>
          <p className='title font-semibold capitalize'>{title}</p>
          <p className='font-light capitalize'>{author}</p>
          </div>
          <div className='stared text-3xl' title={stared ? 'Unstar Book' : 'Star book'}>
            {stared && <AiFillStar color={currentColor} />}
            {!stared && <AiOutlineStar color={currentColor} />}
          </div>
        </div>
    </div>
  )
}

export default Book