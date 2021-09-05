export const getStaticProps = async () => {
  const res = await fetch(
    'https://api.weatherapi.com/v1/current.json?key=641a09f76e4e4dbcb2b14519210509&q=London&aqi=no'
  )
  const data = await res.json()

  return {
    props: { weather: data },
  }
}

import Head from 'next/head'

export default function Weather({ weather }) {
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
