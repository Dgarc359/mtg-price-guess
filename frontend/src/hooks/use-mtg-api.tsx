import React from "react"
import Axios from 'axios';
import { MtgCard } from "../lib/types";
import { useQuery } from "@tanstack/react-query";

export const useMtgApi = (fetchKey: string) => {
  const result = useQuery({
    queryKey: [fetchKey],
    queryFn: () => fetch("https://api.scryfall.com/cards/random")
      .then((res) => res.json())
  })

  if(result.isError || result.error) {
    console.log('backend error, refetching')
    result.refetch();
  };
  if(!result.isPending && (!result.data || !result.data.prices.usd)) {
    console.log("no data, refetching")
    result.refetch();
  };

  return result;
}
