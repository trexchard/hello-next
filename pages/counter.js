import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../app/counterSlice'


export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='text-center select-none'>
      <Head>
        <title>Counter - Caleb Runion</title>
      </Head>
      <h1 className='text-5xl uppercase font-oswald print:text-3xl'>Counter</h1>
      <div className='inline-flex items-center mt-8 '>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
          className='inline-flex items-center justify-center w-12 h-12 mr-5 text-3xl transition bg-gray-400 rounded-full bg-opacity-10 hover:bg-opacity-20'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M20 12H4'
            />
          </svg>
        </button>
        <em className='inline-flex justify-center w-24 select-all text-7xl'>
          {count}
        </em>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
          className='inline-flex items-center justify-center w-12 h-12 ml-8 text-3xl transition bg-gray-400 rounded-full bg-opacity-10 hover:bg-opacity-20'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 4v16m8-8H4'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}