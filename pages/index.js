import Head from 'next/head'

export default function Home() {
  return (
    <body className="flex flex-col min-h-screen text-gray-900 bg-white dark:text-gray-200 dark:bg-gray-700">
      <Head>
        <title>Caleb Runion</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&family=Space+Grotesk:wght@300&display=swap" rel="stylesheet"/>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
      </Head>

      <header className="sticky top-0 z-50 flex justify-center p-6 bg-white rounded-b-lg shadow-md dark:bg-gray-700">
        <div class="inline-grid grid-cols-[auto,1fr] gap-x-4">
          <img src="/profile.jpg" className="self-center object-cover w-16 h-16 row-span-2 rounded-md shadow-md" />
          <h1 className="text-4xl uppercase font-oswald">Caleb Runion</h1>
          <h2 className="font-mono leading-tight opacity-80">front end web&nbsp;developer</h2>
        </div>
      </header>

      <main className="flex-1 w-full p-6 font-sans bg-gray-100 dark:bg-gray-900 md:p-12">
        <div className="max-w-5xl pb-16 mx-auto">

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
            <a href="https://www.google.com/maps/place/Greenville,+SC/@34.8177151,-82.348231,11z/data=!4m5!3m4!1s0x88578f6662fa1105:0xd8aa9d77bf257696!8m2!3d34.8526176!4d-82.3940104?hl=en" target="_blank"
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




          {/* Experience */}
          <section className="grid gap-6 mt-12">
            <h1 className="text-5xl uppercase font-oswald">Experience</h1>
            <div>
              <a href="https://jacksonmg.com" target="_blank" className="inline-flex items-center gap-2 text-2xl transition hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" className="fill-current rotate-[-45deg]">
                  <path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"/>
                </svg>
                Jackson Marketing
              </a>
              <p className="leading-snug opacity-50">Front End Web Developer <span className="mx-1">•</span> March 2019 – Current</p>
            </div>
          </section>



          {/* Education */}
          <section className="grid gap-6 mt-12">
            <h1 className="text-5xl uppercase font-oswald">Education</h1>
            <div>
              <a href="https://www.clemson.edu" target="_blank" className="inline-flex items-center gap-2 text-2xl transition hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" className="fill-current rotate-[-45deg]">
                  <path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"/>
                </svg>
                Clemson University
              </a>
              <p className="leading-snug opacity-50">B.S. Mathematics Teaching <span className="mx-1">•</span> 2014 – 2018</p>
            </div>
          </section>



          {/* Skills */}
          <section className="grid gap-6 mt-12">
            <h1 className="text-5xl uppercase font-oswald">Skills</h1>
            <div className="flex flex-wrap gap-1">
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">Creative Problem-solving</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">Communication, Interpersonal</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">Interpersonal</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">Leadership</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">Time Management</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">HTML5</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">CSS</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">SCSS</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">ES6 Javascript</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">Node.js</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">Alpine.js</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">Docker</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">Gulp</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">Bash</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">jQuery</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">tailwindcss</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">Responsive Design</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">Git</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">GitHub</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">ExpressionEngine</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">Cross-browser Compatibility</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">Netlify</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">Deployment</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">Hosting</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">NEXT.js</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">React</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">nginx</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">Linux</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">User Experience (UX)</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">Adobe Photoshop</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">Adobe Animate</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">Adobe Illustrator</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">Eblast Production</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">Banner Ad Production</div>
              <div className="px-3 py-2 font-mono rounded-md bg-gray-400/20">Browsersync</div>
            </div>
          </section>



        </div>
      </main>


      <footer className="flex items-center justify-between px-4 bg-white md:px-12 dark:bg-gray-700">

          <a href="https://www.linkedin.com/in/calebrunion/" className="p-4 transition hover:text-blue-500">
            <svg width="34" height="34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" className="fill-current">
              <title>LinkedIn</title>
              <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"/>
            </svg>
          </a>

          <a href="https://github.com/calebrunion" className="p-4 transition hover:text-blue-500">
            <svg width="34" height="34" viewBox="0 0 16 16" aria-hidden="true" className="fill-current">
              <title>GitHub</title>
              <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>

          <a href="#" className="inline-flex items-center p-4 ml-auto -mr-2 text-xl uppercase transition font-oswald hover:text-blue-500">
            Back to top
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="ml-1 fill-current">
              <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
            </svg>
          </a>

      </footer>
    </body>
  )
}
