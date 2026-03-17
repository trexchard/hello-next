const ContactLink = ({ label, content, url }) => (
  <a
    href={url}
    target='_blank'
    className='grid items-baseline self-start p-4 transition rounded gap-x-4 group print:p-2 neon-card'
  >
    <small
      className='font-mono uppercase tracking-widest text-xs'
      style={{ color: 'rgba(0, 255, 255, 0.45)' }}
    >
      {label}
    </small>
    <h2
      className='text-xl leading-tight lowercase font-rajdhani'
      style={{ color: 'rgba(224, 232, 255, 0.9)' }}
    >
      {content}
    </h2>
  </a>
)

export default ContactLink
