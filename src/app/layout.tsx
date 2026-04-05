import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Psychology Portfolio',
  description: 'A modern portfolio showcasing psychology research and projects',
  openGraph: {
    title: 'Psychology Portfolio',
    description: 'Explore research, projects, and insights on psychology',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-grow max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
