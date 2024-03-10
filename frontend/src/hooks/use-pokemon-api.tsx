import { CommonCard, PokemonCard } from "../lib/types";
import { useQuery } from "@tanstack/react-query";

export const usePokemonApi = (fetchKey: string, cardToFetch: string) => {
  const result = useQuery<PokemonCard>({
    retry: false,
    queryKey: [fetchKey],
    queryFn: () => fetch(`https://api.pokemontcg.io/v2/cards?pageSize=1&q=name%3A${cardToFetch}`)
      .then((res) => {
        return res.json()
      })
      .then((res) => res.data[0])
  })

  if(result.isError || result.error) {
    console.log('backend error, refetching')
    result.refetch();
  };

  return result;
}