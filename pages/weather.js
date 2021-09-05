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
    <div className='grid gap-4 text-center'>
      <Head>
        <title>Weather - Caleb Runion</title>
      </Head>
      <h1 className='text-5xl text-center uppercase font-oswald print:text-3xl'>
        Weather API
      </h1>
      <em className='mt-6 text-7xl'>{weather.current.temp_f} ºF</em>
      <p>
        It's{' '}
        <strong className='lowercase'>{weather.current.condition.text}</strong>{' '}
        in{' '}
        <i>
          {weather.location.name}, {weather.location.country}
        </i>
      </p>
      <code className='text-sm opacity-50'>
        Last Updated: {weather.current.last_updated}
      </code>
    </div>
  )
}
