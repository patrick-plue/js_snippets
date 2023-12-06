import { useEffect, useState } from 'react';
import PromisePool from '@supercharge/promise-pool';

function App() {
    const [pokemon, setPokemon] = useState([]);
    console.log('pokemon', pokemon);

    useEffect(() => {
        // async function getDataWithLoop() {
        //   console.log('test');
        //   try {
        //     const list = await getPokemonList();
        //     let pokemon = [];
        //     for (const listItem of list.results) {
        //       pokemon.push(await getPokemon(listItem.url));
        //     }
        //     setPokemon(pokemon);
        //   } catch (error) {
        //     console.error(error);
        //   }
        // }
        async function getDataWithPool() {
            try {
                const list = await getPokemonList();
                const { results, erros } = await PromisePool.withConcurrency(
                    100
                )
                    .for(list.results)
                    .process(async (data) => {
                        return await getPokemon(data.url);
                    });
                setPokemon(results);
            } catch (error) {
                console.error(error);
            }
        }
        getDataWithPool();
        // getDataWithLoop();
    }, []);
    const getPokemonList = async () => {
        const listResp = await fetch(
            'https://pokeapi.co/api/v2/pokemon?limit=151'
        );
        return await listResp.json();
    };
    const getPokemon = async (url) => {
        const dataResp = await fetch(url);
        const data = await dataResp.json();
        return data;
    };

    return (
        <div className='App'>
            {pokemon &&
                pokemon
                    .sort((a, b) => a.id - b.id)
                    .map((p) => (
                        <img key={p.name} src={p.sprites.front_default} />
                    ))}
        </div>
    );
}

export default App;
