import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageSwitcher } from '@/components/language-switcher'
import { LanguageProvider } from '@/lib/LanguageContext'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'J. Daniel Moros – Fullstack Developer',
  description: 'Ingeniero de Software con más de 7 años de experiencia en desarrollo fullstack, especializado en Python (Django/FastAPI), Java (Spring), React y AWS. Experto en arquitecturas cloud, bases de datos SQL/NoSQL y desarrollo de aplicaciones web escalables. Conoce mis proyectos, experiencia y habilidades técnicas.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: 'J. Daniel Moros' }],
  openGraph: {
    title: 'J. Daniel Moros – Fullstack Developer',
    description: 'Ingeniero de Software con más de 7 años de experiencia en desarrollo fullstack, especializado en Python (Django/FastAPI), Java (Spring), React y AWS. Experto en arquitecturas cloud, bases de datos SQL/NoSQL y desarrollo de aplicaciones web escalables.',
    type: 'website',
    url: 'https://itdeniel.com',
    images: [
      {
        url: 'https://itdeniel.com/preview-cv.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <LanguageProvider>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            {children}
            <ThemeSwitcher />
            <LanguageSwitcher />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
