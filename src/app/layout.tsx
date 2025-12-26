import { Geist } from 'next/font/google'
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
      <body className={`${geistSans.variable} antialiased`}>
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
