
const getPokemon = () =>{
    let url = "https://pokeapi.co/api/v2/ability/?limit=1500&offset=0";

    const getFetch = fetch(url);

    const getJson = getFetch.json();


}