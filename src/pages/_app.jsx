import 'focus-visible'
import '@/styles/tailwind.css'
import { useState } from 'react'
import AppContext from '../AppContext'
import { Products } from './../../data'
function MyApp({ Component, pageProps }) {
  const [products, setProducts] = useState(Products)
  return (
    <AppContext.Provider value={{ products, setProducts }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
