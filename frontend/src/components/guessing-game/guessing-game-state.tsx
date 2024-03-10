import React from "react";
import { MtgCard } from "../../lib/types";
import { GuessingGamePresentation } from "./guessing-game-presentation"
import { GameChoice } from "../state-orchestrator";
import { useMtgApi } from "../../hooks/use-mtg-api";

/**
 * Takes care of API calls and setting state of cards to be compared
 * @returns 
 */
export const GuessingGameState = (props: {
  gameChoice: GameChoice 
}
) => {
  
  const [playerPick, setPlayerPick] = React.useState<string>();
  const [modalVisibility, setModalVisible] = React.useState<boolean>(false);

  const firstCardResult = useMtgApi("first-card");
  const secondCardResult = useMtgApi("second-card");

  const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const [timePassed, setTimePassed] = React.useState<boolean>(false);

  const waitAndSetTimePassed = async () => {
    setTimePassed(false);
    await wait(1500);
    setTimePassed(true);
  };

  const [playerStreak, setPlayerStreak] = React.useState<number>(0);

  const modalOnClick = (isCorrect: boolean) => {
    setModalVisible(false);
    waitAndSetTimePassed();
    [firstCardResult, secondCardResult].forEach((card) => card.refetch())
    if(isCorrect) setPlayerStreak((state) => state += 1);
    else setPlayerStreak(0);
  }

  const onPlayerChoiceClick = (e: any) => {
    setPlayerPick(e.currentTarget.id);
    setModalVisible(true);
  }

  React.useEffect(()=>{
    waitAndSetTimePassed()
  }, [])

  return (<GuessingGamePresentation 
    firstCard={firstCardResult.data} 
    secondCard={secondCardResult.data} 
    onPlayerChoiceClick={onPlayerChoiceClick} 
    modalVisible={modalVisibility}
    onModalCloseClick={modalOnClick}
    playerChoice={playerPick}
    playerStreak={playerStreak}
    timePassed={timePassed}
    />)
}