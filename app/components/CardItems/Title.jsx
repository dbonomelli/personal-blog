import styles from './CardItems.module.css'

export default function Title({children}){
    return (
        <div className={styles.titleCard}>
            <span>{children}</span>
        </div>
    )
}