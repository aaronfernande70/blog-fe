import { Providers } from '@/provider'
import Header from './components/organisms/Header'
import './globals.css'
import Head from 'next/head'


export const metadata = {
  title: 'blob',
  description: 'blogs all over',
}

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <head>
        <meta name="mobile-web-app-capable" content="yes"></meta>
      </head>
      <body className="font-serif">
        <Header/>
        {children}
        {/* <Footer/> */}
      </body>
    </html>

  )
}
