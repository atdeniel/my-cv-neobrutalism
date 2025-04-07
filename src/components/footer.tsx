export default function Footer() {
  return (
    <footer className="m500:text-sm dark:bg-secondaryBlack z-30 bg-white px-5 py-5 text-center font-base">
      © {new Date().getFullYear()} Your Name. All rights reserved.
      <br />
      Designed with ❤️ using Next.js and Neobrutalism.
    </footer>
  )
}
