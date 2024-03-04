import React from "react"
import Axios from 'axios';
import { Card } from "../lib/types";
import { useQuery } from "@tanstack/react-query";

export const useMtgApi = (fetchKey: string) => {

  // const [response, setResponse] = React.useState<Card | undefined>();

  // React.useEffect(() => {
  //   let isCurrent = true
  //   Axios.get("https://api.scryfall.com/cards/random")
  //     .then((res) => {
  //         if(isCurrent){
  //           setResponse(res.data)
  //         }
  //       })
  //     .catch(err => alert(err))
  //   return () => {
  //       isCurrent = false
  //   }
  // }, refreshArr);

  return  useQuery({
    queryKey: [fetchKey],
    queryFn: () => fetch("https://api.scryfall.com/cards/random")
      .then((res) => res.json())
  })

  //return {isPending, error, data};
  //return [response, setResponse] as const
}
