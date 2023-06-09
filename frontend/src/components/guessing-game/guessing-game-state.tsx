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
  const [refreshFirstCard, setRefreshFirstCard] = React.useState<boolean>(false);
  const [refreshSecondCard, setRefreshSecondCard] = React.useState<boolean>(false);


  const [firstCard, setFirstCard] = useMtgApi([refreshCards, refreshFirstCard]);
  const [secondCard, setSecondCard] = useMtgApi([refreshCards, refreshSecondCard]);

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

  React.useEffect(() => {
    [{state: firstCard, refresh: setRefreshFirstCard}, {state: secondCard, refresh: setRefreshSecondCard}].forEach((card) => {
      if(!card.state?.prices.usd) card.refresh((state) => !state);
    })
    waitAndSetTimePassed();
    setWinningCard(Number(firstCard?.prices.usd) > Number(secondCard?.prices.usd) ? firstCard : secondCard)
  }, [firstCard, secondCard]);


  const onPlayerChoiceClick = (e: any) => {
    console.log("player choice", e.currentTarget.id, "winning card", winningCard?.name);
    setPlayerPick(e.currentTarget.id);
    setModalVisible(true);
  }

  return (<GuessingGamePresentation 
    firstCard={firstCard} 
    secondCard={secondCard} 
    onPlayerChoiceClick={onPlayerChoiceClick} 
    modalVisible={modalVisibility}
    onModalCloseClick={modalOnClick}
    playerChoice={playerPick}
    winningCard={winningCard}
    playerStreak={playerStreak}
    timePassed={timePassed}
    />)
}