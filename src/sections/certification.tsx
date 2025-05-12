'use client'

import { useLanguage } from '@/lib/LanguageContext'

interface Certification {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export default function Certification() {
  const { t } = useLanguage()

  const certifications = t('certification', 'certifications') as Certification[]

  return (
    <div>
      <section className="border-t-border dark:border-t-darkBorder dark:bg-darkBg border-t-2 bg-bg py-20 font-base lg:py-[100px]">
        <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          {t('certification', 'title')}
        </h2>

        <div className="mx-auto grid w-container max-w-full grid-cols-1 gap-5 px-5 sm:grid-cols-2">
          {certifications.map((certification, i) => (
            <div
              className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark flex flex-col gap-3 rounded-base border-2 bg-white p-5"
              key={i}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-heading">{certification.degree}</h3>
                <span className="text-sm font-medium">{certification.period}</span>
              </div>
              <h4 className="text-lg font-medium">{certification.institution}</h4>
              <p className="text-xs text-justify">{certification.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}