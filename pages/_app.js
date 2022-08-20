import SideBar from '../components/SideBar'
import { useRouter } from 'next/router'
import { store } from '../store';
import { Provider } from 'react-redux';
import '../styles/globals.css'
import useThemeDetector from '../hooks/useThemeDetector';
import { useState } from 'react';
function MyApp({ Component, pageProps }) {
  const [isDarkTheme, setIsDarkTheme] = useThemeDetector()
  const [color, setColor] = useState('#3b3bff')
  const router = useRouter();
  const page = router.asPath.slice(1)
  return (
    <Provider store={store}>
      <main className='w-screen overflow-x-hidden max-w-[1366px] h-screen'>
        <div className='flex w-full max-w-[1366px] h-full'>
          <SideBar openedPage={page} isDarkTheme={isDarkTheme} color={color} />
          <Component {...pageProps} isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} color={color} setColor={setColor} />
        </div>
      </main>
    </Provider>
  )
}

export default MyApp
