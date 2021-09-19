import Head from 'next/head'
import axios from 'axios'
import { useState, useEffect } from 'react'

const baseURL = 'https://jsonplaceholder.typicode.com/posts/1'

export default function Blog() {
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
    })
  })

  if (!post) return null
  return (
    <>
      <Head>
        <title>Blog - Caleb Runion</title>
      </Head>
      <div className='grid gap-4'>
        <div className='p-6 bg-gray-400/10 rounded-xl'>
          <h1 className='text-3xl uppercase'>{post.title}</h1>
          <p className='mt-4'>
            {post.body} {post.body} {post.body}
          </p>
        </div>
      </div>
    </>
  )
}
