export default function Home() {
  return (
    <>
      {/* Intro */}
      <p className=''>
        Detail-oriented software engineer, but mostly a creative problem-solver
        that's fast-paced and eager to learn. 2.5 years of industry experience
        building scalable front end web content. Builds with modern technologies
        like
        <a
          href='https://tailwindcss.com'
          className='ml-1 text-blue-500 hover:underline'
        >
          tailwindcss
        </a>
        ,
        <a
          href='https://alpinejs.dev'
          className='ml-1 text-blue-500 hover:underline'
        >
          Alpine.js
        </a>
        and
        <a
          href='https://www.docker.com/'
          className='ml-1 text-blue-500 hover:underline'
        >
          Docker
        </a>
        .
        <i className='ml-1 opacity-70'>
          You'll&nbsp;like me better when I'm caffeinated.
        </i>{' '}
        ☕
      </p>

      <section className='mt-4 md:grid md:grid-cols-2 lg:grid-flow-col'>
        {/* Location */}
        <a
          href='https://www.google.com/maps/place/Greenville,+SC/@34.8177151,-82.348231,11z/data=!4m5!3m4!1s0x88578f6662fa1105:0xd8aa9d77bf257696!8m2!3d34.8526176!4d-82.3940104?hl=en'
          target='_blank'
          className='grid grid-cols-[auto,1fr] self-start gap-x-4 rounded-md items-baseline hover:text-black dark:hover:text-white hover:bg-gray-400/20 p-4 transition group print:p-2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            className='relative self-center w-10 h-10 row-span-2 transition fill-current group-hover:scale-125 print:hidden'
          >
            <path d='M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z' />
          </svg>
          <small className='font-mono opacity-70'>location</small>
          <h2 className='text-xl leading-tight lowercase'>Greenville, SC</h2>
        </a>

        {/* Telephone */}
        <a
          href='tel:8643863546'
          className='grid grid-cols-[auto,1fr] self-start gap-x-4 rounded-md items-baseline hover:text-black dark:hover:text-white hover:bg-gray-400/20 p-4 transition group print:p-2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            className='relative self-center w-10 h-10 row-span-2 transition fill-current group-hover:scale-125 print:hidden'
          >
            <path d='M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z' />
          </svg>
          <small className='font-mono opacity-70'>tel</small>
          <h2 className='text-xl leading-tight lowercase'>864.386.3546</h2>
        </a>

        {/* Email */}
        <a
          href='mailto:calebrunion@icloud.com'
          className='grid grid-cols-[auto,1fr] self-start gap-x-4 rounded-md items-baseline hover:text-black dark:hover:text-white hover:bg-gray-400/20 p-4 transition group print:p-2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 0 24 24'
            width='24px'
            className='relative self-center w-10 h-10 row-span-2 transition fill-current group-hover:scale-125 print:hidden'
          >
            <path d='M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z' />
          </svg>
          <small className='font-mono opacity-70'>email</small>
          <h2 className='text-xl leading-tight lowercase'>
            calebrunion@icloud.com
          </h2>
        </a>
      </section>

      {/* Experience */}
      <section className='grid gap-6 mt-12'>
        <h1 className='text-5xl uppercase font-oswald print:text-3xl'>
          Experience
        </h1>
        <div>
          <a
            href='https://jacksonmg.com'
            target='_blank'
            className='inline-flex items-center gap-2 text-2xl transition hover:text-blue-500 print:text-lg'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 0 24 24'
              width='24px'
              className='fill-current rotate-[-45deg] print:hidden'
            >
              <path d='M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z' />
            </svg>
            Jackson Marketing
          </a>
          <p className='leading-snug opacity-50'>
            Front End Web Developer <span className='mx-1'>•</span> March 2019 –
            Current
          </p>
        </div>
      </section>

      {/* Education */}
      <section className='grid gap-6 mt-12'>
        <h1 className='text-5xl uppercase font-oswald print:text-3xl'>
          Education
        </h1>
        <div>
          <a
            href='https://www.clemson.edu'
            target='_blank'
            className='inline-flex items-center gap-2 text-2xl transition hover:text-blue-500 print:text-lg'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 0 24 24'
              width='24px'
              className='fill-current rotate-[-45deg] print:hidden'
            >
              <path d='M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z' />
            </svg>
            Clemson University
          </a>
          <p className='leading-snug opacity-50'>
            B.S. Mathematics Teaching <span className='mx-1'>•</span> 2014 –
            2018
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className='grid gap-6 mt-12'>
        <h1 className='text-5xl uppercase font-oswald print:text-3xl'>
          Skills
        </h1>
        <div
          id='skills'
          className='flex flex-wrap items-center gap-1 print:text-xs'
        >
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Creative Problem-solving
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Communication
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Interpersonal
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Leadership
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Time Management
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            HTML5
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            CSS
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            tailwindcss
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            SCSS
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            ES6 Javascript
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Alpine.js
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Node.js
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Docker
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Gulp
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Eblast Production
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Bash
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            jQuery
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Responsive Design
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            ExpressionEngine
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Laravel
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            TALL Stack
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            PHP
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Python
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Git
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            GitHub
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Netlify
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Deployment
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Hosting
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            NEXT.js
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            React
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Cross-browser Compatibility
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            UX Design
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Adobe Photoshop
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Adobe Illustrator
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            nginx
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Linux
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Adobe Animate
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Banner Ad Production
          </div>
          <span className='hidden print:p-1 print:inline-block'>•</span>
          <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
            Browsersync
          </div>
        </div>
      </section>
    </>
  )
}
