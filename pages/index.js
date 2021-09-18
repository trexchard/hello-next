import Head from 'next/head'
import Anchor from '../components/Anchor'
import ContactLink from '../components/ContactLink'
import Entry from '../components/Entry'

const skills = [
  'HTML5',
  'CSS',
  'tailwindcss',
  'SCSS',
  'ES6 Javascript',
  'Alpine.js',
  'Node.js',
  'Docker',
  'Gulp',
  'Bash',
  'Eblast Production',
  'jQuery',
  'Responsive Design',
  'ExpressionEngine',
  'Laravel',
  'PHP',
  'Python',
  'Git',
  'GitHub',
  'Netlify',
  'Deployment',
  'Hosting',
  'NEXT.js',
  'React',
  'Cross-browser Compatibility',
  'UX Design',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'nginx',
  'Linux',
  'Adobe Animate',
  'Banner Ad Production'
]

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
        like <Anchor href='https://tailwindcss.com'>tailwindcss</Anchor>,{' '}
        <Anchor href='https://alpinejs.dev'>Alpine.js</Anchor> and{' '}
        <Anchor href='https://nextjs.org'>NEXT.js</Anchor>.{' '}
        <i className='opacity-70'>
          You'll&nbsp;like me better when I'm caffeinated
        </i>{' '}
        ☕
      </p>

      {/* Contact Info */}
      <section className='flex flex-wrap justify-around mt-4'>
        <ContactLink content='864.386.3546' label='tel' url='tel:8643863546' />
        <ContactLink
          content='calebrunion@icloud.com'
          label='email'
          url='mailto:calebrunion@icloud.com'
        />
        <ContactLink
          content='Greenville, SC'
          label='location'
          url='https://www.google.com/maps/place/Greenville,+SC/@34.8177151,-82.348231,11z/data=!4m5!3m4!1s0x88578f6662fa1105:0xd8aa9d77bf257696!8m2!3d34.8526176!4d-82.3940104?hl=en'
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
          url='https://jacksonmg.com'
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
          url='https://www.clemson.edu'
        />
      </section>

      {/* Skills */}
      <section className='grid gap-6 mt-12'>
        <h1 className='text-5xl uppercase font-oswald print:text-3xl'>
          Skills
        </h1>

        <div className='flex flex-wrap items-center gap-1 print:text-xs'>
          {skills.map((skill) => (
            <div className='px-3 py-2 font-mono rounded-md bg-gray-400/20'>
              {skill}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}