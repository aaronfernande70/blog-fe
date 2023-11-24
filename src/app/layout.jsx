import Footer from './components/organisms/Footer'
import Header from './components/organisms/Header'
import './globals.css'
import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'blob',
  description: 'blogs all over',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-serif">
        <Header/>
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  )
}
