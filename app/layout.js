import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import style from "./globals.css"


export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="es">
      <body className={style.body}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
