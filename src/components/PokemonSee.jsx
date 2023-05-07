import React, { useEffect } from "react";
import { useGetPokemonByNameQuery } from "../services/pokemon";

function PokemonSee() {

  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery("pikachu") //"pikachu");
  // Individual hooks are also accessible under the generated endpoints:
   //const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')


 
  return (
    <div className="App">
        
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
           
          <h3>Name : {data.species.name.charAt(0).toUpperCase()+data.species.name.slice(1)}</h3>
          <h3>Type : {data.types[0].type.name.charAt(0).toUpperCase()+data.types[0].type.name.slice(1)}</h3>
          <h3>Weight : {data.weight}</h3>
          <h3>Height : {data.height}</h3>
        </>
      ) : null}
    </div>
  );
}

export default PokemonSee;
