import SideBar from '../components/SideBar'
import { useRouter } from 'next/router'
import { store } from '../store';
import { Provider } from 'react-redux';
import '../styles/globals.css'
import useThemeDetector from '../hooks/useThemeDetector';
import { ColorPaletteProvider } from '../context/colorPaletteContext';


function MyApp({ Component, pageProps }) {
  const [isDarkTheme, setIsDarkTheme] = useThemeDetector()
  const router = useRouter();
  const page = router.asPath.slice(1)

  return (
    <Provider store={store}>
     <ColorPaletteProvider>
        <main className='w-screen overflow-x-hidden max-w-[1366px] h-screen'>
          <div className='flex w-full max-w-[1366px] h-full'>
            <SideBar openedPage={page} isDarkTheme={isDarkTheme} />
            <Component {...pageProps} isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme}  />
          </div>
        </main>
     </ColorPaletteProvider>
    </Provider>
  )
}

export default MyApp
