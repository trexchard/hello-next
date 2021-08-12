import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-oswald dark:bg-gray-900 dark:text-white">
      <Head>
        <title>Caleb Runion</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;700&display=swap" rel="stylesheet" />
      </Head>

      <header className="sticky top-0 w-full p-6 text-center rounded-b-lg shadow-md dark:bg-gray-700/50 backdrop-blur-xl">
        <h1 className="text-5xl uppercase">Caleb Runion</h1>
        <h2 className="font-mono text-lg opacity-80">frontend web developer</h2>
      </header>

      <main className="flex flex-col items-start justify-center flex-1 w-full px-20 text-center">
        the beginning
        <img src="http://fpoimg.com/500x1000?text=Preview" className="w-full" />
        the end
      </main>

    </div>
  )
}
