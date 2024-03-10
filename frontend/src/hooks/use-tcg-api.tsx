import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { GameChoice } from "../components/state-orchestrator/index";
import { PokemonCard, MtgCard, CommonCard } from "../lib/types";
import {useMtgApi} from '.'
import { usePokemonApi } from "./use-pokemon-api";

export const useTcgApi = (gameChoice: GameChoice, fetchKey: string, cardToFetch: string) => {
  switch (gameChoice) {
    case "Magic The Gathering": {
      return useMtgApi(fetchKey);
    }
    case "Pokemon": {
      return usePokemonApi(fetchKey, cardToFetch!);
    }
  }
};
