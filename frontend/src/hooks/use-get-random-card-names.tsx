import { GameChoice } from "../components/state-orchestrator";
import {useQuery, UseQueryResult} from "@tanstack/react-query"

const useGetRandomPokemonNamesApi = (queryKey: string, limit: number, offset: number) => {
  
  
  const res = useQuery({
  queryKey: ["get-random-pkmn-names" + queryKey],
  queryFn: () => fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
      .then((res) => res.json())
      .then((res) => res.results[0].name)
  })

  if (res.data && res.data === "undefined") {
    res.refetch();
  }

  return res;
}
export const useGetRandomCardName = (queryKey: string, choice: GameChoice | undefined, rng: number): UseQueryResult<string> | undefined => {
  switch(choice){
    case "Pokemon": return useGetRandomPokemonNamesApi(queryKey, 1, rng)
    default: undefined
  }
}