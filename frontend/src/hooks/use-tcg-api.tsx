import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { GameChoice } from "../components/state-orchestrator/index";
import { PokemonCard, MtgCard, CommonCard } from "../lib/types";

const mtgApiFunction = () =>
  useQuery<MtgCard>({
    queryKey: ["mtgData"],
    queryFn: () =>
      fetch("https://api.scryfall.com/cards/random").then((res) => {
        return res.json();
      }),
  });

const pokemonApiFunction = () =>
  useQuery<PokemonCard>({
    queryKey: ["pokemonData"],
    queryFn: () => new Promise(() => {}),
  });

const createCommonCard = (
  card: UseQueryResult<MtgCard, Error> | UseQueryResult<PokemonCard, Error>
) => {
  return card;
};

export const useTcgApi = (gameChoice: GameChoice) => {
  switch (gameChoice) {
    case "Magic The Gathering": {
      return createCommonCard(mtgApiFunction());
    }
    case "Pokemon": {
      return createCommonCard(pokemonApiFunction());
    }
  }
};
