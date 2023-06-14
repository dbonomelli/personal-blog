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
                    {links.map(({label, route}) => (
                        <li key={label}>
                            <Link href={route}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>

    )
}