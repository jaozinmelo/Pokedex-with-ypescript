import tw from "tailwind-styled-components"
export const Containter = tw.div`

    sm:flex
    items-stretch
    justify-between
    grow
    lg:mb-0
    mb-5
    py-5
    px-10

`;

export const LogoContainer = tw.div`
    flex
    flex-col
    flex-wrap
    justify-center
    mb-5
    mr-3
`;

export const LogoImg = tw.img`
    flex
    flex-col 
    justify-center
`;

export const NavContainter = tw.div`
    flex
    items-center
    lg:shrink-0'
    lg:flex-nowrap
`;

export const SearchContainer = tw.div`
    relative
    flex
    items-center
    lg:ml-4
    sm:mr-2
`;
export const SearchPlaceHolder = tw.span`
    absolute
    ml-4
    leading-none
    -translate-y-1/2
    top-1/2
`;

export const InputSearch = tw.input`
    block
    w-full
    min-w-[70px]
    py-3
    pl-12
    line-normal
    bg-white
    border
    border-solid
    outline-none
    apperance-none
    text-stone-400
    border-stone-200
    bg-clip-padding
    rounded-2x1
`;

export const IconDeleteSearch = tw.span`
    absolute
    right-0
    left-auto
    leading-none
    -translate-y-1/2
    peer-placeholder-shown:hidden
    top-1/2
    hover:text-primary
`;

export const AvatarContainer = tw.div

    `relative
 flex
 items-center
 ml-2
 lg:ml-4
`;



export const AvatarIcon = tw.div

    `
flex
items - center
justify - center
w - 14
h - 14
leading - normal
align - middle
transition - colors
duration - 150
ease -in -out
bg - transparent
border
border - solid
shadow - none
cursor
rounded - 2xl
border - stone - 200
`;





export const BagPokemon = tw.div`
flex
items - center
justify - center
w - 14
h - 14
leading - normal
align - middle
transition - colors
duration - 150
ease -in -out
bg - transparent
border
border - solid
shadow - none
cursor
rounded - 2xl
border - stone - 200
ml - 3
`;