import { Providers } from '@/provider'
import Header from './components/organisms/Header'
import './globals.css'


export const metadata = {
  title: 'blob',
  description: 'blogs all over',
}

export default function RootLayout({ children }) {
  return (
    <Providers>

    <html lang="en">
      <body className="font-serif">
        <Header/>
        {children}
        {/* <Footer/> */}
      </body>
    </html>
    </Providers>

  )
}
