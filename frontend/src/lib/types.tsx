export type Card = {
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