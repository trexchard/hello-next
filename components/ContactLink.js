const ContactLink = (props) => {
  return (
    <a
      href='{props.href}'
      target='_blank'
      className='grid items-baseline self-start p-4 transition rounded-md gap-x-4 hover:text-black dark:hover:text-white hover:bg-gray-400/10 group print:p-2'
    >
      <small className='font-mono opacity-70'>{props.label}</small>
      <h2 className='text-xl leading-tight lowercase'>{props.content}</h2>
    </a>
  )
}
//

export default ContactLink
