import Head from 'next/head'
import Anchor from '../components/Anchor'
import ContactLink from '../components/ContactLink'
import Entry from '../components/Entry'

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'NEXT.js',
  'Node.js',
  'Python',
  'Rust',
  'Docker',
  'Kubernetes',
  'PostgreSQL',
  'MongoDB',
  'GraphQL',
  'tailwindcss',
  'Git',
  'GitHub',
  'AWS',
  'Linux',
  'Mithril Mining',
  'Axe Maintenance',
  'Cave Navigation',
  'Rune Encryption',
  'Stonework Architecture',
  'Ale-Driven Development',
  'Grudge-Based Debugging',
  'Beard Grooming',
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Gimli, son of Glóin</title>
      </Head>

      {/* Intro */}
      <p className='text-base leading-relaxed' style={{ color: 'rgba(224, 232, 255, 0.8)' }}>
        Battle-hardened full-stack engineer with an eye for detail sharper than a
        dwarven blade. Over 200 years of experience building scalable
        applications deep in the mines and across Middle-earth. Builds with
        modern technologies like{' '}
        <Anchor href='https://tailwindcss.com'>tailwindcss</Anchor>,{' '}
        <Anchor href='https://reactjs.org'>React</Anchor> and{' '}
        <Anchor href='https://nextjs.org'>NEXT.js</Anchor>.{' '}
        <i style={{ color: 'rgba(224, 232, 255, 0.5)' }}>
          And my axe! ...I mean, and my keyboard!
        </i>{' '}
        ⚒️
      </p>

      {/* Contact Info */}
      <section className='flex flex-wrap justify-around mt-6 gap-2'>
        <ContactLink
          content='+1 (555) AXE-MINE'
          label='tel'
          url='tel:5552963463'
        />
        <ContactLink
          content='gimli@erebor.dev'
          label='email'
          url='mailto:gimli@erebor.dev'
        />
        <ContactLink
          content='Erebor, Lonely Mountain'
          label='location'
          url='https://www.google.com/maps'
        />
      </section>

      <hr className='cyber-divider mt-10' />

      {/* Experience */}
      <section className='grid gap-5 mt-10'>
        <h1 className='text-5xl heading-retro print:text-3xl'>
          Experience
        </h1>
        <Entry
          organization='Mithril Stack Technologies'
          title='Senior Full-Stack Engineer'
          duration='Third Age 3019 – Current'
          url='https://github.com'
        />
        <Entry
          organization='Erebor Cloud Services'
          title='Infrastructure & DevOps Lead'
          duration='Third Age 2941 – 3019'
          url='https://github.com'
        />
        <Entry
          organization='Khazad-dûm Deep Systems'
          title='Junior Backend Developer (Intern)'
          duration='Third Age 2800 – 2941'
          url='https://github.com'
        />
      </section>

      <hr className='cyber-divider mt-8' />

      {/* Education */}
      <section className='grid gap-5 mt-8'>
        <h1 className='text-5xl heading-retro print:text-3xl'>
          Education
        </h1>
        <Entry
          organization='The University of Erebor'
          title='B.S. Computer Science & Applied Mithril Engineering'
          duration='Third Age 2763 – 2790'
          url='https://github.com'
        />
        <Entry
          organization='Rivendell Online Academy'
          title='Certificate in Elvish-Dwarvish Cross-Cultural API Design'
          duration='Third Age 3020'
          url='https://github.com'
        />
      </section>

      <hr className='cyber-divider mt-8' />

      {/* Skills */}
      <section className='grid gap-5 mt-8'>
        <h1 className='text-5xl heading-retro print:text-3xl'>
          Skills
        </h1>

        <div className='flex flex-wrap items-center gap-2 print:text-xs'>
          {skills.map((skill, id) => (
            <div
              key={id}
              className='px-3 py-2 font-mono rounded skill-badge text-sm'
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
