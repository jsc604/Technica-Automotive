import Script from 'next/script';
import './globals.css'
import Header from './Header'
import Footer from './Footer';
import { Inconsolata } from 'next/font/google';

const inconsolata = Inconsolata({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['monospace', 'arial']
})

export const metadata = {
  title: 'Technica Automotive',
  description: 'Automotive Detailing, Paint Correction, and Ceramic Coating',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inconsolata.className}>
      <Script src="https://kit.fontawesome.com/01f54e04b1.js" />
      <body className=''>
        <Header />
        {children}
      <Footer />
      </body>
    </html>
  )
}
