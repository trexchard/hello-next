import Head from 'next/head'


export const getStaticProps = async () => {
  const res = await fetch(
    'https://api.weatherapi.com/v1/current.json?key=641a09f76e4e4dbcb2b14519210509&q=London&aqi=no'
  )
  const data = await res.json()

  return {
    props: { weather: data },
  }
}


export default function Weather({ weather }) {
  return (
    <div className='grid gap-6 text-center'>
      <Head>
        <title>Weather - Gimli, son of Glóin</title>
      </Head>
      <h1 className='text-5xl text-center heading-retro print:text-3xl'>
        Weather API
      </h1>

      <div
        className='inline-block mx-auto px-10 py-6 rounded-md mt-4'
        style={{
          background: 'rgba(0, 255, 255, 0.03)',
          border: '1px solid rgba(0, 255, 255, 0.2)',
          boxShadow: '0 0 20px rgba(0,255,255,0.1), inset 0 0 20px rgba(0,255,255,0.02)',
        }}
      >
        <em
          className='text-7xl font-orbitron not-italic'
          style={{
            color: '#00ffff',
            textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px rgba(0,255,255,0.5)',
          }}
        >
          {weather.current.temp_f}
          <span className='text-4xl ml-1' style={{ color: 'rgba(0,255,255,0.6)' }}>ºF</span>
        </em>
      </div>

      <p className='text-lg' style={{ color: 'rgba(224, 232, 255, 0.8)' }}>
        It&apos;s{' '}
        <strong
          className='lowercase mx-1.5 font-rajdhani'
          style={{ color: '#ff00ff', textShadow: '0 0 6px #ff00ff' }}
        >
          {weather.current.condition.text}
        </strong>
        in
        <i className='ml-1.5' style={{ color: 'rgba(0,255,255,0.7)' }}>
          {weather.location.name}, {weather.location.country}
        </i>
      </p>

      <code
        className='text-xs font-mono uppercase tracking-widest'
        style={{ color: 'rgba(224, 232, 255, 0.3)' }}
      >
        // last_updated: {weather.current.last_updated}
      </code>
    </div>
  )
}
