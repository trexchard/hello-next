import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])

  return (
    <div className='text-center py-12'>
      <h1
        className='mb-6 text-8xl font-orbitron glitch-text print:text-3xl'
        data-text='404'
        style={{
          color: '#ff00ff',
          textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff',
        }}
      >
        404
      </h1>
      <p
        className='text-2xl font-orbitron uppercase tracking-widest mb-2'
        style={{ color: '#00ffff', textShadow: '0 0 7px #00ffff' }}
      >
        Signal Lost
      </p>
      <p
        className='font-mono text-sm mb-8'
        style={{ color: 'rgba(224, 232, 255, 0.4)' }}
      >
        // Page not found. Redirecting to base in 3s...
      </p>
      <Link href='/'>
        <a className='neon-btn px-6 py-3 rounded text-sm'>
          Return to Base
        </a>
      </Link>
    </div>
  )
}

export default NotFound
