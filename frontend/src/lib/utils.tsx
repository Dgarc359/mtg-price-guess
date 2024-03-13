import { GameChoice } from "../components/state-orchestrator";
import { CommonCard, MtgCard, PokemonCard } from "./types";


export const cn = (classNames: string[]) => {
  return classNames.join(" ").trim();
}

export const createCommonCard = (
  gameChoice: GameChoice,
  card: MtgCard | PokemonCard | undefined
): CommonCard | undefined => {
  if(!card) { 
    return card;
  }
  switch (gameChoice) {
    case "Magic The Gathering": {
      return card as CommonCard;
    }
    case "Pokemon": {
      const c = card as any[0] as PokemonCard;
      console.log('card',c);
      return {
        name: c.name,
        image_uris: {
          png: c.images.small,
          art_crop: c.images.large,
        },
        prices: {
          usd: c.cardmarket.prices.averageSellPrice.toString(),
          usdFoil: null,
        },
        legalities: {
          modern: c.legalities.unlimited as any
        },
        set_name: c.set.name
      };
    }
  }
};