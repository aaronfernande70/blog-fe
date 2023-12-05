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
      <Head>
        <title>
          blog site
        </title>
        {/* <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        /> */}
      <meta name="mobile-web-app-capable" content="yes"></meta>

      </Head>
      <body className="font-serif">
        <Header/>
        {children}
        {/* <Footer/> */}
      </body>
    </html>

  )
}
