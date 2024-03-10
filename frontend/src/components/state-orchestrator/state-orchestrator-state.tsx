import { GameChoice, gameChoices } from "."
import { useGetRandomCardName } from "../../hooks/use-get-random-card-names"
import { ChooseGame } from "../choose-game"
import { GuessingGame } from "../guessing-game"
import React from "react"

export const StateOrchestratorState = () => {
  
  const [gameChoice, setGameChoice] = React.useState<GameChoice | undefined>();

  let RNG_MAX = 1_000;
  let RNG_MIN = 0;

  const [rng, setRng] = React.useState(Math.floor(Math.random() * (RNG_MAX-RNG_MIN + 1)) + RNG_MIN);
  const [rngTwo, setRngTwo] = React.useState(Math.floor(Math.random() * (RNG_MAX - RNG_MIN + 1)) + RNG_MIN);

  const getNewCardRng = (state: number): number => {
    let newNumber =Math.floor(Math.random() * (RNG_MAX - RNG_MIN + 1)+ RNG_MIN);
    while (newNumber === state) {
      newNumber = Math.floor(Math.random() * (RNG_MAX - RNG_MIN + 1)+ RNG_MIN); 
    }

    return newNumber;
  }

  console.log("reloading cards", rng, rngTwo)

  const onPlayerRequiresReload = () => {
    setRng(getNewCardRng);
    setRngTwo(getNewCardRng);
  }

  const cardOne = useGetRandomCardName(`cardOne-${rng}`,"Pokemon", rng)?.data ?? "";
  const cardTwo = useGetRandomCardName(`cardTwo-${rngTwo}`,"Pokemon", rngTwo)?.data ?? "";

  return (<>
    {gameChoice === undefined
      ? <ChooseGame setGameChoice={setGameChoice}/>
      : <GuessingGame 
          gameChoice={gameChoice} 
          cardsToCompare={[cardOne, cardTwo]} 
          reloadCallback={gameChoice === "Pokemon" ? onPlayerRequiresReload : undefined}
        />
    }
  </>)
}