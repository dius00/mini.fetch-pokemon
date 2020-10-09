//const fetch = require('node-fetch');

(() => {
  class Pokemonager {
    // This should return an array of all the names of n Pokemon from the Pokemon API.
    async findNames(n) {
      try{
        let { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${n}`);
        return data.results.map((value) => value.name);
      } catch (error) {
          console.error(error);
      }
    }

    // This should return an array of all the Pokemon that are under a particular weight.
    async findUnderWeight(weight) {
      try{
        let { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10`);
        const pokemons = [];
         for(let value of data.results) {
             pokemons.push((await axios.get(value.url)).data);
         }
         return pokemons.filter((pokemon) => pokemon.weight < weight)
      } catch (error) {
        console.error(error);
      }
    }
  }
  window.Pokemonager = Pokemonager;
})();
