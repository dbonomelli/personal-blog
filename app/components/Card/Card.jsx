import Title from "../CardItems/Title";
import Description from "../CardItems/Description";
import styles from './Card.module.css'


export default function Card({title, description, direction}){
    const className = `${styles[direction]}`
    return (
        <div className={className}>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </div>
    )
}