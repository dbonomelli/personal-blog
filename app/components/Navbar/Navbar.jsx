import Link from "next/link"
import styles from './Navbar.module.css'
const links = [
    {label: 'Inicio', route: '/'},
    {label: 'Lenguajes', route: 'languages'},
    {label: 'Proyectos', route: 'projects'}
]

export default function Navbar(){
    return(
        <header className={styles.header}>
            <nav>
                <ul className={styles.navbar}>
                    <span>Bienvenidos</span>
                </ul>
            </nav>
        </header>

    )
}