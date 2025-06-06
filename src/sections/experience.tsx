'use client'

import { useLanguage } from '@/lib/LanguageContext'

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export default function Experience() {
  const { t } = useLanguage()

  const experiences = t('experience', 'experiences') as Experience[]

  return (
    <section className="border-t-border dark:border-t-darkBorder dark:bg-darkBg border-t-2 bg-bg py-20 font-base lg:py-[100px]">
      <div className="mx-auto w-container max-w-full px-5">
        <h2 className="mb-14 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          {t('experience', 'title')}
        </h2>

        <div className="flex flex-col gap-8">
          {experiences.map((experience, i) => (
            <div
              className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark flex flex-col gap-3 rounded-base border-2 bg-white p-5"
              key={i}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-heading">{experience.title}</h3>
                <span className="text-sm font-medium">{experience.period}</span>
              </div>
              <h4 className="text-lg font-medium">{experience.company}</h4>
              <ul className="list-disc pl-4 space-y-2">
                {Array.isArray(experience.description) 
                  ? experience.description.map((item, index) => (
                      <li key={index} className="text-base text-justify">{item}</li>
                    ))
                  : <li className="text-base text-justify">{experience.description}</li>
                }
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
