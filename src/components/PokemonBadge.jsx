import React,{useState,useEffect} from 'react'
import Pokedex from '../lib/pokedex'

export default function PokemonBadge({name =''}){

    const [pokemon, setPokemon] = useState({})
    const [image,setImage]= useState('https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png')

    useEffect(()=>{
        Pokedex.getPokemonByName(name)
            .then((pokedexResponse)=>{
                setPokemon(pokedexResponse)
                setImage(pokedexResponse.sprites.front_default)
            })
    }, [])

    return (
        <article className="pokemon-card">
            <header>
              <img 
                //src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
                src={image}
                alt=""
              />
            </header>
            <footer>
              {name}
            </footer>
        </article>
    )
}