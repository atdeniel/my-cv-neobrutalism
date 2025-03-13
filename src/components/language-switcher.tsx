'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const LOCALES = {
    SPANISH: 'es',
    ENGLISH: 'en'
}

export function LanguageSwitcher() {
    const [currentLocale, setCurrentLocale] = useState(LOCALES.ENGLISH)

    const nextLocale = currentLocale === LOCALES.SPANISH ? LOCALES.ENGLISH : LOCALES.SPANISH

    const handleLanguageSwitch = () => {
        setCurrentLocale(nextLocale)
    }

    return (
        <Button
            size="icon"
            className="fixed text-base font-heading right-28 top-10 z-50"
            onClick={handleLanguageSwitch}
        >
            <Link
                href='/'
                locale={nextLocale}
            >
                {nextLocale.toUpperCase()}
            </Link>
            <span className="sr-only">Cambiar idioma</span>
        </Button>
    )
}
