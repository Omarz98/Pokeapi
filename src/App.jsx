import React, { useEffect, useState} from 'react';
import Pokedex from './lib/pokedex'
import PokemonBadge from './components/PokemonBadge'
import './styles/index.scss'

function App() {

  const [ pokemons, setPokemons] = useState([])

  useEffect(()=>{
    Pokedex.getPokemonsList({limit:150})
      .then((pokedexResponse) =>{
        setPokemons(pokedexResponse.results)
      })
  }, [])

  return (
    <>
      <nav>
        <img 
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="pokeapi"/>
      </nav>
      <main>
        <section className="results">
          {
            pokemons.map( (pokemon)=>{
              return <PokemonBadge name={pokemon.name}/>
            })
          } 
        </section>
      </main>
    </>
  );
}

export default App;
