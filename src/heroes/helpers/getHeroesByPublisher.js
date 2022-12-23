import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
    const validPublisher = ['Marvel Comics', 'DC Comics']

    if (!validPublisher.includes(publisher)) {
        throw new Error('No existe este Publisher');
    }

    return heroes.filter(heroes => heroes.publisher === publisher)
}