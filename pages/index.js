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

        {/* Intro */}
        <p className="">
          Detail-oriented software engineer, but mostly a creative problem-solver that's fast-paced and eager to learn.
          2.5 years of industry experience building scalable front end web content.
          Builds with modern technologies like
            <a href="https://tailwindcss.com" className="ml-1 text-blue-500 hover:underline">tailwindcss</a>,
            <a href="https://alpinejs.dev" className="ml-1 text-blue-500 hover:underline">Alpine.js</a> and
            <a href="https://www.docker.com/" className="ml-1 text-blue-500 hover:underline">Docker</a>.
          <i className="ml-1 opacity-70">You'll like me better when I'm caffeinated.</i> ☕
        </p>

        <section className="mt-4 md:grid md:grid-cols-2 lg:grid-flow-col">
          {/* Location */}
          <a href="https://www.google.com/maps/place/Greenville,+SC/@34.8331484,-82.4328706,12z/data=!3m1!4b1!4m5!3m4!1s0x88578f6662fa1105:0xd8aa9d77bf257696!8m2!3d34.8526176!4d-82.3940104?hl=en" target="_blank"
            className="grid grid-cols-[auto,1fr] self-start gap-x-4 rounded-md hover:text-black dark:hover:text-white hover:bg-gray-400/20 p-4 transition group">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" className="relative self-center w-10 h-10 row-span-2 transition fill-current group-hover:scale-125">
              <path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"/>
            </svg>
            <small className="font-mono opacity-70">location</small>
            <h2 className="text-xl leading-tight lowercase">Greenville, SC</h2>
          </a>

          {/* Telephone */}
          <a href="tel:8643863546"
            className="grid grid-cols-[auto,1fr] self-start gap-x-4 rounded-md hover:text-black dark:hover:text-white hover:bg-gray-400/20 p-4 transition group">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" className="relative self-center w-10 h-10 row-span-2 transition fill-current group-hover:scale-125">
              <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"/>
            </svg>
            <small className="font-mono opacity-70">tel</small>
            <h2 className="text-xl leading-tight lowercase">864.386.3546</h2>
          </a>

          {/* Email */}
          <a href="mailto:calebrunion@icloud.com"
            className="grid grid-cols-[auto,1fr] self-start gap-x-4 rounded-md hover:text-black dark:hover:text-white hover:bg-gray-400/20 p-4 transition group">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" className="relative self-center w-10 h-10 row-span-2 transition fill-current group-hover:scale-125">
              <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
            </svg>
            <small className="font-mono opacity-70">email</small>
            <h2 className="text-xl leading-tight lowercase">calebrunion@icloud.com</h2>
          </a>
        </section>


      </main>

    </body>
  )
}
