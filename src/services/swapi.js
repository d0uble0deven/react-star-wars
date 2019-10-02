export function getAllStarships() {
    const url = `https://swapi.co/api/starships/`;
    return fetch(url, { mode: cors })
        .then(res => res.json());
}