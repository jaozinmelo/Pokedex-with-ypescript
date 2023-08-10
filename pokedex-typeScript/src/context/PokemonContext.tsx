import React, { createContext, useState, useEffect, ReactNode } from 'react'
import axios, { AxiosResponse } from 'axios'

// definir tipo dos pokemons
interface Pokemon {
    name: string
    url: string
}

//definr o tipo para o contexto contexto
interface PokemonContextType {
    pokemons: Pokemon[]
    getPokemons: () => Promise<void>
}
//criando o contexto com um valor

export const PokemonContext = createContext<PokemonContextType>({
    pokemons: [],
    getPokemons: async () => { }

});

const PokemonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])//<Pokemon[]> "tipagem"

    const getPokemons = async () => {
        try {
            const pokemonPoints: Promise<AxiosResponse<Pokemon>>[] = []
            for (let i = 1; i <= 50; i++) {
                pokemonPoints.push(
                    axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
                )
            }
            const response = await axios.all(pokemonPoints)
            const fetchedPokemons = response.map((response) => response.data)
            setPokemons(fetchedPokemons)
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        getPokemons()
    }, [])

    console.log(pokemons);

    return (
        <PokemonContext.Provider value={{ pokemons, getPokemons }}>
            {children}
        </PokemonContext.Provider>
    )

}

export default PokemonProvider