import { heroes } from "../data/Heroes";

export const getHeroeByPublisher = (publisher)=>{
    const validPublishers = ['DC Comics','Marvel Comics'];
    if (!validPublishers.includes(publisher)) {
       throw new Error(`${publisher} no es un publisher valido`) 
    }
    return heroes.filter((hero)=>hero.publisher === publisher);
}