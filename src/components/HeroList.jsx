import { useMemo } from 'react';
import { getHeroesByPublisher } from '../services/dataService'
import { HeroCard } from './HeroCard';
export const HeroList = ({publisher}) => {
    
    const heroes = useMemo(()=>{
        return getHeroesByPublisher(publisher);
    },[publisher]);

    return(
        <div className="row animate__animated animate__fadeInLeft" >
            {
                heroes.map( (hero) => (
                    <HeroCard  key={hero.id} {...hero}/>
                ))
            }
        </div>
    );
}