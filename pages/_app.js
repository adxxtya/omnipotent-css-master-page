import Head from 'next/head'
import '../styles/globals.css'
import '../styles/slider.css'
import '../styles/card.css'
import '../styles/cardHover.css'
import '../styles/CardHoverAppear.css'

function MyApp({ Component, pageProps }) {
  return (
    <><Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap"
        rel="stylesheet" />

    </Head><Component {...pageProps} /></>
  )
}

export default MyApp
