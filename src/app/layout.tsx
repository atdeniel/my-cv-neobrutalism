import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { ThemeSwitcher } from '@/components/theme-switcher'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageSwitcher } from '@/components/language-switcher'
import { LanguageProvider } from '@/lib/LanguageContext'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JDM CV',
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
