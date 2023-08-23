import React from 'react'
import * as S from './styles'
type PokemonType = {
    type: {
        name: string;
    }
}
interface CardProps {
    
    
    pokemon: {
        id: number
        name: string;
        url: string;
        types: PokemonType[]
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

        }
    };
}



const Card: React.FC<CardProps> = ({ pokemon }) => {
    const primaryType = pokemon.types[0].type.name;

    return (
        <S.PokemonCardContainer type={primaryType}>
            <S.DetailsPokemon>
                <S.PokemonId>{pokemon.id < 10 ? `#0${pokemon.id}` : `#${pokemon.id}`}</S.PokemonId>
                <S.PokemonName>{pokemon.name}</S.PokemonName>


                <S.PokemonContentType>
                    <S.PokemonType>
                        <S.TextPokemonType>                {Object.values(pokemon.types).map((typeInfo) => {
                            return ` ${typeInfo.type.name}`
                        })}</S.TextPokemonType>
                    </S.PokemonType>
                </S.PokemonContentType>
                <S.DetailsButton>Detalhes</S.DetailsButton>
            </S.DetailsPokemon>

            <S.AvatarPokemon>
                <S.ImagePokemon src={pokemon.sprites.other.dream_world.front_default} alt={`${pokemon.name} image avatar`} />
                <S.CapturButton>Capturar</S.CapturButton>
            </S.AvatarPokemon>
        </S.PokemonCardContainer>
    )
}

export default Card