const Entry = (props) => {
  return (
    <div>
      <a
        href='{props.href}'
        target='_blank'
        className='inline-flex items-center gap-2 text-2xl transition hover:text-blue-500 print:text-lg'
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
        {props.organization}
      </a>
      <p className='leading-snug opacity-50'>
        {props.title}, {props.duration}
      </p>
    </div>
  )
}

export default Entry
