export default function Footer() {
  return (
    <footer className="m500:text-sm dark:bg-secondaryBlack z-30 bg-white px-5 py-5 text-center font-base">
      © {new Date().getFullYear()} Tu Nombre Completo. Todos los derechos reservados.
      <br />
      Diseñado con ❤️ utilizando Next.js y Neobrutalism.
    </footer>
  )
}
