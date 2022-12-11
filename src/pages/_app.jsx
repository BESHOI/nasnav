import 'modern-normalize/modern-normalize.css'
import '../styles/Globals.scss'
import { useState } from 'react'
import clsx from 'clsx'
import Footer from '../components/Footer'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  const [cartData, setCartData] = useState([])
  const [isOverlay, setIsOverlay] = useState(false)

  return (
    <div className="regular">
      <div className={clsx(isOverlay ? 'overlay' : null)} />
      <Header cart={cartData} setCart={setCartData} setOverlay={setIsOverlay} />
      <main>
        <Component {...pageProps} cart={cartData} setCart={setCartData} />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
