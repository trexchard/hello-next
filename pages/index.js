import Head from 'next/head'

export default function Home() {
  return (
    <body className="flex flex-col min-h-screen text-gray-900 bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
      <Head>
        <title>Caleb Runion</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&family=Space+Grotesk:wght@300&display=swap" rel="stylesheet"/>
      </Head>

      <header className="sticky top-0 z-50 flex justify-center w-full p-6 rounded-b-lg shadow-md bg-white/80 dark:bg-gray-700/80 backdrop-blur-xl">
        <div class="inline-grid grid-cols-[auto,1fr] gap-x-4">
          <img src="/profile.jpg" className="self-center object-cover w-16 h-16 row-span-2 rounded-md shadow-md" />
          <h1 className="text-4xl uppercase font-oswald">Caleb Runion</h1>
          <h2 className="font-mono leading-tight opacity-80">front end web&nbsp;developer</h2>
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl p-6 mx-auto font-sans md:p-12">
      </main>

    </body>
  )
}
