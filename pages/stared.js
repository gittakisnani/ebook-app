import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import BooksCat from '../components/BooksCat';
import Book from '../components/Book';
import { MdClose } from 'react-icons/md';
import Head from 'next/head';

const Stared = ({ isDarkTheme}) => {
    const router = useRouter();
    const [book, setBook] = useState(undefined)
    const [colorsClass, setColorsClass] = useState(isDarkTheme ? 'bg-[#0c131b]/95 text-gray-200' : 'bg-gray-100 text-slate-700')
    const activePage = decodeURI(router.asPath.slice(1)) 
    const handleSetBook = (payload=undefined) => {
        setBook(payload ?? {
            title: 'Book Title',
            author: 'Author Name',
            releaseDate: '2010',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1'
          } 
        )
    }

    useEffect(() => setColorsClass(isDarkTheme ? 'bg-[#0c131b]/95 text-gray-200' : 'bg-gray-100 text-slate-700'), [isDarkTheme])
    return (
        <>
            <Head>
                <title>Books | Stared Books</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
        
            <div className={`flex-1 max-w-full overflow-x-hidden flex flex-col p-4 ${colorsClass} h-full`}>
                <Header isDarkTheme={isDarkTheme} activePage={activePage} />
                <div className='h-full overflow-y-scroll content-wrapper'>
                    <BooksCat isDarkTheme={isDarkTheme} cat='Stared books'>
                    <div onClick={() => handleSetBook()}><Book stared isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
                    </div>
                    <div onClick={() => handleSetBook()}><Book stared isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
                    </div>
                    <div onClick={() => handleSetBook()}><Book stared isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
                    </div>
                    <div onClick={() => handleSetBook()}><Book stared isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
                    </div>
                    <div onClick={() => handleSetBook()}><Book stared isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
                    </div>
                    <div onClick={() => handleSetBook()}><Book stared isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
                    </div>
                    <div onClick={() => handleSetBook()}><Book stared isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
                    </div>
                    </BooksCat>
                    </div>

        {book && <div className='author-wrapper  absolute inset-0 bg-black/60 z-20 p-10 ms:p-18'>
                        <div className={`author-infos ${colorsClass} w-full h-full p-10 rounded-lg overflow-y-scroll relative content-wrapper`}>
                            <div className=''>
                                <img src={book?.image} alt={book?.title} />
                            </div>
                            <div className='py-2'>
                                <p className='text-lg'>Book Title: <span className='font-semibold'>{book.title}</span></p>
                                <p className='text-lg'>Author: <span className='font-semibold'>{book.author}</span></p>
                                <p className='text-lg'>Released In: <span className='font-semibold'>{book.releaseDate}</span></p>
                            </div>


                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4'>
                        <div className={`button-cta bg-[#3b3bff] duration-300 ease-out hover:bg-[#5959ff] active:bg-[#5959ff] rounded-lg`}>
                                <button className='w-full text-gray-200 p-2 grid items-center justify-center'>Learn more</button>
                            </div>
                        <div className={`button-cta bg-[#3b3bff] duration-300 ease-out hover:bg-[#5959ff] active:bg-[#5959ff] rounded-lg`}>
                                <button className='w-full text-gray-200 p-2 grid items-center justify-center'>Buy Book</button>
                            </div>
                        </div>
                            <div 
                            onClick={() => setBook(undefined)}
                            className='fixed right-5 top-5 text-2xl cursor-pointer text-gray-200'>
                                <MdClose />
                            </div>
                        </div>
                    </div>}
            </div>
        </>
    )
}

export default Stared