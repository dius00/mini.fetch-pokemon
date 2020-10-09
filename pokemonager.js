//const fetch = require('node-fetch');

(() => {
  class Pokemonager {
    // This should return an array of all the names of n Pokemon from the Pokemon API.
    async findNames(n) {
      try{
        let { results } = await (await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${n}`)).json();
        return results.map((value) => value.name);
      } catch (error) {
          console.error(error);
      }
    }

    // This should return an array of all the Pokemon that are under a particular weight.
    async findUnderWeight(weight) {
      try{
        let { results } = await (await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10`)).json();
        const pokemons = [];
         for(let value of results) {
             pokemons.push( await (await fetch(value.url)).json());
         }
         return pokemons.filter((pokemon) => pokemon.weight < weight)
      } catch (error) {
        console.error(error);
      }
    }
  }
  window.Pokemonager = Pokemonager;
})();
