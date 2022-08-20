import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import Stats from '../components/Stats'
import { BiUser, BiBookReader, BsShare, AiOutlineMail, FiMoreHorizontal, MdClose } from '../components/Icons'
import Blue from '../public/Blue.webp'
import Author from '../components/Author'
import BooksCat from '../components/BooksCat'
import Book from '../components/Book'
import authors from '../data/authors'


export default function Home({ isDarkTheme }) {
  const [author, setAuthor] = useState(undefined);
  const [book, setBook] = useState(undefined);
  const handleSetAuthor = (payload) => {
    setBook(undefined);
    setAuthor(payload)
  }

  const handleSetBook = (payload) => {
    setAuthor(undefined);
    setBook({
      title: 'Book Title',
      author: 'Author Name',
      releaseDate: '2010',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1'
    })
  }
  const [colorsClass, setColorsClass] = useState(isDarkTheme ? 'bg-[#0c131b]/95 text-gray-200' : 'bg-gray-100 text-slate-700')
  return (
    <>
      <Head>
        <title>Books | Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`flex-1 max-w-full overflow-hidden flex flex-col p-4 h-full ${colorsClass} relative`} >
        <Header isDarkTheme={isDarkTheme} />
        <div className='content-wrapper flex-1 wrapper grid grid-cols-1 md:grid-cols-4 gap-4 items-start overflow-y-scroll md:overflow-hidden'>
        <div className='content-wrapper md:col-span-3 flex-col flex gap-2 md:max-h-full md:overflow-y-scroll'>
          <div className=' flex flex-col md:flex-row items-center gap-4 '>
            <Stats isDarkTheme={isDarkTheme} color='#3b3bff' icon={<BiUser />} allNumber={28.886} text={'Book Authors'} plusNumber={1280} />
            <Stats isDarkTheme={isDarkTheme} color='#efb817' icon={<BiBookReader />} allNumber={26.669} text={'Book Readers'} plusNumber={1082} />
            <Stats isDarkTheme={isDarkTheme} color='#0b9d6c' icon={<BsShare />} allNumber={20.662} text={'Book Sharer'} plusNumber={1468} />
          </div>
          <BooksCat isDarkTheme={isDarkTheme} cat='Popular Books'>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
          </BooksCat>
          <BooksCat isDarkTheme={isDarkTheme} cat='Just Landing Books'>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
          </BooksCat>
          <BooksCat isDarkTheme={isDarkTheme} cat='Tech Books'>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
          </BooksCat>
          <BooksCat isDarkTheme={isDarkTheme} cat='Fiction Books'>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
          </BooksCat>
          <BooksCat isDarkTheme={isDarkTheme} cat='Health Books'>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
            <div onClick={handleSetBook}>
            <Book isDarkTheme={isDarkTheme} image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebookcoverdesigner.com%2Fwp-content%2Fuploads%2F2018%2F06%2F324.jpg&f=1&nofb=1' title='title' author="Author's name" />
            </div>
          </BooksCat>
        </div>
        <div className='wrapper-fixed flex flex-col gap-4'>
          <div className={`cursor-pointer join-blog w-full border rounded-xl border-[#0b9d6c] py-5 px-3 flex items-center justify-between ${colorsClass}`}>
            <p className='flex-1 text-base font-light'>Subscribe to our Blog</p>
            <div className='w-[40px] h-[40px] text-lg bg-[#0b9d6c] text-white flex items-center justify-center rounded-md'>
              <AiOutlineMail />
            </div>
          </div>
          <div className='community-join p-6 rounded-lg w-full relative overflow-hidden flex flex-col items-center'>
              <div className='absolute inset-0 opacity-90 h-full'>
                <Image src={Blue} alt='Join our community' layout='fill' />
              </div>
              <p className='text w-[70%] text-center relative text-white font-semibold'>
                Join a community of over 5000 Book Lovers <br /> Here Now
              </p>
              <button className='bg-white relative font-semibold rounded-lg mt-4 text-[#3b3bff] p-2 flex'>Join Here</button>
          </div>
          <div 
          className={`authors-wrapper -order-1 md:order-none flex-1 ${colorsClass} p-4 rounded-lg flex flex-col gap-2 max-h-[260px] overflow-y-scroll`}
          style={{backgroundColor: isDarkTheme ? '#0c131b': 'white'}}
          >
            <div className='flex justify-between items-center mb-2'>
              <h3 className='text-lg'>Book Authors</h3>
              <button className='text-lg'><FiMoreHorizontal /></button>
            </div> 
            {authors.map(author => (
              <div key={author.id} onClick={() => handleSetAuthor(author)}>
                <Author isDarkTheme={isDarkTheme} image={author.image} name={author.name} country='Paris, France' />
              </div>
            ))} 
          </div>
        </div>
        {author && <div className='author-wrapper  absolute inset-0 bg-black/60 z-20 p-10 ms:p-18'>
                      <div className={`author-infos ${colorsClass} w-full h-full p-10 rounded-lg overflow-y-scroll relative content-wrapper`}>
                          <div className=''>
                              <img src={author?.image} alt={author?.name} />
                          </div>
                          <div className='py-2'>
                              <p className='text-lg'>Author Name: <span className='font-semibold'>{author.name}</span></p>
                              <p className='text-lg'>Author Born Date: <span className='font-semibold'>{author.bornDate}</span></p>
                              <p className='text-lg'>Author Death Date: <span className='font-semibold'>{author.deathDate}</span></p>
                          </div>
                          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2'>
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
                          className='fixed text-gray-200 right-5 top-5 text-2xl cursor-pointer'>
                              <MdClose />
                          </div>
                      </div>
                  </div>}
        </div>
      </div>
    </>
  )
}

