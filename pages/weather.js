import Head from 'next/head'

export default function Weather() {
  return (
    <>
      <Head>
        <title>Weather - Caleb Runion</title>
      </Head>
      <h1 className='text-5xl text-center uppercase font-oswald print:text-3xl'>
        Weather
      </h1>
    </>
  )
}
