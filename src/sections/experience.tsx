export default function Experience() {
  const experiences = [
    {
      title: 'Desarrollador Full Stack Senior',
      company: 'Empresa Tecnológica S.A.',
      period: 'Enero 2021 - Presente',
      description: 'Desarrollo de aplicaciones web utilizando React, Next.js y Node.js. Implementación de arquitecturas escalables y mantenimiento de sistemas existentes. Colaboración con equipos de diseño y producto para crear experiencias de usuario excepcionales.',
    },
    {
      title: 'Desarrollador Front-end',
      company: 'Agencia Digital',
      period: 'Marzo 2018 - Diciembre 2020',
      description: 'Creación de interfaces de usuario responsivas y accesibles. Implementación de diseños utilizando HTML, CSS y JavaScript. Optimización del rendimiento de aplicaciones web y colaboración en proyectos de e-commerce.',
    },
    {
      title: 'Desarrollador Web Junior',
      company: 'Startup Innovadora',
      period: 'Junio 2016 - Febrero 2018',
      description: 'Desarrollo de componentes de interfaz de usuario. Mantenimiento de sitios web existentes y colaboración en la implementación de nuevas funcionalidades.',
    },
  ]

  return (
    <section className="border-t-border dark:border-t-darkBorder dark:bg-darkBg border-t-2 bg-bg py-20 font-base lg:py-[100px]">
      <div className="mx-auto w-container max-w-full px-5">
        <h2 className="mb-14 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Experiencia Laboral
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
              <p className="text-base">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
