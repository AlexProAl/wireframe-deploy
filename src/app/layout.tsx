import { Geist, Manrope, Montserrat } from 'next/font/google'
import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import { GlobalModal } from '@/components/modal/global-modal'
import { ModalProvider } from '@/components/modal/modal-context'
import type { Metadata } from 'next'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Homepage',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${manrope.variable} ${montserrat.variable} antialiased`}
      >
        <ModalProvider>
          <Header />

          <main className="grow">{children}</main>
          <GlobalModal />
          <Footer />
        </ModalProvider>
      </body>
    </html>
  )
}
