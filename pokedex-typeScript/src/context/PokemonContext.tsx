import React, { createContext, useState, useEffect, ReactNode } from 'react'
import axios, { AxiosResponse } from 'axios'

// definir tipo dos pokemons
interface Pokemon {
    id: number
    name: string
    url: string
    sprites: {
        front_default?: string
        other: {
            dream_world: {
                front_default?: string
            }
            home: {
                front_default?: string
            }
        }

    },
    types: {
        0: {
            type: {
                name: string
                url: string
            }
        }
        1: {
            type: {
                name: string
                url: string
            }
        }
    }

    moves: {
        0: {
            move: {
                name: string
                url: string
            }
        }
        1: {
            move: {
                name: string
                url: string
            }
        }
        2: {
            move: {
                name: string
                url: string
            }
        }
        3: {
            move: {
                name: string
                url: string
            }
        }
        4: {
            move: {
                name: string
                url: string
            }
        }
        5: {
            move: {
                name: string
                url: string
            }
        }
        6: {
            move: {
                name: string
                url: string
            }
        }
        7: {
            move: {
                name: string
                url: string
            }
        }
        8: {
            move: {
                name: string
                url: string
            }
        }
    }
    stats: {
        0: {
            base_stat: number
            effort: number
        }
        1: {
            base_stat: number
            effort: number
        }
        2: {
            base_stat: number
            effort: number
        }
        3: {
            base_stat: number
            effort: number
        }
        4: {
            base_stat: number
            effort: number
        }
        5: {
            base_stat: number
            effort: number
        }
    }
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

export const PokemonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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