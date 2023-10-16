import React from "react"
import Axios from 'axios';
import { Card } from "../lib/types";

export const useMtgApi = (refreshArr: boolean[]) => {

  const [response, setResponse] = React.useState<Card | undefined>();

  React.useEffect(() => {
    let isCurrent = true
    Axios.get("https://api.scryfall.com/cards/random")
      .then((res) => {
          if(isCurrent){
            setResponse(res.data)
          }
        })
      .catch(err => alert(err))
    return () => {
        isCurrent = false
    }
  }, refreshArr);

  return [response, setResponse] as const
}
