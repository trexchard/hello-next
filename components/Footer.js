import Nav from './Nav'

const Footer = () => (
  <footer className='sticky bottom-0 z-50 flex flex-wrap items-center justify-between px-3 pb-5 bg-white rounded-t-xl bg-white/70 dark:bg-gray-700/70 backdrop-blur-md sm:pb-0 print:shadow-none print:p-0 md:px-9 dark:bg-gray-700 print:hidden'>
    <a
      href='https://www.linkedin.com/in/calebrunion/'
      target='_blank'
      className='p-4 transition hover:text-blue-500'
    >
      <svg
        width='34'
        height='34'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 34 34'
        className='fill-current'
      >
        <title>LinkedIn</title>
        <path d='M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z' />
      </svg>
    </a>
    <a
      href='https://github.com/calebrunion'
      target='_blank'
      className='p-4 mr-auto transition hover:text-blue-500'
    >
      <svg
        width='34'
        height='34'
        viewBox='0 0 16 16'
        aria-hidden='true'
        className='fill-current'
      >
        <title>GitHub</title>
        <path
          fill-rule='evenodd'
          d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'
        />
      </svg>
    </a>

    <Nav />

    <a
      href='#'
      className='inline-flex items-center p-4 ml-auto -mr-2 text-xl uppercase transition font-oswald hover:text-blue-500 print:hidden'
    >
      Back to top
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='24'
        viewBox='0 0 24 24'
        width='24'
        className='ml-1 fill-current'
      >
        <path d='M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z' />
      </svg>
    </a>
  </footer>
)

export default Footer
