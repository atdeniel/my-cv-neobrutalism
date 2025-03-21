'use client'

import { Button } from '@/components/ui/button'
import { useLanguage, LOCALES } from '@/lib/LanguageContext'

export function LanguageSwitcher() {
    const { currentLocale, setLocale } = useLanguage()

    const nextLocale = currentLocale === LOCALES.SPANISH ? LOCALES.ENGLISH : LOCALES.SPANISH

    const handleLanguageSwitch = () => {
        setLocale(nextLocale)
    }

    return (
        <Button
            size="icon"
            className="fixed text-base font-heading right-28 top-10 z-50"
            onClick={handleLanguageSwitch}
        >
            {nextLocale.toUpperCase()}
            <span className="sr-only">Cambiar idioma</span>
        </Button>
    )
}
