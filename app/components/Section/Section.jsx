import styles from './Section.module.css'

export default function Section(){
    return (
        <div className={styles.section}>
            <div className={styles.infosection}>
                <div className={styles.info}>1</div>
                <div className={styles.info}>2</div>
                <div className={styles.info}>3</div>
            </div>
            <div className={styles.photosection}>
                <div className={styles.photo}></div>
            </div>
        </div>
    )
}