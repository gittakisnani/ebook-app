import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { getCats } from '../features/categories/categoriesSlice'
//Filters include : 
//Price min and max,
//category,
//writer
//release data
//rate
import { AiOutlineSearch, GoSettings, RiNotification2Line } from './Icons'
const Header = ({ activePage, isDarkTheme }) => {
    const minRef = useRef();
    const maxRef = useRef();
    const rateRef= useRef();


    const categories = useSelector(getCats)
    const [filters, setFilters] = useState(false);
    const [releaseYear, setReleaseYear] = useState(0)
    const [filteredCats, setFilteredCats] = useState([])
    const [filteredAuthors, setFilteredAuthors] = useState([])
    const [notification, setNotification] = useState(false)
    const [MinMax, setMinMax] = useState({min: 0, max:Number.MAX_VALUE})
    const [colorClass, setColorClass] = useState(isDarkTheme ? 'text-gray-200 bg-[#0c131b]' : 'text-slate-700 bg-gray-200');


    const handleReset = () => {
        setFilteredCats();
        setFilteredAuthors();
        minRef.current.value = '';
        maxRef.current.value = '';
        rateRef.current.value = 1
        setMinMax({ min: 0, max: Number.MAX_VALUE})
        document.querySelectorAll('.filtered').forEach(item => item.classList.remove('filtered'))
    };


    const handleFilters = () => setFilters(!filters)
    const handleSelect = (e, type) => {
        const item = e.target;
        if(item.classList.contains('filtered')) {
            item.classList.remove('filtered');
            type === 'category' ? setFilteredCats(filteredCats.filter(cat => cat !== item.textContent)) : setFilteredAuthors(filteredAuthors.filter(cat => cat !== item.textContent))
        } else {
            item.classList.add('filtered');
            type === 'category' ? setFilteredCats([...filteredCats, item.textContent]) : setFilteredAuthors([...filteredAuthors, item.textContent])
        }
    }

    const handleReleaseDate = (e) => {
        const item = e.target;
        document.querySelectorAll('.year').forEach(item => item.classList.remove('filtered'));
        item.classList.add('filtered');
        setReleaseYear(item.id)
    }

    const handleMinMaxInputs = (e) => {
       if(isNaN(e.target.value)) {
           e.target.classList.add('border-red-400')
           e.preventDefault()
       } else if (!isNaN(e.target.value) || !e.target.value) {
            e.target.classList.remove('border-red-400')
       }
    }


    useEffect(() => setColorClass(isDarkTheme ? 'text-gray-200 bg-[#0c131b]' : 'text-slate-700 bg-gray-200'), [isDarkTheme]);


  return (
    <header className='w-full flex justify-between items-center py-4 gap-y-4 flex-wrap'>
        <div className='flex items-center'>
        <h3 className='page-name text-xl md:text-2xl capitalize'>{activePage || 'Dashboard'}</h3>    
        </div>

        <div className='search-form-filter-wrapper flex items-center gap-2 w-full max-w-[550px] order-1 lg:order-none'>
            <div className={`search-form ${colorClass} rounded-md  px-4 py-2 w-[90%] relative`}>
                <form className='form w-full flex items-center gap-4 group'>
                    <button className='text-lg search-submit grid place-content-center duration-300 ease-out text-slate-400 group-hover:text-slate-600 '>
                        <AiOutlineSearch />
                    </button>
                    <input  
                    className='search-input bg-inherit border-none outline-none'
                    placeholder='Search'
                    type="text" 
                    />
                </form>

                {filters && <div className={`filters-wrapper h-[300px] content-wrapper overflow-y-scroll p-4 rounded-md absolute top-[100%] right-0 left-0 my-2 ${colorClass} z-10`}>
                    <div className='categories-filter flex flex-col gap-2'>
                        Categories:
                        <ul className='flex flex-wrap gap-2 items-center'>
                            {categories.map((cat, index) => (
                                <li onClick={(e) => handleSelect(e, 'category')} key={index} className='category p-2 border border-[#3b3bff] rounded-md duration-200 ease-in cursor-pointer'>
                                {cat.category}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='categories-filter flex flex-col gap-2 py-2'>
                        Authors:
                        <ul className='flex flex-wrap gap-2 items-center'>
                            {categories.map((cat, index) => (
                                <li onClick={(e) => handleSelect(e, 'authors')} key={index} className='category p-2 border border-[#3b3bff] rounded-md duration-200 ease-in cursor-pointer'>
                                {cat.category}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='categories-filter flex flex-col gap-2'>
                        Release Date:
                        <ul className='flex flex-wrap gap-2 items-center'>
                            {[2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022].map((year, index) => (
                                <li onClick={handleReleaseDate} key={index} id={year} className='year p-2 border border-[#3b3bff] rounded-md duration-200 ease-in cursor-pointer'>
                                {year} and above
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='categories-filter flex flex-col gap-2 py-2 '>
                        Rate:
                        <input ref={rateRef} step={1} min={1} max={5} type="range" className='outline-none accent-[#3b3bff]/90 hover:accent-[#3b3bff] cursor-pointer' />
                    </div>
                    <div className='categories-filter flex flex-col gap-2'>
                        Price:
                        <div className='flex justify-start gap-4 items-center w-full'>
                            <input
                            ref={minRef}
                            onKeyUp={handleMinMaxInputs}
                            onKeyPress={handleMinMaxInputs}
                            onChange={(e) => setMinMax({...MinMax, min: Number(e.target.value) || 0})}
                             className='border bg-inherit rounded-lg caret-[#3b3bff] border-[#3b3bff] outline-none p-2 max-w-[100px]' type="text" placeholder='Min' />
                            <input
                            ref={maxRef}
                            onKeyUp={handleMinMaxInputs}
                            onKeyPress={handleMinMaxInputs}
                            onChange={(e) => setMinMax({...MinMax, max: Number(e.target.value) || Number.MAX_VALUE})}
                             className='border bg-inherit rounded-lg caret-[#3b3bff] border-[#3b3bff] outline-none p-2 max-w-[100px]' type="text" placeholder='Max' />
                        </div>
                    </div>
                    <div className='my-2 flex items-center justify-end gap-2 w-full'>
                        <button onClick={handleReset} type='reset' className='border-[#3b3bff] border text-[#3b3bff] text-center cursor-pointer px-4 py-2 rounded-lg duration-300 hover:text-inherit hover:bg-[#3b3bff]'>Reset</button>
                        <button onClick={handleFilters} type='reset' className='border-[#3b3bff] border text-[#3b3bff] text-center cursor-pointer px-4 py-2 rounded-lg duration-300 hover:text-inherit hover:bg-[#3b3bff]'>Apply</button>
                    </div>
                </div>}
            </div>
            <div className='filters h-[40px] w-[40px]'>
                <button onClick={handleFilters} className='flex items-center justify-center duration-300 ease-out bg-[#3b3bff]/90 hover:bg-[#3b3bff] text-white rounded-md h-full w-full'>
                    <GoSettings size={20} />
                </button>
            </div>
        </div>
        <div className='notifications-profile flex gap-4 items-center h-[40px] relative'>
            <div title='Notifications' className={`w-[40px] h-full flex items-center justify-center rounded-md ${colorClass}`}>
            <button onClick={() => setNotification(!notification)} title='Notifications'>
                <RiNotification2Line />
            </button>
            {notification && <div className={`absolute top-[100%] w-[230px] h-[300px] overflow-y-scroll content-wrapper z-10 right-10 rounded-lg  p-4 my-2 ${colorClass}`}>
                <p className='text-lg text-center'>No Notifications to show!</p>
            </div>}
            </div>
            <div className='profile w-[40px] h-full rounded-[50%] overflow-hidden'>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F13806423%2Fr%2Fil%2F3decc2%2F1053918708%2Fil_794xN.1053918708_jde3.jpg&f=1&nofb=1" alt="Profile avatar" />
            </div>
        </div>
    </header>
  )
}

export default Header