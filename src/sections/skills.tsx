import Marquee from 'react-fast-marquee'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Lenguajes de Programación',
      skills: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'HTML', 'CSS/SCSS']
    },
    {
      title: 'Frameworks & Librerías',
      skills: ['React', 'Next.js', 'Vue.js', 'Node.js', 'Express', 'Tailwind CSS']
    },
    {
      title: 'Herramientas & Plataformas',
      skills: ['Git', 'Docker', 'AWS', 'Firebase', 'Vercel', 'Figma']
    },
    {
      title: 'Bases de Datos',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Supabase']
    }
  ]

  return (
    <div>
      <section className="border-t-border dark:border-t-darkBorder dark:bg-darkBg border-t-2 bg-bg py-20 font-base lg:py-[100px]">
        <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Habilidades Técnicas
        </h2>

        <div className="mx-auto grid w-container max-w-full grid-cols-1 gap-5 px-5 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <div
              className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark flex flex-col gap-3 rounded-base border-2 bg-white p-5"
              key={i}
            >
              <h3 className="text-xl font-heading">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <span 
                    key={j}
                    className="border-border dark:border-darkBorder inline-block rounded-base border-2 px-3 py-1 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div>
        <Marquee
          className="border-y-border dark:border-y-darkBorder dark:border-darkBorder dark:bg-secondaryBlack border-y-2 bg-white py-3 font-base sm:py-5"
          direction="left"
        >
          {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MongoDB', 'AWS', 'Docker'].map((skill, id) => (
            <div className="flex items-center" key={id}>
              <span className="mx-8 text-xl font-heading sm:text-2xl lg:text-4xl">
                {skill}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
} 
