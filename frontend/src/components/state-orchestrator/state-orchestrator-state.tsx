import { GameChoice, gameChoices } from "."
import { ChooseGame } from "../choose-game"
import { GuessingGame } from "../guessing-game"
import React from "react"

export const StateOrchestratorState = () => {
  
  const [gameChoice, setGameChoice] = React.useState<GameChoice | undefined>();

  if (gameChoice === undefined) { return (<ChooseGame setGameChoice = {setGameChoice}/>) }
  

  return (<GuessingGame gameChoice={gameChoice}/>)
}