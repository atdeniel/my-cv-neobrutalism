import { Button } from '@/components/ui/button'

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración. Desarrollada con Next.js, MongoDB y Stripe.',
      tags: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      link: 'https://github.com/username/ecommerce-platform',
    },
    {
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con funcionalidades de arrastrar y soltar, etiquetas personalizadas y colaboración en tiempo real. Construida con React, Firebase y React DnD.',
      tags: ['React', 'Firebase', 'React DnD', 'CSS Modules'],
      link: 'https://github.com/username/task-management-app',
    },
    {
      title: 'Portfolio Website',
      description: 'Sitio web de portfolio personal con diseño neobrutalism, animaciones suaves y modo oscuro. Implementado con Next.js y Tailwind CSS.',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://github.com/username/portfolio-website',
    },
    {
      title: 'Weather Dashboard',
      description: 'Dashboard de clima que muestra pronósticos actuales y futuros con visualizaciones de datos. Utiliza OpenWeather API y Chart.js para gráficos.',
      tags: ['JavaScript', 'Chart.js', 'API Integration', 'CSS Grid'],
      link: 'https://github.com/username/weather-dashboard',
    },
  ]

  return (
    <section className="border-t-border dark:border-t-darkBorder dark:bg-darkBg border-t-2 bg-bg py-20 font-base lg:py-[100px]">
      <div className="mx-auto w-container max-w-full px-5">
        <h2 className="mb-14 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Proyectos Destacados
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <div
              className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark flex h-full flex-col gap-3 rounded-base border-2 bg-white p-5"
              key={i}
            >
              <h3 className="text-xl font-heading">{project.title}</h3>
              <p className="flex-grow text-base">{project.description}</p>
              <div className="flex flex-wrap gap-2 py-2">
                {project.tags.map((tag, j) => (
                  <span 
                    key={j}
                    className="border-border dark:border-darkBorder inline-block rounded-base border-2 px-2 py-1 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button
                variant="neutral"
                size="sm"
                className="mt-2 w-full font-heading"
                asChild
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Ver Proyecto
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
