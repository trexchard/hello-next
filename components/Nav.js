import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const navLinks = [
  { label: 'Home', route: '/' },
  { label: 'Weather', route: '/weather' },
  { label: 'Counter', route: '/counter' },
  { label: 'Blog', route: '/blog' }
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
          className='rounded p-2 select-none transition text-xs uppercase tracking-widest font-orbitron'
          style={{
            background: 'rgba(10, 10, 10, 0.85)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(0, 255, 255, 0.35)',
            color: open ? '#00ffff' : 'rgba(0, 255, 255, 0.6)',
            boxShadow: open
              ? '0 0 10px rgba(0,255,255,0.3), 0 0 20px rgba(0,255,255,0.1)'
              : '0 0 5px rgba(0,255,255,0.1)',
            textShadow: open ? '0 0 6px #00ffff' : 'none',
          }}
        >
          {open ? '[ close nav ]' : '[ open nav ]'}
        </button>
      </div>
      <nav
        className={`order-first w-full ${
          open ? '' : 'opacity-0 pointer-events-none'
        } p-3 mx-auto overflow-x-auto transition text-center sm:order-none sm:w-auto`}
      >
        {navLinks.map((item, index) => {
          const isActive = router.pathname === item.route
          return (
            <Link key={index} href={item.route}>
              <a
                className='rounded p-2 px-4 mx-1 text-sm uppercase tracking-widest font-orbitron transition'
                style={{
                  color: isActive ? '#00ffff' : 'rgba(0, 255, 255, 0.55)',
                  textShadow: isActive ? '0 0 6px #00ffff, 0 0 12px #00ffff' : 'none',
                  border: isActive
                    ? '1px solid rgba(0, 255, 255, 0.5)'
                    : '1px solid transparent',
                  boxShadow: isActive
                    ? '0 0 8px rgba(0,255,255,0.2), inset 0 0 8px rgba(0,255,255,0.05)'
                    : 'none',
                  background: isActive ? 'rgba(0,255,255,0.05)' : 'transparent',
                }}
              >
                {item.label}
              </a>
            </Link>
          )
        })}
      </nav>
    </>
  )
}

export default Nav
