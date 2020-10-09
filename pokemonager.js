//const fetch = require('node-fetch');

(() => {
  class Pokemonager {
    // This should return an array of all the names of n Pokemon from the Pokemon API.
    async findNames(n) {
      try{
        //fetch(`https://pokeapi.co/api/v2/pokemon/1`).then((value) => value.json()).then((test) => console.log(test));
        let { results } = await (await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${n}`)).json();
        return results.map((value) => value.name);
      } catch (error) {
          console.error(error);
      }
    }
    // This should return an array of all the Pokemon that are under a particular weight.

    findUnderWeight(weight) {
      // Your code here.
      // ** LIMIT TO THE FIRST 10 POKEMON
      // We don't want to make too many unnecessary calls to the Pokemon API
    }
  }

  window.Pokemonager = Pokemonager;

  //let test = new Pokemonager();
  //test.findNames(3);
})();
