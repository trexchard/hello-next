import Head from 'next/head'
import ContactLink from '../components/ContactLink'
import Entry from '../components/Entry'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Caleb Runion</title>
      </Head>

      {/* Intro */}
      <p>
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

      <section className='flex flex-wrap justify-around mt-4'>
        <ContactLink content='864.386.3546' label='tel' href='tel:8643863546' />
        <ContactLink
          content='calebrunion@icloud.com'
          label='email'
          href='mailto:calebrunion@icloud.com'
        />
        <ContactLink
          content='Greenville, SC'
          label='location'
          href='https://www.google.com/maps/place/Greenville,+SC/@34.8177151,-82.348231,11z/data=!4m5!3m4!1s0x88578f6662fa1105:0xd8aa9d77bf257696!8m2!3d34.8526176!4d-82.3940104?hl=en'
        />
      </section>

      {/* Experience */}
      <section className='grid gap-6 mt-12'>
        <h1 className='text-5xl uppercase font-oswald print:text-3xl'>
          Experience
        </h1>
        <Entry
          organization='Jackson Marketing'
          title='Frontend Web Developer'
          duration='March 2019 – Current'
            href='https://jacksonmg.com'
        />
      </section>

      {/* Education */}
      <section className='grid gap-6 mt-12'>
        <h1 className='text-5xl uppercase font-oswald print:text-3xl'>
          Education
        </h1>
        <Entry
          organization='Clemson University'
          title='B.S. Mathematics Teaching'
          duration='2014 – 2018'
            href='https://www.clemson.edu'
        />
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
