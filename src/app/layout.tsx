import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SITE_NAME, SITE_DESCRIPTION } from '@/constants'
import { ThemeProvider } from '@/hooks/useTheme'
import '@/styles/globals.css'
import { Navbar } from '@/components/layout/Navbar/index'
import { Footer } from '@/components/layout/Footer/index'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`min-h-screen flex flex-col ${inter.variable}`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
} 