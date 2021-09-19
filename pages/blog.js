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
    <div className='grid gap-4 text-center'>
      <Head>
        <title>Blog - Caleb Runion</title>
      </Head>
    </div>
  )
}
