const Anchor = ({ children, href, target = '_blank' }) => (
  <a href={href} target={target} className='text-blue-400 hover:underline'>
    {children}
  </a>
)

export default Anchor
