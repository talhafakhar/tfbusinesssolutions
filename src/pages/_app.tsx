import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Righteous, Seymour_One } from 'next/font/google'
import { useEffect, useState } from 'react'
import GlobalLoading from '@/components/Common/GlobalLoading'

const righteous = Righteous({
  subsets: ['latin'],
  variable: '--font-righteous',
  weight: ['400'],
})

const seymourOne = Seymour_One({
  subsets: ['latin'],
  variable: '--font-seymour',
  weight: '400',
})

export default function App({ Component, pageProps }: AppProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isShow, setIsShow] = useState(true)
  const [showSpinner, setShowSpinner] = useState(true)

  useEffect(() => {
    const first = setTimeout(() => {
      setIsShow(false)
    }, 2500)

    return () => {
      clearTimeout(first)
    }
  }, [])

  const handleSpinnerAnimationEnd = () => {
    setShowSpinner(false)
    setTimeout(() => {
      setIsVisible(true)
    }, 300)
  }

  if (showSpinner) {
    return <GlobalLoading isVisible={isShow} onAnimationEnd={handleSpinnerAnimationEnd} />
  }

  return (
      <div className={`${righteous.variable} ${seymourOne.variable}`}>
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Component {...pageProps} />
        </div>
      </div>
  )
}
