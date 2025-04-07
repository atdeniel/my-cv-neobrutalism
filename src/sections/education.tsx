'use client'

import { useLanguage } from '@/lib/LanguageContext'

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export default function Education() {
  const { t } = useLanguage()

  const studies = t('education', 'studies') as Education[]

  return (
    <section className="border-t-border dark:border-t-darkBorder dark:bg-darkBg border-t-2 bg-bg py-20 font-base lg:py-[100px]">
      <div className="mx-auto w-container max-w-full px-5">
        <h2 className="mb-14 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          {t('education', 'title')}
        </h2>

        <div className="flex flex-col gap-8">
          {studies.map((study, i) => (
            <div
              className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark flex flex-col gap-3 rounded-base border-2 bg-white p-5"
              key={i}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-heading">{study.degree}</h3>
                <span className="text-sm font-medium">{study.period}</span>
              </div>
              <h4 className="text-lg font-medium">{study.institution}</h4>
              <p className="text-xs">{study.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
