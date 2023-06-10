import Link from "next/link"
import styles from '../../styles/Navbar.module.css'
const links = [
    {label: 'Inicio', route: '/'},
    {label: 'Lenguajes', route: 'languages'}
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