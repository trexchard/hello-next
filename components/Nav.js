import Link from 'next/link'

const Nav = () => {
  return (
    <nav className='order-first w-full p-3 mx-auto overflow-x-auto text-center sm:order-none sm:w-auto'>
      <Link href='/'>Home</Link>
      <span className='mx-3'>•</span>
      <Link href='/weather'>Weather</Link>
      <span className='mx-3'>•</span>
      <Link href='/weather'>Videos</Link>
    </nav>
  )
}

export default Nav