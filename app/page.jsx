import CareerCard from "./components/CareerCard/CareerCard";
import IntroTitle from "./components/IntroTitle/IntroTItle";
import { CAREER, STUDIES } from '../utils/data'


export default function Home() {

    return (
        <>
            <IntroTitle>Experiencias Laborales</IntroTitle>
            {CAREER.map(({title, description, year}, index) => (
                <CareerCard key={index} title={title} description={description} year={year} direction={index % 2 === 0 ? 'card' : 'card-reversed'}></CareerCard>
            ))}
            <IntroTitle>Antecedentes Académicos</IntroTitle>
            {STUDIES.map(({title, description, year}, index) => (
                <CareerCard key={index} title={title} description={description} year={year} direction={index % 2 === 0 ? 'card' : 'card-reversed'}></CareerCard>
            ))}
        </>
    )
}