import { heroes } from '../data/heroes'
export const getHeroesByPublisher = (publisher) => {
    const validPublishers  = ['DC Comics', 'Marvel Comics'];
    if(!validPublishers.includes(publisher)){
        throw new Error(`Publisher "${publisher}" no es correcto.`);
    }
    return heroes.filter(heroe => heroe.publisher === publisher);
}

export const getHeroesById = (id) => {
    return heroes.find(heroe => heroe.id === id);
}

export const getHeroesByName = (q) => {
    return heroes.filter(heroe => heroe.superhero.toLowerCase().includes(q.toLowerCase()) );
}