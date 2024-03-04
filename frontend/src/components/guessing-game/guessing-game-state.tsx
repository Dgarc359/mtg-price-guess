import React from "react";
import { useMtgApi } from "../../hooks/use-mtg-api";
import { Card } from "../../lib/types";
import { GuessingGamePresentation } from "./guessing-game-presentation"

/**
 * Takes care of API calls and setting state of cards to be compared
 * @returns 
 */
export const GuessingGameState = () => {
  
  const [winningCard, setWinningCard] = React.useState<Card | undefined>();
  const [playerPick, setPlayerPick] = React.useState<string>();
  const [modalVisibility, setModalVisible] = React.useState<boolean>(false);

  const [refreshCards, setRefreshCards] = React.useState<boolean>(false);

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
    // waitAndSetTimePassed();
    setRefreshCards((state) => !state)
    if(isCorrect) setPlayerStreak((state) => state += 1);
    else setPlayerStreak(0);
  }

  const onPlayerChoiceClick = (e: any) => {
    console.log("player choice", e.currentTarget.id, "winning card", winningCard?.name);
    setPlayerPick(e.currentTarget.id);
    setModalVisible(true);
  }

  if (firstCardResult.isError) {
    firstCardResult.refetch()
  } else if (secondCardResult.isError) {
    secondCardResult.refetch()
  }

  React.useEffect(() => {
    let p1, p2 = undefined;
    if(!firstCardResult.isPending && firstCardResult.data) {

      let fc: Card = firstCardResult.data;
      if(fc !== undefined && fc.prices.usd === undefined) {
        firstCardResult.refetch()
      } else {
        p1 = fc.prices.usd
      }
    }
    if(!secondCardResult.isPending && secondCardResult.data) {
      let sc: Card = secondCardResult.data;
      if(sc !== undefined && sc.prices.usd === undefined) {
        secondCardResult.refetch()
      } else {
        p2 = sc.prices.usd
      }
    }
    
    waitAndSetTimePassed();
    if(p1 && p2) {
    setWinningCard(
      Number(p1) < Number(p2) ? firstCardResult.data : secondCardResult.data
    )
    }
  }, []);

  return (<GuessingGamePresentation 
    firstCard={firstCardResult.data} 
    secondCard={secondCardResult.data} 
    onPlayerChoiceClick={onPlayerChoiceClick} 
    modalVisible={modalVisibility}
    onModalCloseClick={modalOnClick}
    playerChoice={playerPick}
    winningCard={winningCard}
    playerStreak={playerStreak}
    timePassed={timePassed}
    />)
}