export async function getPeopleByID(id){
    const response = await fetch (
        "https://swapi.dev/api/people"+id
    );
    const payload = await response.json();
    return payload.results.properties;
}

export async function getPlanetsByID(id){
    const response = await fetch (
        "https://swapi.dev/api/planets"+id
    );
    const payload = await response.json()
    return payload.results.properties;
}
export async function getVehiclesByID(id){
    const response = await fetch (
        "https://swapi.dev/api/vehicles"+id
    );
    const payload = await response.json()
    return payload.results.properties;

}
export async function getPeople() {
    const response = await fetch(
    "https://swapi.dev/api/people/"
    );
    const payload = await response.json();
    return payload.results;
    }
    export async function getPlanets(){
        const response = await fetch(
            "https://swapi.dev/api/planets"
        );
            const payload = await response.json();
        return payload.results;
    }
    export async function getVehicles(){
        const response = await fetch(
            "https://swapi.dev/api/vehicles"
        );
        const payload = await response.json();
        return payload.results;
    }
