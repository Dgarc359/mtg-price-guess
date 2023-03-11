import React from "react";
import { useMtgApi } from "../../hooks/use-mtg-api";
import { Card } from "../../lib/types";
import { GuessingGamePresentation } from "./guessing-game-presentation"

/**
 * Takes care of API calls and setting state of cards to be compared
 * @returns 
 */
export const GuessingGameState = () => {
  const [firstCard, setFirstCard] = useMtgApi();
  const [secondCard, setSecondCard] = useMtgApi();
  const [winningCard, setWinningCard] = React.useState<Card | undefined>();
  const [playerPick, setPlayerPick] = React.useState<string>();
  const [modalVisibility, setModalVisible] = React.useState<boolean>(false);
  const [refreshCards, setRefreshCards] = React.useState<boolean>(false);

  const modalOnClick = () => {
    setModalVisible(false);
    setRefreshCards(true);
  }

  React.useEffect(() => {
    setWinningCard(Number(firstCard?.prices.usd) > Number(secondCard?.prices.usd) ? firstCard : secondCard)
  }, [firstCard, secondCard]);

  React.useEffect(() => {
    // setFirstCard(useMtgApi()[0]);
    // setSecondCard(useMtgApi()[0]);
  }, [refreshCards]);

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
    />)
}