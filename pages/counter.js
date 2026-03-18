import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../app/counterSlice'


export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='text-center select-none'>
      <Head>
        <title>Counter - Gimli, son of Glóin</title>
      </Head>
      <h1 className='text-5xl heading-retro print:text-3xl'>Counter</h1>
      <div className='inline-flex items-center mt-12 gap-6'>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
          className='inline-flex items-center justify-center w-14 h-14 rounded neon-btn-magenta'
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

        <em
          className='inline-flex justify-center w-28 select-all text-7xl font-orbitron'
          style={{
            color: '#00ffff',
            textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px rgba(0,255,255,0.5)',
          }}
        >
          {count}
        </em>

        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
          className='inline-flex items-center justify-center w-14 h-14 rounded neon-btn'
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
