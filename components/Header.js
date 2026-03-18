import Link from 'next/link'

const Header = () => (
  <header
    className='sticky top-0 z-50 flex justify-center p-6 print:shadow-none print:p-0'
    style={{
      background: 'rgba(10, 10, 10, 0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(0, 255, 255, 0.25)',
      boxShadow: '0 2px 20px rgba(0, 255, 255, 0.12), 0 0 40px rgba(0, 255, 255, 0.04)',
    }}
  >
    <Link href='/'>
      <div className='inline-grid grid-cols-[auto,1fr] gap-x-4 cursor-pointer group'>
        <img
          src='/profile.jpg'
          alt='Gimli, son of Glóin profile'
          className='self-center object-cover w-16 h-16 row-span-2 rounded-md print:shadow-none'
          style={{
            border: '1px solid rgba(0, 255, 255, 0.4)',
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)',
          }}
        />
        <h1
          className='text-4xl uppercase font-orbitron tracking-widest'
          style={{
            color: '#00ffff',
            textShadow: '0 0 7px #00ffff, 0 0 14px #00ffff',
          }}
        >
          Gimli, son of Glóin
        </h1>
        <h2
          className='font-mono leading-tight tracking-wider'
          style={{ color: 'rgba(0, 255, 255, 0.6)' }}
        >
          full-stack engineer &amp; axe&nbsp;enthusiast
        </h2>
      </div>
    </Link>
  </header>
)

export default Header
