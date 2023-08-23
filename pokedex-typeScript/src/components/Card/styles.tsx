import tw from "tailwind-styled-components"

interface PokemonCardProps {
  type: string
}

export const getBackgroundColorByType = (type: string) => {
  const typeColors = {
    bug: '#76A866',
    dark: '#704139',
    dragon: '#7038F8',
    electric: '#F8D030',
    fairy: '#EE99AC',
    fighting: '#C03028',
    fire: '#F08030',
    flying: '#A890F0',
    ghost: '#705898',
    grass: '#78C850',
    ground: '#E0C068',
    ice: '#98D8D8',
    normal: '#A8A878',
    poison: '#A040A0',
    psychic: '#F85888',
    rock: '#B8A038',
    steel: '#B8B8D0',
    water: '#6890F0',
  };

  return typeColors[type] || 'transparent';
}

export const PokemonCardContainer = tw.div<PokemonCardProps>`
  rounded-lg
  flex
  flex-row
  mt-8
  p-6
  bg-${props => getBackgroundColorByType(props.type)}   
  w-1/3
`;

export const DetailsPokemon = tw.div`
    w-2/4
    relative
    mt-8
    
`;

export const PokemonId = tw.div`
    font-bold
    text-xs
    leading-3
    
`;

export const PokemonName = tw.div`
    font-bold
    text-2xl
    leading-3
    mt-1.5
    capitalize
    
`;

export const PokemonContentType = tw.div`
    flex-row
    
`;


export const PokemonType = tw.div`
    p-1
    w-16
    h-6
    ml-1
    mt-1
    rounded
    justify-center
    items-center
`;

export const TextPokemonType = tw.div`
    font-medium
    text-xs
`;

export const AvatarPokemon = tw.div`
    flex
    flex-col
    w-2/4 
    items-center
    justify-center
`;

export const ImagePokemon = tw.img`
    w-full
    
`;

export const CapturButton = tw.button`
    bg-orange-500 
    hover:bg-red-700 
    text-white 
    font-bold 
    py-2 px-4 
    rounded
    mt-8
    
`;
export const DetailsButton = tw.button`
    bg-transparent 
    hover:bg-orange-500 
    text-orange-500
    font-semibold 
    hover:text-white 
    py-2 
    px-4 
    border 
    border-orange-500 
    hover:border-transparent 
    rounded
    absolute bottom-0 left-0  ...
`;
