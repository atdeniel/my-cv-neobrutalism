import Header from '@/sections/header'
import Experience from '@/sections/experience'
import Education from '@/sections/education'
import Skills from '@/sections/skills'
//import Projects from '@/sections/projects'
import Contact from '@/sections/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <Experience />
      <Skills />
      <Education />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </>
  )
}
