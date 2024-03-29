export type MtgCard = {
  name: string,
  image_uris: {
    png: string,
    art_crop: string,
  },
  oracle_text: string,
  prices: {
    usd: string | null,
    usdFoil: string | null
  },
  legalities: {
    modern: "legal" | "not_legal"
  },
  set_name: string,
}
export type CommonCard = {
  name: string,
  image_uris: {
    png: string,
    art_crop: string,
  },
  // oracle_text: string,
  prices: {
    usd: string | null,
    usdFoil: string | null
  },
  legalities: {
    modern: "legal" | "not_legal"
  },
  set_name: string,
}

export type PokemonCard = {
  name: string,
  images: {
    small: string,
    large: string,
  },
  cardmarket?: {
    prices: {
      averageSellPrice: number
    }
  },
  legalities: { unlimited: string },
  set: { name: string }
}