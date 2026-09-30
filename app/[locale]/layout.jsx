import '@/styles/globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Navbar from './components/navbar'

export default async function RootLayout({ children, params }) {
  const {locale} = await params

  if (!routing.locales.includes(locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className='smooth-scroll'>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar/>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}