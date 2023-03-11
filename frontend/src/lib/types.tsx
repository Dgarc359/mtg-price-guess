export type Card = {
  name: string,
  image_uris: {
    png: string,
    art_crop: string,
  },
  oracle_text: string,
  prices: {
    usd: string,
    usdFoil: string | null
  }
}