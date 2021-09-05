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
    <div className='text-center'>
      <h1 className='mb-4 text-5xl uppercase font-oswald print:text-3xl'>
        Page Not Found
      </h1>
      <Link href='/'>Go Back Home</Link>
    </div>
  )
}

export default NotFound
