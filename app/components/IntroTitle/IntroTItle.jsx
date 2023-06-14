import styles from './IntroTItle.module.css'

export default function IntroTitle( {children }) {
    return (
        <div className={styles.introstyle}>
            <span>{children}</span>
        </div>
    )
}