import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import { store } from '../app/store'
import { Provider } from 'react-redux'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Caleb Runion</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Oswald:wght@300&family=Space+Grotesk:wght@300&display=swap'
          rel='stylesheet'
        />
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-icon-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/android-icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/manifest.webmanifest' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
      </Head>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex items-center flex-1 w-full px-6 pt-8 pb-16 bg-gray-100 dark:bg-gray-900 md:p-12 md:pb-16'>
          <div className='max-w-5xl mx-auto'>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
