export default function Education() {
  const educations = [
    {
      degree: 'Máster en Ingeniería de Software',
      institution: 'Universidad Tecnológica',
      period: '2014 - 2016',
      description: 'Especialización en desarrollo web y arquitectura de software. Proyecto final sobre optimización de rendimiento en aplicaciones React.',
    },
    {
      degree: 'Licenciatura en Ciencias de la Computación',
      institution: 'Universidad Nacional',
      period: '2010 - 2014',
      description: 'Formación en fundamentos de programación, algoritmos, estructuras de datos y desarrollo de software.',
    },
    {
      degree: 'Certificación en Desarrollo Web Full Stack',
      institution: 'Academia de Código',
      period: '2013',
      description: 'Programa intensivo de 12 semanas enfocado en tecnologías web modernas y metodologías ágiles.',
    },
  ]

  return (
    <section className="border-t-border dark:border-t-darkBorder dark:bg-darkBg border-t-2 bg-bg py-20 font-base lg:py-[100px]">
      <div className="mx-auto w-container max-w-full px-5">
        <h2 className="mb-14 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Educación
        </h2>

        <div className="flex flex-col gap-8">
          {educations.map((education, i) => (
            <div
              className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark flex flex-col gap-3 rounded-base border-2 bg-white p-5"
              key={i}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-heading">{education.degree}</h3>
                <span className="text-sm font-medium">{education.period}</span>
              </div>
              <h4 className="text-lg font-medium">{education.institution}</h4>
              <p className="text-base">{education.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
