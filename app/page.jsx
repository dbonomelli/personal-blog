import Card from "./components/Card/Card";
import { CAREER } from '../utils/data'

export default function Home() {

    return (
        <>
            {CAREER.map(({title, description}, index) => (
                <Card key={index} title={title} description={description} direction={index % 2 === 0 ? 'card' : 'card-reversed'}></Card>
            ))}
        </>
    )
}