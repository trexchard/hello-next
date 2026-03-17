import Head from 'next/head'
import axios from 'axios'
import { useState, useEffect } from 'react'

const baseURL = 'https://jsonplaceholder.typicode.com/posts'

export default function Blog() {
  const [posts, setPosts] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setPosts(response.data)
      })
      .catch((error) => {
        setError(error)
      })
  }, [])

  if (error) return (
    <div
      className='text-center p-8 rounded font-mono'
      style={{ color: '#ff00ff', textShadow: '0 0 6px #ff00ff', border: '1px solid rgba(255,0,255,0.3)' }}
    >
      // ERROR: {error.message}
    </div>
  )

  if (!posts) return (
    <div
      className='text-center p-8 font-orbitron tracking-widest text-sm'
      style={{ color: 'rgba(0,255,255,0.5)', textShadow: '0 0 6px rgba(0,255,255,0.3)' }}
    >
      [ LOADING TRANSMISSIONS... ]
    </div>
  )

  return (
    <>
      <Head>
        <title>Blog - Gimli, son of Glóin</title>
      </Head>
      <h1 className='text-5xl heading-retro mb-8 print:text-3xl'>Transmissions</h1>
      <div className='grid max-w-4xl gap-4 mx-auto'>
        {posts.map((post) => (
          <div key={post.id} className='p-6 rounded-md neon-card'>
            <h2
              className='text-xl uppercase font-orbitron tracking-wide mb-3'
              style={{ color: '#00ffff', textShadow: '0 0 5px rgba(0,255,255,0.5)' }}
            >
              {post.title}
            </h2>
            <p
              className='text-sm leading-relaxed font-mono'
              style={{ color: 'rgba(224, 232, 255, 0.65)' }}
            >
              {post.body} {post.body} {post.body}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}
