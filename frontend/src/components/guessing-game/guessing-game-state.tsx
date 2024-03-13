import React from "react";
import { CommonCard, MtgCard, PokemonCard } from "../../lib/types";
import { GuessingGamePresentation } from "./guessing-game-presentation";
import { GameChoice } from "../state-orchestrator";
import { useTcgApi } from "../../hooks/use-tcg-api";
import { createCommonCard } from "../../lib/utils";
import { useGetRandomCardName } from "../../hooks/use-get-random-card-names";


interface Props {
  gameChoice: GameChoice, cardsToCompare: [string, string],
  reloadCallback?: () => void,
}

/**
 * Takes care of API calls and setting state of cards to be compared
 * @returns
 */
export const GuessingGameState = (props: Props) => {
  const { gameChoice, cardsToCompare, reloadCallback } = props;

  const [playerPick, setPlayerPick] = React.useState<string>();
  const [modalVisibility, setModalVisible] = React.useState<boolean>(false);

  const firstCardResult = useTcgApi(gameChoice, `first-card-${cardsToCompare}`, cardsToCompare[0]);
  const secondCardResult = useTcgApi(gameChoice, `second-card-${cardsToCompare}`, cardsToCompare[1]);

  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const [timePassed, setTimePassed] = React.useState<boolean>(false);

  const waitAndSetTimePassed = async () => {
    setTimePassed(false);
    await wait(1500);
    setTimePassed(true);
  };

  const [playerStreak, setPlayerStreak] = React.useState<number>(0);

  const modalOnClick = (isCorrect: boolean) => {
    setModalVisible(false);
    if(reloadCallback) {
      reloadCallback();
    }
    waitAndSetTimePassed();
    [firstCardResult, secondCardResult].forEach((card) => card.refetch());
    if (isCorrect) setPlayerStreak((state) => (state += 1));
    else setPlayerStreak(0);
  };

  const onPlayerChoiceClick = (e: any) => {
    setPlayerPick(e.currentTarget.id);
    setModalVisible(true);
  };

  React.useEffect(() => {
    waitAndSetTimePassed();
  }, []);

  return (
    <GuessingGamePresentation
      firstCard={createCommonCard(gameChoice, firstCardResult.data)}
      secondCard={createCommonCard(gameChoice, secondCardResult.data)}
      onPlayerChoiceClick={onPlayerChoiceClick}
      modalVisible={modalVisibility}
      onModalCloseClick={modalOnClick}
      playerChoice={playerPick}
      playerStreak={playerStreak}
      timePassed={timePassed}
    />
  );
};
