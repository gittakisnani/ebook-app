import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Light from '../public/Light.jpeg'
import Dark from '../public/Dark.jpeg'
import { AiOutlineCheck } from '../components/Icons'
import Head from 'next/head'
//It Should have:
//-Language,
//-Currency,
//-Theme,
//Palette,
//Share with my friends //TODO:
//Give us a feedback //TODO:
//Maybe Contribute




const colors = ['#dc2626', '#fbbf24', '#65a30d', '#16a34a', '#0891b2', '#4f46e5', '#c026d3', '#db2777', '#e11d48', '#000000', '#3b3bff'];
const LANGUAGES = ['English US (Default)', 'Arabic', 'French', 'English UK', 'English AU', 'German', 'Spanish', 'Italian']
const CURRENCIES = ['DZD', 'EUR', 'AUD', 'INR', 'BRL', 'USD', 'EGP', 'JPY', 'SAR', 'CHF', 'TRY']
const Settings = ({ isDarkTheme, setIsDarkTheme, color, setColor }) => {
    const [colorsClass, setColorsClass] = useState(isDarkTheme ? 'bg-[#0c131b]/95 text-gray-200' : 'bg-gray-100 text-slate-700');
    const [selected, setSelected] = useState(color)
    const handleTheme = (selector) => {
    const themes = document.querySelectorAll(selector);
    themes.forEach(theme => theme.addEventListener('click', () => {
        themes.forEach(themeChild => themeChild.classList.remove('selected'))
        theme.classList.add('selected')
    }))
    }

    useEffect(() => setColorsClass(isDarkTheme ? 'bg-[#0c131b]/95 text-gray-200' : 'bg-gray-100 text-slate-700'), [isDarkTheme]);
    useEffect(() => setSelected(color), [color]);
  return (
    <>
        <Head>
            <title>Settings</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className={`flex-1 max-w-full overflow-x-hidden content-wrapper flex flex-col p-4 ${colorsClass} h-full`}>
            <div className='w-full p-4'>
                <div className='appearance '>
                    <h3 className='text-xl '>Appearance</h3>
                    <p className='desc-appearance text-gray-400 '>Change how Untitled UI looks in your browser</p>
                </div>

                <div className='my-4'>
                    <h4 className=' text-lg'>Interface Theme</h4>
                    <p className='text-gray-400'>Select and customize your UI Theme</p>

                    <ul className='py-2 flex list-none gap-4'>
                        <div>
                            <li onClick={() => {
                                handleTheme('.theme');
                                setIsDarkTheme(window?.matchMedia("(prefers-color-scheme: dark)").matches || false);
                            }} className='theme cursor-pointer rounded-lg border-gray-100  border-2 overflow-hidden'>
                            {!isDarkTheme && <Image  src={Light} alt='System preferences' />}
                            {isDarkTheme && <Image  src={Dark} alt='System preferences' />}
                            </li>
                            <p className='md:text-lg  font-semibold py-2'>System Preferences</p>
                        </div>
                        <div>
                            <li 
                            data-color={color}
                            onClick={() => {
                                handleTheme('.theme');
                                setIsDarkTheme(true)
                            }} className='theme cursor-pointer rounded-lg border-gray-100  border-2 overflow-hidden'>
                            <Image src={Dark} alt='System preferences' />
                            </li>
                            <p className='md:text-lg  font-semibold py-2'>Dark</p>
                        </div>
                        <div>
                            <li onClick={() => {
                                handleTheme('.theme');
                                setIsDarkTheme(false)
                            }} className='theme cursor-pointer rounded-lg border-gray-100  border-2 overflow-hidden'>
                            <Image src={Light} alt='System preferences' />
                            </li>
                            <p className='md:text-lg  font-semibold py-2'>Light</p>
                        </div>
                    </ul>
                </div>

                <div className='my-4'>
                    <h4 className=' text-lg'>Interface Color Palette</h4>
                    <p className='text-gray-400'>Select and customize your UI Colors</p>
                    <ul className='flex items-center gap-4 flex-wrap py-2'>
                        {colors.map((color, index) => (
                            <li 
                            key={index}
                            onClick={() => setColor(color)}
                            style={{backgroundColor: color}} 
                            className='p-4 rounded-[50%] flex items-center justify-center group cursor-pointer'>
                                {selected === color && <span className=' text-white text-xl font-semibold'><AiOutlineCheck /></span>}
                                {selected !== color && <span className='opacity-0 duration-200 ease-out group-hover:opacity-100 text-white text-xl font-semibold'><AiOutlineCheck /></span>}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='language'>
                    <h3 className='text-xl '>Language</h3>
                    <p className='desc-appearance text-gray-400 '>Select your Language:</p>

                    <ul className='py-2 flex flex-wrap items-center gap-3 '>
                        {LANGUAGES.map((lang, index) => (
                            //We may add flags
                            <li 
                            onClick={() => handleTheme('.lang')} key={index} className={`lang p-2 rounded-lg overflow-hidden flex items-center gap-3 border border-transparent w-[200px] cursor-pointer hover:border-[#3b3bff]`}>
                                <p className='text-lg'>{lang}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='currency-wrapper'>
                    <h3 className='text-xl '>Currency</h3>
                    <p className='desc-appearance text-gray-400 '>Select your Currency:</p>

                    <ul className='py-2 flex flex-wrap items-center gap-3 '>
                        {CURRENCIES.map((currency, index) => (
                            //We may add flags
                            <li onClick={() => handleTheme('.currency')} key={index} className='currency p-2 rounded-lg overflow-hidden flex items-center gap-3 border border-transparent hover:border-[#3b3bff] w-[200px] cursor-pointer'>
                                <p className='text-lg'>{currency}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Settings