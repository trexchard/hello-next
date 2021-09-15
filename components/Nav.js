import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', route: '/' },
  { label: 'Weather', route: '/weather' },
  { label: 'Counter', route: '/counter' }
]

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='absolute inset-x-0 flex justify-center -mt-12'>
        <button
          onClick={() => setOpen(!open)}
          className={`shadow-md rounded-lg p-2 select-none transition backdrop-blur-md bg-purple-200 bg-opacity-20 hover:bg-opacity-30`}
        >
          {open ? 'hide' : 'show'} nav
        </button>
      </div>
      <nav
        className={`order-first w-full ${
          open ? '' : 'opacity-0 pointer-events-none'
        } p-3 mx-auto overflow-x-auto transition text-center sm:order-none sm:w-auto`}
      >
        {navLinks.map((item, index) => (
          <Link key={index} href={item.route}>
            <a>{item.label}</a>
          </Link>
        ))}
      </nav>
    </>
  )
}

export default Nav
