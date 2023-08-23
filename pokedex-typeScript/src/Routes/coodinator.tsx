export const goToPokelist = (navigate) => {
    navigate("/");
  };
  
  export const goToPokedexPage = (navigate) => {
    navigate("/pokedex");
  };
  
  export const goToDetailsPage = (navigate, pokemonName) => {
    navigate(`/${pokemonName}`);
  };
  