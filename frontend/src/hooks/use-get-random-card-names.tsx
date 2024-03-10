import { GameChoice } from "../components/state-orchestrator";
import {useQuery, UseQueryResult} from "@tanstack/react-query"

const useGetRandomPokemonNamesApi = (queryKey: string, limit: number, offset: number) => useQuery({
  queryKey: ["get-random-pkmn-names" + queryKey],
  queryFn: () => fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
      .then((res) => res.json())
      .then((res) => res.results[0].name)
})
export const useGetRandomCardName = (queryKey: string, choice: GameChoice | undefined, rng: number): UseQueryResult<string> | undefined => {
  console.log('getting card with offset', rng)
  switch(choice){
    case "Pokemon": return useGetRandomPokemonNamesApi(queryKey, 1, rng)
    default: undefined
  }
}