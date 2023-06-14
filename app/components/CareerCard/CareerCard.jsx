import Title from "../CardItems/Title";
import Description from "../CardItems/Description";
import styles from './CareerCard.module.css'


export default function CareerCard({title, description, year, direction}){
    const className = `${styles[direction]}`
    return (
        <div className={styles.block}>
            <div className={styles.date}>
                <span> {year} </span>
            </div>
            <div className={className}>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </div>
        </div>
    )
}