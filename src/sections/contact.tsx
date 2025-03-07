import { Button } from '@/components/ui/button'

export default function Contact() {
  const contactInfo = [
    {
      title: 'Email',
      value: 'tuemail@ejemplo.com',
      link: 'mailto:tuemail@ejemplo.com',
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/tunombre',
      link: 'https://linkedin.com/in/tunombre',
    },
    {
      title: 'GitHub',
      value: 'github.com/username',
      link: 'https://github.com/username',
    },
    {
      title: 'Twitter',
      value: '@username',
      link: 'https://twitter.com/username',
    },
  ]

  return (
    <section className="border-t-border dark:border-t-darkBorder dark:bg-darkBg border-t-2 bg-bg py-20 font-base lg:py-[100px]">
      <div className="mx-auto w-container max-w-full px-5">
        <h2 className="mb-14 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Contacto
        </h2>

        <div className="mx-auto max-w-2xl">
          <div className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark rounded-base border-2 bg-white p-5">
            <p className="mb-8 text-center text-lg">
              ¿Interesado en trabajar juntos? ¡Contáctame a través de cualquiera de estos canales!
            </p>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contactInfo.map((contact, i) => (
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                  className="border-border dark:border-darkBorder hover:shadow-light dark:hover:shadow-dark flex flex-col items-center rounded-base border-2 p-4 transition-all hover:translate-x-[-4px] hover:translate-y-[-4px]"
                >
                  <h3 className="text-lg font-heading">{contact.title}</h3>
                  <p className="text-base">{contact.value}</p>
                </a>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                size="lg"
                className="h-12 text-base font-heading md:text-lg lg:h-14 lg:text-xl"
                asChild
              >
                <a href="mailto:tuemail@ejemplo.com">Enviar Mensaje</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
