import { GameChoice, gameChoices } from "."
import { useGetRandomCardName } from "../../hooks/use-get-random-card-names"
import { ChooseGame } from "../choose-game"
import { GuessingGame } from "../guessing-game"
import React from "react"

export const StateOrchestratorState = () => {
  
  const [gameChoice, setGameChoice] = React.useState<GameChoice | undefined>();
  const [rng] = React.useState(Math.floor(Math.random() * 1000));
  const [rngTwo] = React.useState(Math.floor(Math.random() * 1000));
  const cardOne = useGetRandomCardName("cardOne","Pokemon", rng,)?.data ?? "";
  const cardTwo = useGetRandomCardName("cardTwo","Pokemon", rngTwo)?.data ?? "";
  console.log('randomCards',cardOne, cardTwo, rng, rngTwo);

  console.log('SO: ',gameChoice);
  return (<>
    {gameChoice === undefined
      ? <ChooseGame setGameChoice={setGameChoice}/>
      : <GuessingGame gameChoice={gameChoice} cardsToCompare={[cardOne, cardTwo]}/>
    }
  </>)
}