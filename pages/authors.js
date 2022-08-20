import React, { useState } from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Author from '../components/Author';
import authors from '../data/authors';
import { MdClose } from '../components/Icons'

const Popular = ({ isDarkTheme }) => {
    const router = useRouter();
    const [colorsClass, setColorsClass] = useState(isDarkTheme ? 'bg-[#0c131b]/95 text-gray-200' : 'bg-gray-100 text-slate-700')
    const [author, setAuthor] = useState(undefined)
    const activePage = decodeURI(router.asPath.slice(1)) 
    return (
        <>
            <Head>
                <title>Authors</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={`flex-1 max-w-full overflow-hidden flex flex-col p-4 ${colorsClass} h-full relative`}>
                <Header isDarkTheme={isDarkTheme} activePage={activePage} />
                    <div className='h-fit overflow-y-scroll content-wrapper grid gird-cols-1 sm:grid-cols-2  md:grid-cols-4 items-start gap-6 '>
                    {authors.map(({id, name, image}) => (
                        <div key={id} onClick={() => setAuthor(authors.find(author => author.id === id))}>
                            <Author isDarkTheme={isDarkTheme} key={id} image={image} name={name} country='Paris, France' />
                        </div>
                    ))}
                    </div>

                    {author && <div className='author-wrapper  absolute inset-0 bg-black/60 z-20 p-10 md:p-18'>
                        <div className={`author-infos ${colorsClass} w-full h-full p-10 rounded-lg overflow-y-scroll relative content-wrapper`}>
                            <div className=''>
                                <img src={author?.image} alt={author?.name} />
                            </div>
                            <div className='py-2'>
                                <p className='text-lg'>Author Name: <span className='font-semibold'>{author.name}</span></p>
                                <p className='text-lg'>Author Born Date: <span className='font-semibold'>{author.bornDate}</span></p>
                                <p className='text-lg'>Author Death Date: <span className='font-semibold'>{author.deathDate}</span></p>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'>
                                {author.releases.map(({id, title, image, year}) => (
                                    <div key={id} className='flex flex-col border border-gray-700 p-2'>
                                        <div className='release-image flex-1'>
                                            <img className='h-full w-full' src={image} alt={title} />
                                        </div>
                                        <p className='title'>Title: <span className='font-semibold'>{title}</span></p>
                                        <p className='title'>Released: <span className='font-semibold'>{year}</span></p>
                                    </div>
                                ))}
                            </div>
                            <div 
                            onClick={() => setAuthor(undefined)}
                            className='fixed text-gray-200 right-5 top-5 text-2xl cursor-pointer'>
                                <MdClose />
                            </div>
                        </div>
                    </div>}
            </div>
        </>
    )
}


export default Popular