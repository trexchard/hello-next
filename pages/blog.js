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
  })

  if (error) return `Error: ${error.message}`
  if (!posts) return null

  return (
    <>
      <Head>
        <title>Blog - Caleb Runion</title>
      </Head>
      <div className='grid max-w-4xl gap-4 mx-auto'>
        {posts.map((post) => (
          <div key={post.id} className='p-6 bg-gray-400/10 rounded-xl'>
            <h2 className='text-3xl uppercase'>{post.title}</h2>
            <p className='mt-2'>
              {post.body} {post.body} {post.body}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}
