import styles from './CardItems.module.css'

export default function Description({children}){
    return (
        <div className={styles.descriptionCard}>
            <span>{children}</span>
        </div>
    )
}