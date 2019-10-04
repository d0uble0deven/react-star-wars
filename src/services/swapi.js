export function getAllStarships() {
    const url = `https://swapi.co/api/`;
    return fetch(`${url}starships`)
        .then(res => res.json());
}