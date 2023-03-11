import React from "react";
import { useMtgApi } from "../../hooks/use-mtg-api";
import { GuessingGamePresentation } from "./guessing-game-presentation"

/**
 * Takes care of API calls and setting state of cards to be compared
 * @returns 
 */
export const GuessingGameState = () => {
  const [firstCard, setFirstCard] = useMtgApi();
  const [secondCard, setSecondCard] = useMtgApi();

  return (<GuessingGamePresentation firstCard={firstCard} secondCard={secondCard}/>)
}