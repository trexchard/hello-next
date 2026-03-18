const Entry = ({ organization, title, duration, url }) => (
  <div
    className='p-4 rounded transition'
    style={{
      borderLeft: '2px solid rgba(0, 255, 255, 0.3)',
      paddingLeft: '1.25rem',
      transition: 'border-color 0.2s ease',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderLeftColor = '#00ffff'
      e.currentTarget.style.boxShadow = '-4px 0 12px rgba(0, 255, 255, 0.15)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderLeftColor = 'rgba(0, 255, 255, 0.3)'
      e.currentTarget.style.boxShadow = 'none'
    }}
  >
    <a
      href={url}
      target='_blank'
      className='inline-flex items-center gap-2 text-2xl transition print:text-lg font-rajdhani'
      style={{ color: 'rgba(224, 232, 255, 0.9)' }}
      onMouseEnter={e => {
        e.currentTarget.style.color = '#00ffff'
        e.currentTarget.style.textShadow = '0 0 6px #00ffff'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.color = 'rgba(224, 232, 255, 0.9)'
        e.currentTarget.style.textShadow = 'none'
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='24px'
        viewBox='0 0 24 24'
        width='24px'
        className='fill-current rotate-[-45deg] print:hidden'
      >
        <path d='M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z' />
      </svg>
      {organization}
    </a>
    <p className='leading-snug mt-1 font-mono text-sm' style={{ color: 'rgba(224, 232, 255, 0.4)' }}>
      {title}, {duration}
    </p>
  </div>
)

export default Entry
