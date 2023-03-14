import { heroes } from "../Data/heroes";

export const getHeroByPublisher =(publisher)  => {


const validPublisher = ['DC Comics' , 'Marvel Comics'];

if (! validPublisher.includes(publisher   )) {
    throw new Error('   ${publisher} no existe ');

}

return heroes.filter(heroe => heroe.publisher === publisher);
}

