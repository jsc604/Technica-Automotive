import './globals.css'
import Header from './Header'

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
    <html lang="en">
      <body className=''>
        <Header />
        {children}
      </body>
    </html>
  )
}
