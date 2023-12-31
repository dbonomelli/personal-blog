
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"

import style from "./globals.css"


export const metadata = {
  title: '¡Bienvenidos!',
  description: 'Generated by Next.js',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="es">
      <body className={style.body}>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
