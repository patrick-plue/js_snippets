import fetch from 'node-fetch';
import { PromisePool } from '@supercharge/promise-pool';

const getPokemonList = async () => {
    const listResp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    return await listResp.json();
};

const getPokemon = async (url) => {
    const dataResp = await fetch(url);
    const data = await dataResp.json();
    return data;
};

//solution with promise pool
// choose how many simultanous fetches are made with concurrency

// try {
//   const list = await getPokemonList();
//   const { results, erros } = await PromisePool.withConcurrency(10)
//     .for(list.results)
//     .process(async (data) => {
//       return await getPokemon(data.url);
//     });
//   console.log(results.map((p) => p.name));
// } catch (error) {
//   console.error(error);
// }

//solution with promise all // again could run into errors because too many simultaneous requests
// try {
//   const list = await getPokemonList();
//   const data = await Promise.all(
//     list.results.map((pokemon) => getPokemon(pokemon.url))
//   );
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }

// for loop runs requests sequentially
// run "time node index.js" how much time it took to execute
// try {
//   const list = await getPokemonList();
//   for (const listItem of list.results) {
//     const pokemon = await getPokemon(listItem.url);
//     console.log(pokemon.name);
//   }
// } catch (err) {
//   console.error(err);
// }

// fetches sequentially with reduce //not adivsed because too complex
// try {
//   const list = await getPokemonList();
//   list.results.reduce(async (pr, pokemon) => {
//     await pr;
//     return getPokemon(pokemon.url).then((p) => console.log(p.name));
//   }, Promise.resolve(undefined));
// } catch (err) {
//   console.error(err);
// }

//forEach here could possibly run into errors because too many request are fired at once
//checked with 1000 pokemon. did not ran into errors at all) - try with slow db conneciton - maybe postgresql
// try {
//   const list = await getPokemonList();
//   list.results.forEach(async (listItem) => {
//     const pokemon = await getPokemon(listItem.url);
//     console.log(pokemon.name);
//   });
// } catch (err) {
//   console.error(err);
// }

/*
// just getting the list once - kind of build-in cache
try {
  const pokemonPromise = getFirstPokemon();
  const pokemon = await pokemonPromise;
  console.log('pokemon', pokemon.name);
  const pokemon2 = await pokemonPromise;
  console.log('pokemon2', pokemon2.name);
} catch (err) {
  console.error(err);
}
*/
