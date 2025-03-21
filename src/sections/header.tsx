'use client'

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/LanguageContext'

export default function Header() {
  const { t } = useLanguage()

  return (
    <header className="dark:bg-secondaryBlack inset-0 flex min-h-[80dvh] w-full flex-col items-center justify-center bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <div className="mx-auto w-container max-w-full px-5 py-[110px] text-center lg:py-[150px]">
        <h1 className="text-3xl font-heading md:text-4xl lg:text-5xl">
          {t('header', 'name')}
        </h1>
        <h2 className="mt-4 text-xl font-heading md:text-2xl lg:text-3xl">
          {t('header', 'job')}
        </h2>
        <p className="my-12 mt-8 text-lg font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed">
          {t('header', 'description')}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="h-12 text-base font-heading md:text-lg lg:h-14 lg:text-xl"
            asChild
          >
            <a href="mailto:tuemail@ejemplo.com">{t('header', 'contact')}</a>
          </Button>
          <Button
            size="lg"
            variant="neutral"
            className="h-12 text-base font-heading md:text-lg lg:h-14 lg:text-xl"
            asChild
          >
            <a href="#" download>{t('header', 'download')}</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
