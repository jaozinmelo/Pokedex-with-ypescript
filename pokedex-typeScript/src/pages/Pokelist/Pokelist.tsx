import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import {PokemonContext} from '../../context/PokemonContext'
import Card from '../../components/Card/Card'
const Pokelist = () => {
    const {pokemons} = useContext(PokemonContext)
  return (
    <>
        <Header/>
        {pokemons.map((pokemon: {
            name:string
        }) => {
            return <Card key={pokemon.name}
            pokemon={pokemon}
            />
        })}
    </>
  )
}

export default Pokelist