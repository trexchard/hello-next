import Link from 'next/link'

const Header = () => (
  <header className='sticky top-0 z-50 flex justify-center p-6 shadow-md rounded-b-xl bg-white/70 dark:bg-gray-700/70 backdrop-blur-md print:shadow-none print:p-0'>
    <Link href='/'>
      <div className='inline-grid grid-cols-[auto,1fr] gap-x-4 cursor-pointer'>
        <img
          src='/profile.jpg'
          alt='Gimli, son of Glóin profile'
          className='self-center object-cover w-16 h-16 row-span-2 rounded-md shadow-md print:shadow-none'
        />
        <h1 className='text-4xl uppercase font-oswald'>Gimli, son of Glóin</h1>
        <h2 className='font-mono leading-tight opacity-80'>
          full-stack engineer &amp; axe&nbsp;enthusiast
        </h2>
      </div>
    </Link>
  </header>
)

export default Header
