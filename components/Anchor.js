const Anchor = ({ children, href, target = '_blank' }) => (
  <a href={href} target={target} className='neon-link'>
    {children}
  </a>
)

export default Anchor
