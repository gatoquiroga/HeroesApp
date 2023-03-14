import React, { useMemo } from 'react'
import { getHeroByPublisher } from './helpers/getHeroesByPublisher'
import HeroCard from './HeroCard'

const HeroesList = ({publisher}) => {

const heroes= useMemo(() => getHeroByPublisher(publisher), [publisher]) 


    return (
   <div className=' row row-cols-1 row-cols-md-3 g-3 '>
    {
        heroes.map(hero =>(
                <HeroCard 
                key={hero.id}
                {...hero}/>
        ))
    }
  
   </div>
  )
}

export default HeroesList
