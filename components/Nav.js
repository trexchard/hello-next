import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const navLinks = [
  { label: 'Home', route: '/' },
  { label: 'Weather', route: '/weather' },
  { label: 'Counter', route: '/counter' }
]

const Nav = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    document.title = open ? 'Nav: open' : 'Nav: closed'
  }, [open])

  return (
    <>
      <div
        className={`absolute inset-x-0 flex justify-center transition z-[-1] ${
          open && '-translate-y-full'
        }`}
      >
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
            <a
              className={`rounded-md transition p-2 px-3  ${
                router.pathname === item.route
                  ? 'text-blue-400'
                  : 'hover:bg-purple-300/10'
              }`}
            >
              {item.label}
            </a>
          </Link>
        ))}
      </nav>
    </>
  )
}

export default Nav