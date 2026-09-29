import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='smooth-scroll'>
      <body>{children}</body>
    </html>
  )
}