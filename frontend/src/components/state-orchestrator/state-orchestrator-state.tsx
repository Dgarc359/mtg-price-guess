import { GameChoice } from "."
import { useMtgApi } from "../../hooks/use-mtg-api"
import { Card } from "../../lib/types"
import { ChooseGame } from "../choose-game"
import { GuessingGame } from "../guessing-game"
import React from "react"

export const StateOrchestratorState = () => {

  const [gameChoice, setGameChoice] = React.useState<GameChoice | undefined>();

  if (gameChoice === undefined) { return (<ChooseGame/>) }


  return (<GuessingGame gameChoice={gameChoice}/>)
}